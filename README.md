# Professional Portfolio Website - Purushothaman V

A modern, responsive portfolio website built with React and Tailwind CSS, designed for B.Tech IT students and professionals.

## 🚀 Features

- **Professional Design**: Clean, modern interface with professional color scheme
- **Responsive**: Fully responsive design for all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **SEO Optimized**: Meta tags and structured content
- **Fast Performance**: Optimized with Vite build tool
- **Accessible**: WCAG compliant with proper ARIA labels

## 📋 Sections

- **Home**: Hero section with introduction and quick stats
- **About**: Personal journey, education, and interests
- **Skills**: Technical skills with progress bars
- **Projects**: Portfolio of projects with tech stacks
- **Certifications**: Professional certifications with Google Drive integration
- **Achievements**: Hackathons, competitions, and leadership roles
- **Contact**: Contact form and social links
- **Blog**: Technical articles and tutorials

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization Guide

### 1. Personal Information

Update your personal details in the following files:

**Home Page** (`src/pages/Home.jsx`):
```javascript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/YOUR_USERNAME', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_USERNAME', icon: Linkedin },
  { name: 'Email', url: 'mailto:YOUR_EMAIL@example.com', icon: Mail }
];
```

**About Page** (`src/pages/About.jsx`):
```javascript
const education = {
  degree: "B.Tech Information Technology",
  institution: "Your College Name",
  duration: "2021 - 2025",
  location: "Your City, State"
};
```

### 2. Skills

Update your skills in `src/pages/Skills.jsx`:
```javascript
const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "Your Skill", level: 85, color: "bg-blue-500" },
      // Add more skills...
    ]
  }
];
```

### 3. Projects

Add your projects in `src/pages/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description...",
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project.com",
    features: ["Feature 1", "Feature 2"],
    date: "Dec 2024"
  }
];
```

### 4. Certifications

Add your certificates in `src/pages/Certifications.jsx`:

**Google Drive Integration:**
1. Upload certificate to Google Drive
2. Right-click → "Get link"
3. Copy the file ID from URL
4. Replace `YOUR_GOOGLE_DRIVE_ID` in the code

```javascript
const certifications = [
  {
    title: "Your Certificate",
    provider: "Provider Name",
    date: "December 2024",
    description: "Certificate description...",
    image: "https://drive.google.com/uc?export=view&id=YOUR_GOOGLE_DRIVE_ID",
    downloadUrl: "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_ID/view",
    category: "Programming"
  }
];
```

### 5. Achievements

Update achievements in `src/pages/Achievements.jsx`:
```javascript
const achievements = [
  {
    title: "Your Achievement",
    organization: "Organization Name",
    date: "2024",
    description: "Achievement description...",
    category: "Leadership",
    icon: Trophy
  }
];
```

### 6. Contact Information

Update contact details in `src/pages/Contact.jsx`:
```javascript
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 YOUR_PHONE_NUMBER",
    link: "tel:+91YOURPHONENUMBER"
  }
];
```

### 7. Colors and Theme

Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... customize your color palette
  }
}
```

## 🚀 Deployment

### GitHub Pages

1. **Add GitHub Pages dependency**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to Netlify

3. **Or connect your GitHub repository** for automatic deployments

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 📁 File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   └── Blog.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `vite.config.js` - Vite build configuration
- `package.json` - Dependencies and scripts

## 📝 Adding Content

### Blog Posts

Add blog posts in `src/pages/Blog.jsx`:
```javascript
const blogPosts = [
  {
    title: "Your Blog Title",
    excerpt: "Blog excerpt...",
    content: `# Your Markdown Content`,
    date: "December 15, 2024",
    readTime: "8 min read",
    tags: ["React", "Web Development"],
    category: "Web Development"
  }
];
```

### Resume

1. Add your resume PDF to the `public` folder
2. Name it `resume.pdf`
3. The download links will automatically work

## 🎯 SEO Optimization

The website includes:
- Meta tags for social sharing
- Structured data
- Semantic HTML
- Fast loading times
- Mobile-friendly design

## 🔒 Security

- Form validation
- XSS protection
- Secure external links
- HTTPS enforcement

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you need help customizing or deploying your portfolio:

1. Check the customization guide above
2. Review the code comments
3. Open an issue on GitHub

## 🎉 Credits

- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Colors**: Custom palette with Tailwind CSS
- **Design**: Modern, professional portfolio design

---

**Made with ❤️ by Purushothaman V**

*B.Tech Information Technology Student | Web Developer | Cybersecurity Enthusiast*
