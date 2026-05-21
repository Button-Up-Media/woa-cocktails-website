# Asset inventory

This repo already includes the photo and brand assets needed to start the WOA Cocktails rebuild.

## Vercel connection

- The project is linked locally to Vercel through [`.vercel/project.json`](../.vercel/project.json)
- Preview environment variables were pulled locally with `vercel pull`

## Primary asset library

All current-site assets live under [`public/reference-assets/current-site`](../public/reference-assets/current-site)

### Included folders

- `about`
- `brand`
- `classes`
- `contact`
- `events/index`
- `events/ink-cocktail-class`
- `events/style-bender`
- `events/summer-party`
- `home`
- `services`
- `shared`

### Asset snapshot

- 96 files total in `public/reference-assets/current-site`
- 5 homepage images
- 3 service images
- 3 events index images
- 21 style-bender event images
- 53 summer-party event images
- 3 ink-cocktail-class images
- Brand favicon and brand PNG included

## How to use the assets

- Use the reference assets first when building pages, gallery sections, and location pages
- Keep the current-site files as the source-of-truth until page-specific imports are finalized
- The manifest at [`public/reference-assets/current-site/manifest.json`](../public/reference-assets/current-site/manifest.json) maps each file back to its original source URL

## Design handoff assets

The About page now also uses design bundle photography stored under [`public/reference-assets/design-about`](../public/reference-assets/design-about)
The Home page now also uses design bundle photography stored under [`public/reference-assets/design-home`](../public/reference-assets/design-home)
The Mobile Bar page now uses the approved red-line hero illustration stored under [`public/reference-assets/design-home/mobile-bar-line-art-red.png`](../public/reference-assets/design-home/mobile-bar-line-art-red.png)
The Mixology Private Classes page now uses the current-site classes assets stored under [`public/reference-assets/current-site/classes`](../public/reference-assets/current-site/classes) and [`public/reference-assets/current-site/events/ink-cocktail-class`](../public/reference-assets/current-site/events/ink-cocktail-class)

## Follow-up item

- The missing Squarespace graphic is the homepage image block `Untitled design (62).png` from `https://images.squarespace-cdn.com/content/v1/65f4ac853dd9573b28fc9a4f/28b424e8-013d-4601-95f4-4e01479477ee/Untitled+design+%2862%29.png`
- That CDN URL returned `404` during re-extraction, so the exact original asset is not currently recoverable from the live source
