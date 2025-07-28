# Vibhanshu-Portfolio

A clean, responsive portfolio website for **Anurag Sharma** - DevOps & Cloud Engineer, built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional dark-mode interface
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in animations and smooth scrolling navigation
- **Complete Sections**:
  - Hero section with introduction
  - About section with experience highlights
  - Skills & Tools grid with icons
  - Featured DevOps projects with tech stack badges
  - Professional certifications showcase
  - Contact form with social links

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages / Vercel ready
- **Animations**: CSS transitions and keyframes

## 🏗️ Project Structure

```
├── src/
│   ├── App.tsx          # Main portfolio component (single file)
│   ├── main.tsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── public/
│   └── vite.svg         # Icon
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### GitHub Pages (Automatic)
The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment
For other platforms:
```bash
npm run build
# Deploy the ./dist folder to your hosting platform
```

### Vercel
Simply connect your GitHub repository to Vercel for automatic deployments.

## 🎨 Customization

All portfolio content is contained in `src/App.tsx`. To customize:

1. **Personal Information**: Update name, title, and bio
2. **Skills**: Modify the `skills` array with your technologies
3. **Projects**: Update the `projects` array with your work
4. **Certifications**: Customize the `certifications` array
5. **Contact Info**: Update email, LinkedIn, and GitHub links

## 📱 Mobile Responsive

The website is fully responsive with:
- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly interactive elements
- Optimized font sizes and spacing

## ⚡ Performance

- Built with Vite for fast development and optimized builds
- Minimal bundle size with tree-shaking
- Optimized images and assets
- Smooth CSS animations

## 📄 License

MIT License - feel free to use this template for your own portfolio!