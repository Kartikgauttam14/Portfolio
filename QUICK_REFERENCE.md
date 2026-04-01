# 🚀 Quick Reference Guide

## 🎯 Quick Start (30 seconds)

```bash
cd K:\New_Portfolio
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📁 File Quick Reference

| File | Purpose | Location |
|------|---------|----------|
| **layout.tsx** | Root layout & metadata | `src/app/layout.tsx` |
| **page.tsx** | Home page | `src/app/page.tsx` |
| **globals.css** | Global styles | `src/app/globals.css` |
| **Navbar.tsx** | Navigation bar | `src/components/Navbar.tsx` |
| **Hero.tsx** | Welcome section | `src/components/Hero.tsx` |
| **About.tsx** | Bio section | `src/components/About.tsx` |
| **Skills.tsx** | Skills showcase | `src/components/Skills.tsx` |
| **Projects.tsx** | Projects section | `src/components/Projects.tsx` |
| **Experience.tsx** | Work & education | `src/components/Experience.tsx` |
| **Contact.tsx** | Contact form | `src/components/Contact.tsx` |
| **Footer.tsx** | Footer | `src/components/Footer.tsx` |
| **ThemeProvider.tsx** | Dark mode | `src/components/ThemeProvider.tsx` |

---

## 🔧 Common Tasks

### Update Name
**File**: `src/components/Hero.tsx` (Line 26)
```typescript
Kartik Gauttam → Your Name
```

### Add Project
**File**: `src/components/Projects.tsx`
```typescript
{
  title: 'Project Name',
  description: 'Description here',
  technologies: ['Tech1', 'Tech2'],
  link: 'https://...',
  github: 'https://...',
  featured: true
}
```

### Add Skill
**File**: `src/components/Skills.tsx`
Add to skillCategories array

### Change Colors
**File**: `tailwind.config.ts`
```typescript
colors: {
  primary: '#3b82f6',
  secondary: '#1f2937',
  accent: '#f59e0b',
}
```

### Change Theme
Toggle in navbar or use keyboard shortcut

---

## 📦 NPM Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm:)
- **Tablet**: 640px - 1024px (md:)
- **Desktop**: > 1024px (lg:)

---

## 🎨 Color Palette

| Color | Usage |
|-------|-------|
| Blue (#3b82f6) | Primary, links, buttons |
| Purple (#9333ea) | Accents, tags |
| Gray (#6b7280) | Text, borders |
| Dark (#1f2937) | Dark mode background |
| Slate (#0f172a) | Very dark backgrounds |

---

## 🔑 Key Features

✅ Dark/Light mode
✅ Responsive design
✅ Smooth animations
✅ Contact form
✅ Project showcase
✅ Skill categories
✅ Experience timeline
✅ SEO optimized
✅ TypeScript
✅ Production ready

---

## 🌐 Deployment Links

- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **Docs**: https://nextjs.org/docs

---

## 📞 Contact Info

- Email: kartik.k5553@gmail.com
- GitHub: github.com/Kartikgauttam14
- LinkedIn: linkedin.com/in/kartikgauttam14
- Phone: +91 9518602040
- Location: Haryana & Delhi, India

---

## 🆘 Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Styles not showing?**
- Restart dev server
- Check tailwind.config.ts

---

## 📚 Documentation

- **README.md** - Full documentation
- **SETUP_GUIDE.md** - Setup instructions
- **PORTFOLIO_SUMMARY.md** - Project summary
- **IMPLEMENTATION_CHECKLIST.md** - What's included

---

## 🎯 Sections

1. **Hero** - Introduction with CTA
2. **About** - Bio and statistics
3. **Skills** - 20+ technologies
4. **Projects** - 5 featured projects
5. **Experience** - Work & education
6. **Contact** - Contact form

---

## ⚡ Performance Tips

- Images optimized automatically
- Code splitting by Next.js
- CSS minified by Tailwind
- Static optimization enabled
- Fast refresh for development

---

## 🔒 Security

- Environment variables in .env.local
- No sensitive data in code
- CORS ready for APIs
- Input validation on forms
- XSS protection built-in

---

## 📊 SEO

- Meta title & description
- Open Graph tags
- Mobile friendly
- Fast page load
- Proper heading hierarchy

---

## 💡 Tips

1. Use dark mode for better readability at night
2. Test on mobile before deploying
3. Update projects regularly
4. Keep skills current
5. Add blog posts for better SEO

---

## 🎉 You're All Set!

Your professional portfolio is ready to:
- ✨ Showcase your work
- 🚀 Impress potential employers
- 📱 Work on all devices
- 🌍 Go global with Vercel/Netlify

**Happy coding! 🚀**

---

**Portfolio for Kartik Gauttam | Built with Next.js**
