import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Phone, Palette, Database, Globe, Download } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects = [
    {
      title: "GameAtlas",
      description: "Front-end web application built with React featuring a gaming discovery platform using RAWG API.",
      technologies: ["React", "Typescript", "Tailwind CSS", "REST API"],
      github: "https://github.com/Sa5jay/Game",
      live: "https://game-ten-steel.vercel.app/"
    },
    {
      title: "AI Tattoo Generator Web App",
      description: "A web app that generates custom tattoo designs from user prompts using AI. Showcases seamless integration of AI APIs with modern frontend development.",
      technologies: ["React", "Firebase", "Tailwind CSS","OpenRouter API"],
      github: "https://github.com/Sa5jay/codejavid-apps/tree/main/tatoogenerator",
      live: "https://codejavid-apps-448w.vercel.app"
    },
    {
      title: "Task Manager App",
      description: "A full-stack Task Manager web app that lets users register, log in, and manage tasks securely.Built with React, Node.js, Express, and MongoDB for efficient CRUD operations.Implements JWT authentication and responsive UI for smooth user experience.",
      technologies: ["React","TypeScript", "Node js", "Express js","MongoDB","Tailwind CSS","JWT Authentication"],
      github: "https://github.com/Sa5jay/task-manager-app",
      live: "https://task-manager-app-zeta-nine.vercel.app/"
    },
    {
      title: "Editable Poster HTML",
      description: "A React-based visual editor that transforms static HTML files into interactive posters. Users can drag elements, edit text directly on the stage, and update images via a properties panel. The final, modified layout is then cleanly exported as a new .html file.",
      technologies: ["React","TypeScript","Tailwind CSS","Vite"],
      github: "https://github.com/Sa5jay/editable-poster-html",
      live: "https://editable-poster-html.vercel.app/"
    }

  ];

  const skills = [
    { name: "Frontend Development", icon: Code, items: ["React", "JavaScript", "TypeScript", "HTML/CSS","REST API","Bootstrap","Tailwind CSS"] },
    { name: "Backend Development", icon: Database, items: ["Node.js", "Java", "MongoDB"] },
    { name: "Tools & Deployment", icon: Globe, items: ["Git","Vercel","Figma","VS Code","Firebase","Netlify"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800" role="banner">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-white">Sanjay</div>
            </a>

            <nav className="hidden items-center md:flex space-x-6" aria-label="Primary">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                  aria-current={activeSection === section ? 'page' : undefined}
                  className={`capitalize transition-all duration-300 hover:text-white ${
                    activeSection === section ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {section}
                </a>
              ))}
              <div className="flex items-center space-x-2">
                <a
                  href="/My.Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-slate-950 rounded-l font-medium text-sm transition-all duration-200 hover:bg-slate-100 flex items-center"
                >
                  <span>View Resume</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="Sanjay_Neelakandan_Resume.pdf"
                  className="px-3 py-2 bg-white text-slate-950 rounded-r border-l border-slate-200 font-medium transition-all duration-200 hover:bg-slate-100 flex items-center"
                  title="Download Resume"
                >
                  <Download size={16} />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
          }}
        />
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-40 h-40 rounded-full border-2 border-slate-800 mx-auto mb-6 overflow-hidden">
              <img src="/Profile.png" alt="Sanjay Neelakandan" className="w-full h-full object-cover rounded-full" loading="lazy" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Sanjay Neelakandan
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Frontend & MERN Stack Developer
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Creating beautiful, functional, and user-centered digital experiences with modern web technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-white text-slate-950 rounded font-medium transition-all duration-300 hover:bg-slate-100"
              aria-label="View projects"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-slate-700 text-white rounded font-medium transition-all duration-300 hover:bg-slate-800"
              aria-label="Contact me"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer creating digital solutions that combine beautiful design with robust functionality. I specialize in React, Node.js, and modern web technologies.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="font-semibold mb-2 text-white">{skill.name}</h3>
                  <ul className="text-sm text-white/70 space-y-1">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article key={index} className="bg-slate-900 rounded-lg p-6 hover:bg-slate-800 transition-all duration-300" aria-labelledby={`proj-${index}`}>
                <h3 id={`proj-${index}`} className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-white hover:text-slate-300 transition-colors text-sm">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-white hover:text-slate-300 transition-colors text-sm">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a href="mailto:sanjayn05@gmail.com" className="flex flex-col items-center space-y-2 hover:text-slate-300" aria-label="Email Sanjay">
              <Mail className="w-8 h-8 text-white" />
              <span className="text-slate-300">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/sanjayneelakandan/" className="flex flex-col items-center space-y-2 hover:text-slate-300" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 text-white" />
              <span className="text-slate-300">LinkedIn</span>
              
            </a>
            <a href="https://github.com/Sa5jay" className="flex flex-col items-center space-y-2 hover:text-slate-300" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 text-white" />
              <span className="text-slate-300">GitHub</span>
              
            </a>
            <a href="https://wa.me/918248830924" className="flex flex-col items-center space-y-2 hover:text-slate-300" target="_blank" rel="noopener noreferrer">
              <Phone className="w-8 h-8 text-white" />
              <span className="text-slate-300">Contact</span>
              
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 bg-slate-950" role="contentinfo">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Sanjay Neelakandan.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;