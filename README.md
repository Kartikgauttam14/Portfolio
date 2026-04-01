# Kartik Gauttam - Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** showcasing full-stack development expertise and AI/ML projects.

## 🚀 Features

### Design Features
- **Light/Dark Mode Toggle** - Seamless theme switching with system preference detection
- **Responsive Layout** - Mobile-first design that looks great on all devices (phones, tablets, desktops)
- **Smooth Animations** - Fade-in and slide-up animations for enhanced visual experience
- **Modern UI Components** - Clean, professional design with glass morphism effects
- **Fixed Navigation Bar** - Always accessible navigation with smooth scrolling

### Content Best Practices
- **Complete Profile Information** - Name, location, contact details, and professional links
- **GitHub Integration** - Links to repositories and GitHub profile
- **Project Showcase** - Featured projects with descriptions, technologies, and live demo/GitHub links
- **Skills Organization** - Categorized technical skills with visual representations
- **Professional Experience** - Detailed work history with responsibilities and achievements
- **Education & Certifications** - Academic background and online courses
- **Blog/Thoughts Section** - Ready for technical articles and posts
- **Contact Form** - Functional contact form for easy communication
- **Social Media Links** - Links to LinkedIn, GitHub, email, and other platforms
- **SEO Optimized** - Meta tags, structured data, and open graph information

## 📋 Project Structure

```
kartik-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── favicon.ico         # Site favicon
│   │   └── sitemap.xml         # SEO sitemap
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with theme toggle
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section with stats
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Projects.tsx        # Featured projects
│   │   ├── Experience.tsx      # Work experience & education
│   │   ├── Contact.tsx         # Contact form & info
│   │   ├── Footer.tsx          # Footer with links
│   │   └── ThemeProvider.tsx   # Dark mode provider
├── public/
│   └── favicon.ico
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3+
- **UI Components**: Lucide React Icons
- **Theme**: next-themes (Light/Dark mode)
- **Animations**: Tailwind CSS + Custom CSS animations
- **Font**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd kartik-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Variables** (if needed)
Create a `.env.local` file:
```env
# Add any API endpoints or configuration here
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🔨 Build & Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy on every push

### Deploy to Netlify
1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 🎨 Customization

### Update Profile Information
Edit `src/app/layout.tsx` for metadata and `src/components/Hero.tsx` for personal information.

### Modify Skills
Update the `skillCategories` array in `src/components/Skills.tsx`

### Add/Edit Projects
Modify the `projects` array in `src/components/Projects.tsx`

### Update Experience
Modify the `experiences` and `education` arrays in `src/components/Experience.tsx`

### Change Theme Colors
Edit Tailwind configuration in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#3b82f6',      // Blue
  secondary: '#1f2937',    // Dark gray
  accent: '#f59e0b',       // Amber
}
```

### Customize Fonts
Edit the font import in `src/app/layout.tsx`

## 📱 Responsive Design

- **Mobile (< 640px)**: Single column layout
- **Tablet (640px - 1024px)**: Two column layout for some sections
- **Desktop (> 1024px)**: Full multi-column layout

## 🌐 SEO Optimization

- Meta tags for title, description, and keywords
- Open Graph tags for social media sharing
- Mobile-friendly responsive design
- Fast page load with Next.js optimization
- Sitemap and robots.txt ready

## 🚀 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- CSS minification with Tailwind
- Automatic static optimization
- Built-in analytics ready

## 📝 Blog Setup

To add blog posts, create files in a `src/app/blog/[slug]` directory with MDX support. Example structure:
```
src/app/blog/
├── page.tsx                    # Blog listing page
└── [slug]
    ├── page.tsx               # Individual blog post
    └── route.ts               # API route for blog metadata
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Kartik Gauttam**
- Email: kartik.k5553@gmail.com
- GitHub: [github.com/Kartikgauttam14](https://github.com/Kartikgauttam14)
- LinkedIn: [linkedin.com/in/kartikgauttam14](https://linkedin.com/in/kartikgauttam14)
- Location: Haryana, Delhi, India
- Phone: +91 9518602040

## 🎯 Future Enhancements

- [ ] Blog functionality with MDX support
- [ ] Dark mode persistence
- [ ] Form submission to backend API
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] A/B testing support
- [ ] Newsletter subscription
- [ ] Project filtering by technology
- [ ] Timeline view for experience
- [ ] Testimonials section

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Theme not persisting
Check that `next-themes` is properly installed and `ThemeProvider` wraps your app in `layout.tsx`

## 📞 Support

For issues or questions, please open an issue in the repository or contact directly.

---

**Built with ❤️ using Next.js**
