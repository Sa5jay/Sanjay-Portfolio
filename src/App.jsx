import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code,Phone, Palette, Database, Globe } from 'lucide-react';

const Portfolio = () => {
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
      technologies: ["React", "Node js", "Express js","MongoDB","JWT Authentication"],
      github: "https://github.com/Sa5jay/task-manager-app",
      live: "https://task-manager-app-zeta-nine.vercel.app/"
    }

  ];

  const skills = [
    { name: "Frontend Development", icon: Code, items: ["React", "JavaScript", "TypeScript", "HTML/CSS","REST API","Bootstrap","Tailwind CSS"] },
    { name: "Backend Development", icon: Database, items: ["Node.js", "Java", "MongoDB"] },
    { name: "Tools & Deployment", icon: Globe, items: ["Git","Vercel","Figma","VS Code","Firebase","Netlify"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section ? 'text-purple-400' : 'text-white/80'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

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
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
              <img src="/Profile.png" className='object-cover bg-cover rounded-full'/>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Sanjay Neelakandan
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed">
            Frontend & MERN Stack Developer
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            Creating beautiful, functional, and user-centered digital experiences with modern web technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold transition-all duration-300 hover:bg-purple-400 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                I'm a passionate full-stack developer creating digital solutions that combine beautiful design with robust functionality. I specialize in React, Node.js, and modern web technologies.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
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
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/30 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-sm">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors text-sm">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's create something amazing together!
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            <a href="mail.to.sanjayn05@gmail.com" className="flex flex-col items-center space-y-2 ">
              <Mail className="w-8 h-8 text-purple-400" />
              <span className="text-white/80">Email</span>
              
            </a>
            <a href="https://www.linkedin.com/in/sanjayneelakandan/" className="flex flex-col items-center space-y-2  ">
              <Linkedin className="w-8 h-8 text-purple-400" />
              <span className="text-white/80">LinkedIn</span>
              
            </a>
            <a href="https://github.com/Sa5jay" className="flex flex-col items-center space-y-2    ">
              <Github className="w-8 h-8 text-purple-400" />
              <span className="text-white/80">GitHub</span>
              
            </a>
            <a href="https://wa.me/918248830924" className="flex flex-col items-center space-y-2    ">
              <Phone className="w-8 h-8 text-purple-400" />
              <span className="text-white/80">Contact</span>
              
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/60">
          <p>&copy; 2025 Sanjay Neelakandan. </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;