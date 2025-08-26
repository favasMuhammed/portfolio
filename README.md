# Portfolio Website - React + Vite + Tailwind CSS

A modern, interactive portfolio website built with React, Vite, and Tailwind CSS. This project is a complete conversion of the original static HTML/CSS/JavaScript portfolio into a modern React application.

## 🚀 Features

- **Interactive Timeline**: Draggable timeline with year-based content navigation
- **Custom Cursor**: Personalized cursor with different states for various interactions
- **Smooth Animations**: Intersection Observer-based animations and smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities
- **Modern UI**: Glass-morphism effects, gradients, and smooth hover states
- **Performance Optimized**: Efficient React components with proper state management

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Departure Mono, Ppmori, JetBrains Mono)
- **Animations**: CSS Keyframes + Tailwind animations

## 📁 Project Structure

```
src/
├── components/
│   ├── CustomCursor.jsx      # Custom cursor functionality
│   ├── Navbar.jsx            # Navigation bar with smooth scrolling
│   ├── Hero.jsx              # Hero section with interactive timeline
│   ├── FloatingElements.jsx  # Animated floating code symbols
│   ├── InteractiveTimeline.jsx # Draggable timeline component
│   ├── RightColumn.jsx       # Right sidebar with info panels
│   ├── Philosophy.jsx        # Philosophy section with magic word
│   ├── Skills.jsx            # Skills section with animated bars
│   ├── Projects.jsx          # Projects showcase with hover effects
│   ├── Experience.jsx        # Work experience timeline
│   ├── Contact.jsx           # Contact form and information
│   └── Footer.jsx            # Footer with links and branding
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
└── index.css                 # Tailwind directives + custom styles
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #a7e22e (Lime Green)
- **Secondary**: #ff6b6b (Coral Red)
- **Accent**: #4ecdc4 (Turquoise)
- **Dark**: #0a0a0a (Near Black)
- **Text**: #ffffff (White)

### Typography
- **Main Font**: Inter (Clean, modern sans-serif)
- **Headings**: Departure Mono (Monospace for tech feel)
- **Special Text**: Ppmori (Unique font for "magic" word)
- **Code**: JetBrains Mono (Developer-friendly monospace)

### Animations
- Fade-in effects on scroll
- Floating elements with parallax
- Smooth hover transitions
- Shimmer effects on progress bars
- Wave animations on section icons

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd web-portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🔧 Customization

### Adding New Skills
Edit the `skillCategories` array in `Skills.jsx`:

```jsx
const skillCategories = [
  {
    title: "New Category",
    skills: [
      { name: "Skill Name", icon: "🎯", level: 85 }
    ]
  }
]
```

### Adding New Projects
Edit the `projects` array in `Projects.jsx`:

```jsx
const projects = [
  {
    id: 4,
    title: "New Project",
    description: "Project description...",
    category: "fullstack",
    technologies: ["React", "Node.js"],
    features: ["Feature 1", "Feature 2"],
    image: "🚀"
  }
]
```

### Modifying Colors
Update the color variables in `tailwind.config.js`:

```js
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  // ... other colors
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1200px
- **Desktop**: > 1200px

## 🎯 Key Components

### Interactive Timeline
- Draggable timeline scrubber
- Year-based content navigation
- Smooth transitions between years
- Click-to-jump functionality

### Custom Cursor
- Different states for various interactions
- Smooth following animation
- Mobile-friendly fallback

### Floating Elements
- Parallax scrolling effects
- Different animation speeds
- Interactive hover states

## 🚀 Performance Features

- **Intersection Observer**: Efficient scroll-based animations
- **React.memo**: Prevents unnecessary re-renders
- **useCallback**: Optimizes event handlers
- **Lazy Loading**: Components load as needed
- **CSS Transforms**: Hardware-accelerated animations

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: favastp2@gmail.com
- **LinkedIn**: [muhammed-favas-t-p](https://www.linkedin.com/in/muhammed-favas-t-p)
- **GitHub**: [favastp](https://github.com)

---

Built with ❤️ and lots of ☕ by Muhammed Favas T P
