# BrosOnRoads — Vercel Deployment

This project is prepared for a standard Next.js deployment on Vercel.

## Deploy

1. Extract this project.
2. Push the extracted folder to a GitHub/GitLab/Bitbucket repository, or deploy the folder with the Vercel CLI.
3. Import the repository into Vercel.
4. Vercel should detect **Next.js** automatically.
5. No custom build command is required; the project uses `next build`.
6. No environment variable is required for the current site.

## Important assets

The hero video is already included at:

`public/videos/hero.mp4`

The hero poster/fallback is:

`public/videos/hero-poster.jpg`

## Social links

Update the YouTube and Instagram URLs in:

`src/lib/site.ts`

## Production domain

Update `BROSONROADS.siteUrl` in `src/lib/site.ts` after the Vercel domain/custom domain is known so canonical and structured-data URLs point to the live site.
