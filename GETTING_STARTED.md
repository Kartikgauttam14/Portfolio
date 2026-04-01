# 🚀 Getting Started - Complete Guide

## 📥 Installation & Setup (5 minutes)

### Windows Users
```bash
cd K:\New_Portfolio
setup.bat
```

### Mac/Linux Users
```bash
cd K:\New_Portfolio
chmod +x setup.sh
./setup.sh
```

### Manual Installation
```bash
cd K:\New_Portfolio
npm install
```

---

## 🏃 Quick Start (30 seconds)

### Run Development Server
```bash
npm run dev
```

### Open in Browser
```
http://localhost:3000
```

**That's it! Your portfolio is now live locally! 🎉**

---

## 📝 First Things First

### 1. Verify Everything Works
- [ ] Development server running?
- [ ] Can you see the website?
- [ ] Light/dark mode toggle working?
- [ ] Navigation scrolling smoothly?

### 2. Check Your Profile
The portfolio automatically includes:
- ✅ Your name (Kartik Gauttam)
- ✅ Your projects (5 projects)
- ✅ Your skills (20+ technologies)
- ✅ Your experience (2 roles)
- ✅ Your education (3 entries)
- ✅ Your contact info

### 3. Customization (Optional)
Want to update anything?
- Name, bio, projects, skills, etc.
- See **CUSTOMIZATION GUIDE** below

---

## 🎨 Customization Guide

### Update Your Name
**File**: `src/components/Hero.tsx`
**Line**: 26
```typescript
// BEFORE:
Kartik Gauttam

// AFTER:
Your Name
```

### Add a New Project
**File**: `src/components/Projects.tsx`
**Add to projects array**:
```typescript
{
  title: 'Your Project Name',
  description: 'What this project does',
  technologies: ['React', 'Node.js', 'MongoDB'],
  link: 'https://project-demo.com',
  github: 'https://github.com/yourname/project',
  featured: true  // Set to true to feature it
}
```

### Update Skills
**File**: `src/components/Skills.tsx`
**Edit skillCategories array**:
```typescript
{
  category: 'Your Skill Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

### Change Brand Colors
**File**: `tailwind.config.ts`
**Edit colors section**:
```typescript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  accent: '#your-color',
}
```

### Update Contact Email
**File**: `src/components/Contact.tsx`
**Update email in contactInfo array**:
```typescript
{
  value: 'your.email@example.com',
  link: 'mailto:your.email@example.com',
}
```

---

## 🔧 Common Tasks

### Task: Add Blog Posts
1. Create `src/app/blog/page.tsx`
2. Create `src/app/blog/[slug]/page.tsx`
3. Add your blog posts with MDX (optional)

### Task: Change Font
1. Go to `src/app/layout.tsx`
2. Import different font from `next/font/google`
3. Update className

### Task: Add Analytics
1. Create `src/app/_document.tsx`
2. Add Google Analytics script
3. Update `.env.local` with tracking ID

### Task: Setup Contact Form Backend
1. Create API route: `src/app/api/contact/route.ts`
2. Handle form submission
3. Send email using service (SendGrid, etc.)

---

## 📦 Production Build

### Build for Production
```bash
npm run build
```

### Test Production Build Locally
```bash
npm run start
```

Then visit: `http://localhost:3000`

### What Gets Built?
- Optimized JavaScript
- Minified CSS
- Optimized images
- Static files
- Server-side code

---

## 🌐 Deployment (Choose One)

### Option 1: Vercel (Recommended) ⭐

**Easiest way to deploy!**

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live in seconds!

**Benefits:**
- Automatic deployments on git push
- Free hosting
- Fast CDN
- Analytics included
- Custom domain support

### Option 2: Netlify

1. Connect GitHub repository at netlify.com
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

**Benefits:**
- Free hosting
- GitHub integration
- Form handling
- Automatic HTTPS

### Option 3: Self-Hosted

1. Build: `npm run build`
2. Copy `.next` folder to your server
3. Install dependencies: `npm install`
4. Start: `npm run start`
5. Use PM2 or similar for process management

