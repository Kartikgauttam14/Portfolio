# Vercel Deployment Guide

## Quick Start (3 Easy Steps)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy from Local Machine
```bash
cd K:\New_Portfolio
vercel
```

### Step 3: Follow Prompts
- Link to existing project or create new
- Confirm build settings (should auto-detect Next.js)
- Deploy!

---

## Option A: Deploy via CLI (Fastest)

### Prerequisites
- Vercel account (free at https://vercel.com)
- Node.js installed
- Git repository pushed to GitHub ✅ (Already done!)

### Steps

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   Opens browser to authenticate with your Vercel account

3. **Deploy Project**
   ```bash
   cd K:\New_Portfolio
   vercel
   ```

4. **Answer Prompts**
   ```
   ? Set up and deploy "K:\New_Portfolio"? (Y/n) → Y
   ? Which scope? → Select your account
   ? Link to existing project? (y/N) → N (for first deploy)
   ? What's your project's name? → portfolio (or your preference)
   ? In which directory is your code located? → ./ 
   ? Want to modify these settings? (y/N) → N
   ```

5. **Deployment Complete!**
   You'll get a URL: `https://portfolio-xxxxx.vercel.app`

---

## Option B: Deploy via GitHub (Recommended for Continuous Deployment)

### Automatic Deployment Every Time You Push to GitHub

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard

2. **Connect GitHub Repository**
   - Click "Add New..." → "Project"
   - Select "Import from Git"
   - Authorize Vercel to access GitHub
   - Select `Kartikgauttam14/Portfolio` repository

3. **Configure Project**
   - **Project Name**: `portfolio` (or choose your name)
   - **Framework Preset**: `Next.js` (auto-detected ✅)
   - **Root Directory**: `./` (auto-detected ✅)
   - **Build Command**: `npm run build` (auto-detected ✅)
   - **Output Directory**: `.next` (auto-detected ✅)

4. **Environment Variables** (if needed)
   - Add any from `.env.example`
   - Example: `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Get your live URL!

### Future Updates
Every time you push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
Vercel automatically rebuilds and deploys!

---

## Option C: Deploy via Vercel Dashboard UI

1. **Sign Up/Login** at https://vercel.com
2. **Click "Add New Project"**
3. **Import Repository**
   - Select "Import from Git"
   - Choose GitHub
   - Find `Portfolio` repository
4. **Settings Auto-Detect**
   - Framework: `Next.js` ✅
   - Build: `npm run build` ✅
   - Output: `.next` ✅
5. **Deploy** and wait for completion

---

## Environment Variables Setup

Create `.env.local` in your project (already provided as template):

```bash
# Copy from .env.example
cp .env.example .env.local
```

Edit `.env.local` with your values:
```bash
NEXT_PUBLIC_SITE_URL=https://your-portfolio-domain.com
NEXT_PUBLIC_GA_ID=your_analytics_id
```

Add same variables in Vercel Dashboard:
- Project Settings → Environment Variables
- Add each variable from `.env.local`

---

## Post-Deployment Configuration

### Custom Domain (Optional)
1. Go to Vercel Dashboard → Your Project → Settings
2. Domains → Add Custom Domain
3. Point your domain DNS to Vercel (instructions provided)

### SSL Certificate (Automatic)
- Vercel automatically provides free SSL certificate
- HTTPS enabled by default ✅

### Deployment URL Examples
- Default: `https://portfolio-xxxxx.vercel.app`
- Custom: `https://kartikgauttam.com` (if configured)

---

## Verify Deployment

After deployment completes:

1. **Open Your URL**
   - Click deployment link from terminal or dashboard
   - Website should load immediately

2. **Check Build Logs**
   - Vercel Dashboard → Deployments → Click latest
   - View build log to verify successful build
   - Check Runtime Logs for any errors

3. **Test Functionality**
   - Navigation links working
   - Dark/Light mode toggle working
   - Responsive on mobile/tablet/desktop
   - All components rendering correctly

---

## Rollback to Previous Deployment

If something goes wrong:

1. **Vercel Dashboard** → Your Project → **Deployments**
2. Find previous working deployment
3. Click **"Redeploy"**
4. Verify working version is live again

---

## Troubleshooting

### Build Failed
- Check build logs in dashboard
- Verify `npm run build` works locally:
  ```bash
  npm run build
  npm start
  ```
- Push fixes to GitHub, Vercel auto-redeploys

### Environment Variables Not Working
- Verify added in Vercel Dashboard
- Ensure variables start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables

### Site Loading Slowly
- Check Build Output size in dashboard
- Verify Image Optimization enabled
- Consider using static generation where possible

### 404 Errors on Routes
- Check `next.config.js` is properly configured ✅
- Verify all pages exist in `src/app/`
- Test locally before pushing

---

## Cost Breakdown

### Vercel Pricing (As of 2024)
- **Hobby Plan** (Free): ✅ Recommended for portfolio
  - Unlimited deployments
  - Automatic HTTPS
  - Global CDN
  - Analytics dashboard
  - Up to 100 GB bandwidth/month

- **Pro Plan** ($20/month): For advanced features
  - Advanced analytics
  - Priority support
  - Team collaboration

### Bandwidth Included
- Hobby: 100 GB/month (plenty for portfolio)
- Pro: Unlimited

Your portfolio will easily fit on the **Free Hobby plan**!

---

## Build Performance

Your Next.js portfolio will build in ~1-2 minutes:
- ✅ SWC minifier enabled (fast builds)
- ✅ Image optimization configured
- ✅ Bundle analysis available
- ✅ Automatic code splitting

---

## Monitoring & Analytics

### Enable Vercel Analytics
1. Dashboard → Project Settings → Analytics
2. Enable "Web Analytics" (free)
3. Get visitor insights, performance metrics

### Monitor Deployments
- Check deployment history
- View function invocations
- Track performance metrics
- Set up alerts for errors

---

## Next Steps

1. **Deploy Now!**
   ```bash
   vercel
   ```

2. **Get Your Live URL** from terminal output

3. **Update Resume/Portfolio Links**
   - Point to: `https://your-vercel-url.com`

4. **Share With Recruiters** 🎉

---

## Quick Reference

| Method | Speed | Automation | Recommendation |
|--------|-------|-----------|-----------------|
| CLI (`vercel`) | ⚡ Fastest | Manual | First time |
| GitHub Connection | 🔄 Auto | Automatic | Best for updates |
| Dashboard UI | 🐢 Slower | Manual | GUI preference |

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/learn/basics/deploying-nextjs-app
- **Troubleshooting**: https://vercel.com/help

**Your portfolio is production-ready and optimized for Vercel deployment!** 🚀
