import React from 'react';
import './App.css';

// Portfolio component - converted from TypeScript to JavaScript
function App() {
  // Basic Information
  const basicInfo = {
    name: "Oluwapelumi Adegboyega",
    title: "Frontend Developer & UI Component Architect",
    email: "oluwapelumi.adegboyega@example.com",
    phone: "+1 (204) XXX-XXXX",
    location: "Winnipeg, MB",
    bio: "Passionate frontend developer specializing in building reusable UI components and modern web applications. Currently developing a comprehensive TypeScript component library with focus on accessibility and design systems."
  };

  // Work Projects showcasing coursework
  const workProjects = [
    {
      title: "UI Component Garden",
      description: "A comprehensive TypeScript-based React component library featuring reusable UI components with Storybook documentation, automated testing, and modern build pipeline using Rollup.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      link: "https://github.com/oadegboyega-rrc/adegboyega_oluwapelumi_ui_garden",
      techList: ["TypeScript", "React", "Storybook", "Rollup", "Jest", "ESLint"]
    },
    {
      title: "Interactive Data Table Component",
      description: "Advanced table component with sorting, filtering, and pagination capabilities. Built with TypeScript for type safety and includes comprehensive test coverage.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      link: "https://github.com/oadegboyega-rrc/adegboyega_oluwapelumi_ui_garden/tree/main/src/components/Table",
      techList: ["TypeScript", "React", "CSS Modules", "Jest", "Testing Library"]
    },
    {
      title: "Accessible Dropdown System",
      description: "Fully accessible dropdown component following ARIA guidelines with keyboard navigation support and custom styling options.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop",
      link: "https://github.com/oadegboyega-rrc/adegboyega_oluwapelumi_ui_garden/tree/main/src/components/Dropdown",
      techList: ["TypeScript", "ARIA", "CSS", "Accessibility", "React Hooks"]
    },
    {
      title: "Responsive Card Components",
      description: "Flexible card component system with multiple variants, responsive design, and customizable styling for various use cases.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      link: "https://github.com/oadegboyega-rrc/adegboyega_oluwapelumi_ui_garden/tree/main/src/components/Card",
      techList: ["React", "CSS Grid", "Flexbox", "Responsive Design", "TypeScript"]
    }
  ];

  // Skills organized by category
  const skillCategories = [
    {
      title: "Languages & Core Technologies",
      items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Node.js"],
      icon: "💻"
    },
    {
      title: "Frontend Frameworks & Libraries",
      items: ["React", "React Hooks", "React DOM", "CSS Modules", "Responsive Design"],
      icon: "⚛️"
    },
    {
      title: "Development Tools & Pipeline",
      items: ["Rollup", "Storybook", "Jest", "ESLint", "Prettier", "npm", "Git"],
      icon: "🛠️"
    },
    {
      title: "Testing & Quality Assurance",
      items: ["Jest", "Testing Library", "Unit Testing", "Component Testing", "Accessibility Testing"],
      icon: "🧪"
    }
  ];

  // Helpful resources
  const resources = [
    {
      title: "React TypeScript Handbook",
      summary: "Comprehensive guide for using TypeScript with React, covering component patterns and best practices.",
      link: "https://react-typescript-cheatsheet.netlify.app/",
      icon: "📚"
    },
    {
      title: "Storybook Documentation",
      summary: "Official documentation for Storybook, the tool for building UI components and pages in isolation.",
      link: "https://storybook.js.org/docs/react/get-started/introduction",
      icon: "📖"
    },
    {
      title: "ARIA Authoring Practices Guide",
      summary: "W3C guide for implementing accessible rich internet applications with proper ARIA patterns.",
      link: "https://www.w3.org/WAI/ARIA/apg/",
      icon: "♿"
    },
    {
      title: "Jest Testing Framework",
      summary: "Delightful JavaScript testing framework with focus on simplicity, used for testing React components.",
      link: "https://jestjs.io/docs/getting-started",
      icon: "🃏"
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">{basicInfo.name}</h1>
        <h2 className="hero-subtitle">{basicInfo.title}</h2>
        <p className="hero-bio">{basicInfo.bio}</p>
        <div className="contact-info">
          <span>📧 {basicInfo.email}</span>
          <span>📱 {basicInfo.phone}</span>
          <span>📍 {basicInfo.location}</span>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section">
        <h2 className="section-title">My Work & Projects</h2>
        <div className="projects-grid">
          {workProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.techList.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-background">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="skills-description">
          Specialized in building scalable, accessible, and well-tested React components with modern development practices and comprehensive tooling.
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-items">
                {category.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Component Showcase Section */}
      <section className="section">
        <h2 className="section-title">Component Library Showcase</h2>
        <p className="showcase-description">
          Here are some of the reusable components I've built in my UI component garden:
        </p>
        
        <div className="showcase-demo">
          <div className="demo-card">
            <h3>Component Examples</h3>
            <div className="demo-buttons">
              <button className="demo-button primary">Primary Button</button>
              <button className="demo-button disabled" disabled>Disabled Button</button>
            </div>
            <div className="demo-inputs">
              <label className="demo-label">Sample Input:</label>
              <input type="radio" name="demo" value="option1" /> Option 1
              <input type="radio" name="demo" value="option2" /> Option 2
            </div>
            <p className="demo-note">
              These components are fully typed with TypeScript, tested with Jest, and documented in Storybook.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section resources-background">
        <h2 className="section-title">Helpful Resources</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-icon">{resource.icon}</div>
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-summary">{resource.summary}</p>
              <a 
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                Visit Resource →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3 className="footer-title">{basicInfo.name}</h3>
        <p className="footer-bio">Building accessible, reusable components for the modern web.</p>
        <div className="footer-contact">
          <span>📧 {basicInfo.email}</span>
          <span>📱 {basicInfo.phone}</span>
          <span>📍 {basicInfo.location}</span>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 {basicInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;