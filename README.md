# 🚀 Developer Portfolio

A stunning, modern developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features a dark theme with beautiful animations and a clean, professional design.

## ✨ Features

- **🎨 Dark Theme**: Beautiful dark color scheme with gradient accents
- **⚡ Smooth Animations**: Powered by Framer Motion for engaging interactions
- **📱 Responsive Design**: Fully responsive across all devices
- **🎯 Modern UI**: Clean, professional interface with glass morphism effects
- **🔍 SEO Optimized**: Built with Next.js for optimal performance
- **⚙️ TypeScript**: Full TypeScript support for better development experience
- **🎭 Interactive Elements**: Hover effects, scroll animations, and micro-interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Inter, JetBrains Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  dark: {
    // Your dark theme colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Content
Update the content in each component file:
- **Hero.tsx**: Main headline, subtitle, and call-to-action
- **About.tsx**: Personal information and stats
- **Skills.tsx**: Skills, technologies, and experience levels
- **Projects.tsx**: Project showcase with filters
- **Contact.tsx**: Contact information and form

### Animations
Customize animations in `tailwind.config.js` and component files using Framer Motion.

## 📱 Sections

### 🏠 Hero Section
- Animated introduction with floating elements
- Call-to-action buttons
- Social media links
- Smooth scroll indicator

### 👤 About Section
- Personal story and background
- Statistics and achievements
- Skills overview
- Contact information

### 🛠️ Skills Section
- Categorized skills with progress bars
- Technology icons grid
- Additional skills badges
- Interactive hover effects

### 💼 Projects Section
- Filterable project showcase
- Project cards with descriptions
- Technology tags
- Live demo and code links

### 📞 Contact Section
- Interactive contact form
- Contact information cards
- Social media links
- Availability status

## 🎯 Performance Features

- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic code splitting
- **Lazy Loading**: Components load as needed
- **SEO**: Meta tags and structured data
- **Accessibility**: ARIA labels and keyboard navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please reach out:
- Email: hello@example.com
- GitHub: [Your GitHub Profile]

---

Made with ❤️ using Next.js and Tailwind CSS
