import { mkdir, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const siteRoot = "https://www.woacocktails.com";
const outputRoot = new URL("../public/reference-assets/current-site/", import.meta.url);

const pageFolderMap = {
  "/home": "home",
  "/": "home",
  "/services": "services",
  "/contact": "contact",
  "/inquire-now": "contact",
  "/about": "about",
  "/classes": "classes",
  "/events": "events/index",
  "/events/project-two-ky966-9c4lg": "events/style-bender",
  "/events/project-one-f5w4d-p74fz": "events/summer-party",
  "/events/woa-x-ink-cocktail-class": "events/ink-cocktail-class",
};

function normalizeUrl(raw) {
  return raw.startsWith("//") ? `https:${raw}` : raw;
}

function sanitizeSegment(segment) {
  return segment
    .replace(/\+/g, " ")
    .replace(/%20/g, " ")
    .replace(/%28/g, "(")
    .replace(/%29/g, ")")
    .replace(/[^a-zA-Z0-9._()-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function getFileName(rawUrl, pageKey, index, shared) {
  const url = new URL(normalizeUrl(rawUrl));
  const originalName = decodeURIComponent(basename(url.pathname));
  const cleaned = sanitizeSegment(originalName);
  const prefix = shared ? "shared" : sanitizeSegment(pageKey.replaceAll("/", "-"));
  return `${prefix}-${String(index + 1).padStart(2, "0")}-${cleaned}`;
}

async function fetchText(url) {
  const { stdout } = await execFileAsync("curl", ["-L", "--silent", url], {
    maxBuffer: 20 * 1024 * 1024,
  });
  return stdout;
}

async function downloadFile(url, destination) {
  await execFileAsync("curl", [
    "-L",
    "--fail",
    "--silent",
    "--show-error",
    "-o",
    destination,
    url,
  ]);
}

const xml = await fetchText(`${siteRoot}/sitemap.xml`);
const blocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];

const pages = blocks.map((match) => {
  const block = match[1];
  const loc = (block.match(/<loc>([^<]+)<\/loc>/) || [])[1];
  const imageLocs = [...block.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map(
    (m) => m[1]
  );
  return { loc, imageLocs };
});

const occurrences = new Map();
for (const page of pages) {
  const pageUrl = new URL(page.loc);
  const folderKey = pageFolderMap[pageUrl.pathname];
  if (!folderKey) continue;
  for (const rawUrl of page.imageLocs) {
    const url = normalizeUrl(rawUrl);
    const entry = occurrences.get(url) || [];
    entry.push(folderKey);
    occurrences.set(url, entry);
  }
}

await mkdir(outputRoot, { recursive: true });

const manifest = [];
for (const page of pages) {
  const pageUrl = new URL(page.loc);
  const folderKey = pageFolderMap[pageUrl.pathname];
  if (!folderKey) continue;

  const pageDir = join(outputRoot.pathname, folderKey);
  await mkdir(pageDir, { recursive: true });

  for (const [index, rawUrl] of page.imageLocs.entries()) {
    const url = normalizeUrl(rawUrl);
    const refs = occurrences.get(url) || [];
    const shared =
      refs.length > 1 ||
      /favicon\.ico/i.test(url) ||
      /untitled\+design/i.test(url) ||
      /logo/i.test(url);
    const targetFolder = shared ? "shared" : folderKey;
    const targetDir = join(outputRoot.pathname, targetFolder);
    await mkdir(targetDir, { recursive: true });

    const fileName = getFileName(url, folderKey, index, shared);
    const destination = join(targetDir, fileName);

    try {
      await downloadFile(url, destination);
    } catch (error) {
      console.error(`Failed to download ${url}`);
      throw error;
    }

    manifest.push({
      page: page.loc,
      folder: targetFolder,
      fileName,
      localPath: `/reference-assets/current-site/${targetFolder}/${fileName}`,
      sourceUrl: url,
    });
  }
}

const uniqueFiles = [...new Map(manifest.map((item) => [item.sourceUrl, item])).values()];
await writeFile(
  join(outputRoot.pathname, "manifest.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      siteRoot,
      pages: pages.map((page) => ({
        page: page.loc,
        images: page.imageLocs.length,
      })),
      files: uniqueFiles,
    },
    null,
    2
  )
);

await writeFile(
  join(outputRoot.pathname, "README.md"),
  [
    "# WOA current-site asset library",
    "",
    "Downloaded from https://www.woacocktails.com to seed the project asset library.",
    "",
    "Folders:",
    "- `shared` for repeated brand graphics and icons",
    "- `home`",
    "- `about`",
    "- `services`",
    "- `classes`",
    "- `events/style-bender`",
    "- `events/summer-party`",
    "- `events/ink-cocktail-class`",
    "",
    "Use `manifest.json` to trace each file back to its original Squarespace URL.",
    "",
  ].join("\n")
);

console.log(`Downloaded ${uniqueFiles.length} unique asset files.`);
