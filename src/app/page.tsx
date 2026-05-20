import Link from "next/link";

const foundationItems = [
  "Fresh GitHub repo under the company org",
  "Vercel-ready Next.js scaffold",
  "Branch workflow and deployment notes",
  "SEO and booking integration prep",
];

const nextPhaseItems = [
  "Home",
  "About / Founders",
  "Full Mobile Bar Services",
  "Bartender Services",
  "Mixology Classes",
  "Packages & Pricing",
  "Event Gallery",
  "Testimonials",
  "FAQ",
  "Contact / Book Now",
  "Miami location page",
  "NYC location page",
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8 text-foreground sm:px-10 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-between rounded-[2rem] border border-[color:var(--border)] bg-[rgba(12,12,12,0.72)] shadow-2xl shadow-black/30 backdrop-blur-sm">
        <header className="flex items-center justify-between border-b border-[color:var(--border)] px-6 py-5 sm:px-8">
          <div>
            <p className="font-serif text-lg tracking-[0.32em] text-[color:var(--accent)]">
              WOA
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Work of Art Hospitality
            </p>
          </div>
          <div className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
            Phase 1 foundation
          </div>
        </header>

        <section className="grid gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit rounded-full border border-[color:var(--border)] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
              New York City + Miami
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              The deployment foundation for WOA Cocktails is now live.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              We’ve set up the new project structure, repo conventions, and
              deployment-ready base so the rebuild can move straight into page
              development for both NYC and Miami.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://www.woacocktails.com/"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Review current site
              </Link>
              <a
                href="/setup-and-deployment"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/5"
              >
                View setup notes
              </a>
            </div>
          </div>

          <div className="grid gap-4 self-start rounded-[1.5rem] border border-[color:var(--border)] bg-white/5 p-5">
            <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
                What phase 1 delivered
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground">
                {foundationItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
                Ready for next build steps
              </p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                The scaffold is ready for the first production page set,
                Calendly booking integration, SEO architecture, analytics, and
                future bilingual support.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-[color:var(--border)] px-6 py-8 lg:grid-cols-3 lg:px-8">
          <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
              Repo conventions
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              `main` is intended for production, feature branches handle page
              work, and preview deployments are the normal review path.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
              Build scope
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              The next sprint can focus on the 10-page marketing build plus the
              Miami and NYC location pages without reworking the foundation.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-[color:var(--border)] bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
              Page map
            </p>
            <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
              {nextPhaseItems.length} planned pages are queued for the rebuild,
              with service pages structured as future landing pages.
            </p>
          </div>
        </section>

        <footer className="border-t border-[color:var(--border)] px-6 py-5 text-sm text-[color:var(--muted)] sm:px-8">
          Built as the starting point for the WOA Cocktails website refresh.
        </footer>
      </div>
    </main>
  );
}
