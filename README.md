# Ngoc Tran - Data Analytics Portfolio

A streamlined, modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a clean dark theme with glass effects and auto-carousel animations.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ngoc-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles & utility classes
├── components/
│   ├── AutoCarousel.tsx    # Auto-rotating carousel component
│   └── Sections.tsx        # Reusable section components
├── data/
│   ├── profile.ts          # Personal information (INFO)
│   ├── experience.ts       # Work experience data
│   ├── projects.ts         # Project portfolio
│   └── awards.ts           # Awards and honors
└── public/
    ├── Ngoc_Tran_Resume.pdf # Resume file
    ├── og.jpg              # Social media image
    └── favicon.ico         # Site icon
```

## ✏️ How to Edit Content

### 1. Personal Information (`data/profile.ts`)
```typescript
export const INFO = {
  name: "Your Name",
  tagline: "Your Tagline",
  currentRole: "Your Current Role",
  focus: "Your focus statement",
  email: "your.email@example.com",
  phone: "+1 (000) 000‑0000",
  location: "Your City, State",
  resumeUrl: "/Your_Resume.pdf",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "Tableau", href: "https://public.tableau.com/your-profile" },
  ],
};
```

### 2. Work Experience (`data/experience.ts`)
Add or modify experience entries:
```typescript
export const EXPERIENCE_SIMPLE = [
  {
    title: "Your Job Title",
    org: "Company Name",
    year: "2024",
    bullets: [
      "Achievement 1 with metrics",
      "Achievement 2 with impact",
    ],
    stack: ["Python", "SQL", "Tableau"],
  },
  // ... more entries
];

export const WORK_DETAILED = [
  { 
    org: "Company Name", 
    year: "2024", 
    summary: "Brief summary of key work.", 
    tech: ["Python","pandas","NumPy"] 
  },
  // ... more entries for carousel
];
```

### 3. Projects (`data/projects.ts`)
Add new projects:
```typescript
export const PROJECTS = [
  { 
    title: "Project Name", 
    tags: ["Python","React","Node.js"], 
    github: "https://github.com/your-repo", 
    demo: "https://your-demo.com", 
    blurb: "Brief project description with key features and impact." 
  },
  // ... more projects
];
```

### 4. Awards (`data/awards.ts`)
Add awards and honors:
```typescript
export const AWARDS = [
  { 
    year: "2024", 
    name: "Award Name", 
    note: "Brief description of the award and achievement." 
  },
  // ... more awards
];
```

## 🎨 Styling & Theme

### Dark Theme Colors
- **Background:** Dark gradient from `#090d1a` to `#0b1020`
- **Cards:** Glass effect with `bg-white/5` and backdrop blur
- **Borders:** Subtle white borders with opacity
- **Text:** White with various opacity levels

### Customization
- **Colors:** Edit CSS variables in `app/globals.css`
- **Fonts:** Inter font imported from Google Fonts
- **Animations:** Framer Motion for smooth transitions
- **Utility Classes:** Custom classes in `globals.css` for consistent styling

## 🚀 Deployment

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### Vercel (Alternative)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
vercel --prod
```

## 📱 Features Included

✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **Dark Theme** - Modern glass effect design  
✅ **Smooth Animations** - Framer Motion transitions  
✅ **Auto-carousel** - Experience section cycles automatically  
✅ **Contact Form** - Ready for backend integration  
✅ **SEO Optimized** - Meta tags, Open Graph, Twitter cards  
✅ **Accessibility** - Semantic HTML, focus states, alt text  
✅ **Smooth Scrolling** - Anchor links with smooth behavior  

## 🎯 Next Steps

1. **Replace placeholder content** with your real information
2. **Add project screenshots** to replace placeholder images
3. **Implement contact form backend** (email service)
4. **Add real project demo links**
5. **Customize colors** to match your brand
6. **Deploy to production**

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the comprehensive README.md
3. Ensure all dependencies are installed correctly
4. Verify Node.js version (18+ recommended)

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**