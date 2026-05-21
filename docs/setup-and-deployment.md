# Setup and deployment notes

## Repository

- Repo name: `woa-cocktails-website`
- Owner: `Button-Up-Media`
- Branch model: `main` for production, feature branches for active work

## Environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CALENDLY_URL`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`

## Deployment expectations

- Every branch should produce a Vercel preview deployment
- `main` should represent production-ready code
- This repo is the base for the full WOA rebuild and future page builds

## Asset intake

- Current-site image and graphic assets were downloaded into `public/reference-assets/current-site`
- Files are sorted by page or by shared brand use
- `manifest.json` tracks the source URL and local path for each captured asset
- The missing Squarespace graphic is the homepage image block `Untitled design (62).png`
- The exact CDN URL returned `404` during re-extraction, so the original file is not currently recoverable from the live source

## Phase 2-ready targets

- Home
- About / Founders
- Full Mobile Bar Services
- Bartender Services
- Mixology Classes
- Packages & Pricing
- Event Gallery
- Testimonials
- FAQ
- Contact / Book Now
- Miami location page
- NYC location page
