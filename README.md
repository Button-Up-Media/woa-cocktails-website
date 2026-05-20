# WOA Cocktails Website

Phase 1 foundation for the WOA Cocktails rebuild.

## What’s in place

- Fresh Next.js app scaffold
- Company GitHub repo structure
- Vercel-ready deployment base
- Current-site asset library downloaded and sorted
- Shared setup and deployment notes
- Starter pages for foundation and workflow review

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Deployment flow

- `main` should remain the production branch
- Feature branches should be used for page work
- Vercel preview deployments should be used for review before merge

## Environment variables

Create a local `.env.local` file from `.env.example` and add any future
integration keys there.

## Next steps

1. Build the 10-page marketing site structure.
2. Add Miami and NYC location pages.
3. Integrate Calendly booking on the Book Now flow.
4. Add SEO, schema, analytics, and bilingual support in planned phases.
5. Expand the asset library when the client sends the next batch of photos and graphics.