**Platforms:**
- DigitalOcean
- AWS
- Heroku
- Railway
- Any Node.js hosting

---

## 🔒 Environment Variables

### For Vercel/Netlify
1. Create `.env.local` in root
2. Add your variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-site.com
NEXT_PUBLIC_API_URL=https://api.your-site.com
```

### For Contact Form
```env
# If using email service
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key
```

---

## 🆘 Troubleshooting

### Issue: Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Issue: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Styles not showing
1. Restart dev server
2. Clear `.next` folder: `rm -rf .next`
3. Run: `npm run dev`

### Issue: Build fails
```bash
npm run build -- --verbose
```

Check error messages carefully. Usually missing dependencies.

### Issue: Dark mode not persisting
- Check that `next-themes` is installed
- Verify `ThemeProvider` wraps your app
- Clear browser cache

---

## ✅ Pre-Deployment Checklist

Before going live:

- [ ] All personal information updated
- [ ] All projects added with correct links
- [ ] All skills listed
- [ ] Contact form tested locally
- [ ] Mobile responsive verified
- [ ] Light/dark mode tested
- [ ] All links working
- [ ] No console errors
- [ ] Social media links correct
- [ ] SEO metadata reviewed
- [ ] Favicon updated (optional)
- [ ] favicon.ico added (optional)

---

## 📊 Performance Tips

### Optimize Images
- Next.js handles this automatically
- Use Image component instead of img tag
- Compress images before uploading

### Reduce Bundle Size
- Lazy load components with `dynamic()`
- Tree shake unused CSS
- Use production build for testing

### Cache Strategy
- Vercel handles this automatically
- Static pages cached forever
- Dynamic pages cached with ISR

---

## 📚 Learn More

### Documentation in Project
- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Setup instructions
- `QUICK_REFERENCE.md` - Quick lookup
- `IMPLEMENTATION_CHECKLIST.md` - Features list

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 🎯 Next Steps

### Immediate (Today)
1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ View at http://localhost:3000
4. ✅ Test all features

### Short Term (This Week)
1. ✅ Customize if needed
2. ✅ Test on mobile
3. ✅ Verify links work
4. ✅ Run production build

### Medium Term (This Month)
1. ✅ Deploy to Vercel/Netlify
2. ✅ Setup custom domain
3. ✅ Monitor analytics
4. ✅ Share with others

### Long Term (Ongoing)
1. ✅ Update projects
2. ✅ Add blog posts
3. ✅ Track visitors
4. ✅ Continuous improvements

---

## 💡 Pro Tips

### Tip 1: Use Git
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/your-username/portfolio
git push -u origin main
```

### Tip 2: Custom Domain
On Vercel or Netlify, add custom domain in settings.

### Tip 3: SEO
- Update meta tags in `layout.tsx`
- Add social sharing meta tags
- Create robots.txt

### Tip 4: Analytics
Add Google Analytics or similar to track visitors.

### Tip 5: Contact Form
Connect to email service (SendGrid, Mailgun) to receive inquiries.

---

## 🎉 You're Ready!

Your professional portfolio is now:
- ✨ **Developed** - All features complete
- 🎨 **Styled** - Professional design
- 📱 **Responsive** - Works on all devices
- 🌓 **Themeable** - Light and dark modes
- 🚀 **Deployable** - Ready for production
- 📖 **Documented** - Complete instructions
- 🔧 **Customizable** - Easy to update

### Start Here:
```bash
npm run dev
```

### Then Deploy:
```bash
vercel
# or
netlify deploy
```

---

## 📞 Support

Having issues?

1. Check **QUICK_REFERENCE.md** for common questions
2. Check component comments for implementation details
3. Review error messages carefully
4. Check Next.js documentation

---

## 🏆 Congratulations! 🎊

You now have a professional, production-ready portfolio website!

**Go showcase your amazing work to the world! 🌟**

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

**Created**: April 1, 2026  
**Status**: ✅ Complete  
**Ready to Deploy**: YES  

Let's get started! 🚀
