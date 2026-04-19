# Deployment Guide to Vercel

To deploy the WebStruct project to Vercel, follow these steps:

## Prerequisites
- A GitHub, GitLab, or Bitbucket account.
- [Vercel CLI](https://vercel.com/cli) (optional, for manual deployment).

## Automated Deployment (Recommended)
1. **Push to a Git Repository:**
   Create a new repository and push the `WEBSTRUCT` code.
2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/vercel.com/new).
   - Select your repository.
   - Vercel will automatically detect the **Next.js** framework.
3. **Environment Variables:**
   - If you have any sensitive keys, add them in the "Environment Variables" section.
4. **Deploy:**
   - Click "Deploy". Vercel will build and host your site on a production-ready URL.

## Manual Deployment (via CLI)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Follow the prompts to link your account and project.
4. To deploy to production: `vercel --prod`

## Optimization Check
- Ensure `metadataBase` in `src/app/layout.tsx` matches your production domain.
- Verify the `sitemap.xml` and `robots.txt` are correctly generated after deployment.
