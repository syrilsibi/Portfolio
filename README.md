# Portfolio - Syril Sibi

A modern, ambient-dark developer portfolio showcasing work as a Machine Learning Engineer Intern. Built with React, Vite, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── TimelineItem.jsx
│   │   ├── Navbar.jsx
│   │   └── MobileMenu.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── data/            # Data files
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experience.js
│   ├── hooks/           # Custom React hooks
│   │   ├── useScrollAnimation.js
│   │   └── useMobileMenu.js
│   ├── styles/          # Global styles
│   │   └── globals.css
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Design Features

- **Ambient Dark Theme** - Calm, premium dark background (#0b0f14)
- **Smooth Animations** - Framer Motion with easeOut transitions
- **Gradient Accents** - Cyan, teal, and purple gradients
- **Mobile-First** - Fully responsive design
- **Smooth Scrolling** - Lenis integration for buttery smooth scroll
- **Glassmorphism** - Modern glass effects on cards and navbar

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktop (> 1024px)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Vite and configure the build
4. Deploy!

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🎯 Features

- ✅ Smooth scroll navigation
- ✅ Mobile hamburger menu
- ✅ Scroll-based animations
- ✅ Hover effects with glow
- ✅ Active section highlighting
- ✅ Responsive grid layouts
- ✅ Accessibility considerations (prefers-reduced-motion)
- ✅ Clean, production-ready code

## 📝 Customization

To customize the portfolio:

1. **Personal Information**: Update `src/data/` files with your information
2. **Colors**: Modify `tailwind.config.js` for color scheme
3. **Content**: Edit section components in `src/sections/`
4. **Styling**: Adjust Tailwind classes or add custom styles in `src/styles/globals.css`

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using React and Vite

