# 🎨 Portfolio Website - Complete Setup Guide

## 📋 Overview

This is a professional portfolio website for **Kartik Gauttam** built with modern web technologies. The portfolio showcases:

- **Full-stack development** expertise (React, Next.js, Node.js, Python)
- **AI/ML projects** and applications
- **Professional experience** and education
- **Open-source contributions**
- **Contact information** and social profiles

## 🎯 Key Features Implemented

### ✨ Design Features
1. **Light/Dark Mode** - Toggle between themes with system preference detection
2. **Responsive Design** - Mobile, tablet, and desktop optimized
3. **Smooth Animations** - Fade-in, slide-up animations for visual appeal
4. **Modern UI** - Clean, professional design with proper spacing and typography
5. **Navigation Bar** - Fixed header with smooth scrolling links
6. **Hero Section** - Eye-catching introduction with CTA buttons
7. **Glass Morphism** - Modern glass effect for cards and components

### 📝 Content Best Practices
1. **Personal Information** - Complete profile with contact details
2. **GitHub Integration** - Direct links to repositories
3. **Project Showcase** - 5+ projects with descriptions and tech stacks
4. **Skills Section** - 6 categorized skill groups with 20+ technologies
5. **Experience Timeline** - Work history with achievements
6. **Education** - Formal education and online certifications
7. **Contact Form** - Functional form for inquiries
8. **Social Media Links** - GitHub, LinkedIn, Email integration
9. **About Section** - Professional bio and career summary
10. **Blog Ready** - Structure prepared for technical articles

## 📁 File Structure

```
K:\New_Portfolio\
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (metadata, theme provider)
│   │   ├── page.tsx             # Home page (imports all components)
│   │   └── globals.css          # Global styles (animations, utilities)
│   └── components/
│       ├── Navbar.tsx           # Navigation with theme toggle
│       ├── Hero.tsx             # Welcome section with CTA
│       ├── About.tsx            # Bio and quick stats
│       ├── Skills.tsx           # Technical skills showcase
│       ├── Projects.tsx         # Project portfolio
│       ├── Experience.tsx       # Work experience & education
│       ├── Contact.tsx          # Contact form and info
│       ├── Footer.tsx           # Footer with links
│       └── ThemeProvider.tsx    # Theme management
├── public/
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS customization
├── postcss.config.js           # PostCSS configuration
├── next.config.ts              # Next.js configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd K:\New_Portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

## 🎨 Customization Guide

### Update Personal Information
**File**: `src/components/Hero.tsx`
```typescript
// Change name and introduction
<span className="bg-gradient">Kartik Gauttam</span>

// Update bio and description
```

### Add/Modify Projects
**File**: `src/components/Projects.tsx`
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    link: 'https://project-url.com',
    github: 'https://github.com/...',
  }
]
```

### Update Skills
**File**: `src/components/Skills.tsx`
```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS']
  }
]
```

### Change Colors
**File**: `tailwind.config.ts`
```typescript
colors: {
  primary: '#3b82f6',      // Primary blue
  secondary: '#1f2937',    // Dark gray
  accent: '#f59e0b',       // Accent color
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All sections adapt automatically using Tailwind's responsive prefixes (sm:, md:, lg:).

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Option 3: Traditional Hosting
```bash
npm run build
npm run start
```

Deploy the `.next` folder to your hosting provider.

## 🎯 Sections Breakdown

### 1. **Hero Section** (`Hero.tsx`)
- Introduction with name and title
- Professional summary
- CTA buttons (View Work, Get in Touch)
- Social media links
- Animated avatar card

### 2. **About Section** (`About.tsx`)
- Detailed bio
- Career journey
- Quick statistics (6+ Projects, 4+ Years, etc.)
- Visual stat cards

### 3. **Skills Section** (`Skills.tsx`)
- 6 skill categories:
  - Languages (JavaScript, TypeScript, Python)
  - Frontend (React, Next.js, Tailwind)
  - Backend (Node.js, Express, FastAPI)
  - AI/ML (PyTorch, BERT, etc.)
  - Databases (PostgreSQL, MongoDB)
  - DevOps (Docker, Git, etc.)

### 4. **Projects Section** (`Projects.tsx`)
- 3 featured projects (highlighted)
- 2 additional projects (compact view)
- Technology tags
- Live demo and GitHub links
- Hover effects and animations

### 5. **Experience Section** (`Experience.tsx`)
- Current role: Project Admin & Mentor at SSoC
- Previous role: Business Development at ServerStep
- Education timeline
- Skills tags per experience
- Responsibilities listed

### 6. **Contact Section** (`Contact.tsx`)
- Contact information cards
- Contact form
- Email, phone, location
- Form submission handling

### 7. **Navigation** (`Navbar.tsx`)
- Fixed header
- Responsive menu (mobile/desktop)
- Theme toggle (light/dark)
- Smooth scroll links

## 🔧 Advanced Customization

### Add Blog Section
Create `src/app/blog/page.tsx`:
```typescript
export default function Blog() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Blog content */}
    </section>
  )
}
```

### Custom Font
Edit `src/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
const font = YourFont({ subsets: ['latin'] })
```

### API Integration
Add contact form submission:
```typescript
// In Contact.tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

## 🎯 Kartik's Profile Information

- **Name**: Kartik Gauttam
- **Title**: Full Stack Developer & AI/ML Enthusiast
- **Location**: Haryana & Delhi, India
- **Email**: kartik.k5553@gmail.com
- **Phone**: +91 9518602040
- **GitHub**: github.com/Kartikgauttam14
- **LinkedIn**: linkedin.com/in/kartikgauttam14

**Education**: B.Tech CSE (AI & ML) - Kurukshetra University (2024-2027)

**Current Role**: Project Admin & Mentor at Social Summer of Code (SSoC)

**Tech Stack**: 
- Frontend: React, Next.js, Tailwind CSS
- Backend: Node.js, Express, FastAPI, Python
- Database: PostgreSQL, MongoDB
- AI/ML: PyTorch, BERT, RoBERTa, Google Gemini AI
- DevOps: Docker, Git, Socket.IO, Stripe

## 🚀 Deployment Checklist

- [ ] Update personal information
- [ ] Update all social media links
- [ ] Add all projects with correct links
- [ ] Verify contact form works
- [ ] Test light/dark mode
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Check SEO metadata
- [ ] Update favicon
- [ ] Deploy to Vercel or hosting

## 📊 Performance Optimization

The portfolio includes:
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS minification
- Automatic static optimization
- Fast refresh during development

## 🐛 Common Issues & Solutions

### Issue: Theme not persisting
**Solution**: Ensure `next-themes` is installed and ThemeProvider wraps the app

### Issue: Build fails
**Solution**: Clear cache and reinstall:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Styles not applying
**Solution**: Restart dev server after Tailwind changes

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Lucide React Icons](https://lucide.dev)

## 🎉 Ready to Deploy!

Your portfolio is ready to go live. Choose your deployment platform and start showcasing your work to the world! 🚀

---

**Created**: April 1, 2026
**Tech Stack**: Next.js 14+ | React 18+ | TypeScript | Tailwind CSS | Lucide Icons
