import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Menu, 
  X,
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,
  User,
  MessageSquare
} from 'lucide-react';
import { useForm } from '@formspree/react';

// --- Contact Form Component ---
const ContactForm = () => {
  // ---
  // --- 1. REMINDER: Replace "YOUR_ID_HERE" with your Formspree ID
  // ---
  const [state, handleSubmit] = useForm("manlwzjq");

  if (state.succeeded) {
    return (
      <div className="text-center p-4 bg-green-50 border border-green-300 rounded-md">
        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-600" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-700">Thanks for reaching out. I'll get back to you soon.</p>
      </div>
    );
  }

  if (state.errors) {
    return (
      <div className="text-center p-4 bg-red-50 border border-red-300 rounded-md">
        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-600" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Error!</h3>
        <p className="text-gray-700">Something went wrong. Please try again later.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg transition-all duration-300
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   disabled:bg-gray-400"
      >
        <Send className="w-5 h-5 mr-2" />
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};


// --- Navigation Component ---
const Navbar = ({ onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', title: 'About', icon: User },
    { id: 'projects', title: 'Projects', icon: Briefcase },
    { id: 'contact', title: 'Contact', icon: MessageSquare },
  ];

  const handleLinkClick = (id) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            className="text-2xl font-bold text-gray-900"
          >
            Sanjay
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 md:hidden">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                className="block text-lg text-gray-700 hover:text-blue-600"
              >
                <link.icon className="inline-block w-5 h-5 mr-3" />
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};


// --- Main App Component ---
const App = () => {
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
      description: "A web app that generates custom tattoo designs from user prompts using AI. Showcases seamless integration of AI APIs.",
      technologies: ["React", "Firebase", "Tailwind CSS","OpenRouter API"],
      github: "https://github.com/Sa5jay/codejavid-apps/tree/main/tatoogenerator",
      live: "https://codejavid-apps-448w.vercel.app"
    },
    {
      title: "Task Manager App",
      description: "A full-stack Task Manager web app that lets users register, log in, and manage tasks securely.",
      technologies: ["React","TypeScript", "Node js", "Express js","MongoDB","Tailwind CSS"],
      github: "https://github.com/Sa5jay/task-manager-app",
      live: "https://task-manager-app-zeta-nine.vercel.app/"
    },
    {
      title: "Editable Poster HTML",
      description: "A React-based visual editor that transforms static HTML files into interactive posters.",
      technologies: ["React","TypeScript","Tailwind CSS","Vite"],
      github: "https://github.com/Sa5jay/editable-poster-html",
      live: "https://editable-poster-html.vercel.app/"
    },
    {
      title: "Tic Tac Toe Game with AI",
      description: "A web-based Tic Tac Toe game featuring an AI opponent powered by the Minimax algorithm for optimal gameplay.",
      technologies: ["React","TypeScript","Tailwind CSS","Vite","OpenAI API"],
      github: "https://github.com/Sa5jay/30-apps/tree/main/Tic-Tac-Tai",
      live: "https://codejavid-apps.vercel.app/"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "REST APIs"] },
    { name: "Backend Development", icon: Database, items: ["Node.js", "Express.js", "MongoDB", "Firebase", "Java","MySql"] },
    { name: "Tools & Deployment", icon: Globe, items: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "VS Code"] },
    { name: "Languages", icon: Globe, items: ["Java", "MySql", "JavaScript"] }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar onScrollTo={scrollToSection} />

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Sanjay Neelakandan
              </h1>
              <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
                Frontend & MERN Stack Developer
              </p>
              <p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
                I build modern, responsive, and user-friendly web applications, 
                transforming ideas into high-quality code and delightful digital experiences.
              </p>
              <div className="flex justify-center md:justify-start items-center flex-wrap gap-4 mb-10">
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                  className="px-6 py-3 bg-blue-600 text-white rounded font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="/MyResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-100 text-gray-800 rounded font-semibold border border-gray-300 transition-all duration-300 hover:bg-gray-200"
                >
                  View Resume
                </a>
              </div>
              <div className="flex justify-center md:justify-start space-x-8 text-gray-500">
                <a href="https://github.com/Sa5jay" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-600 transition-colors">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/sanjay-neelakandan-4b8832320/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
            
            {/* Right: Profile Photo */}
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-white ring-offset-4 ring-offset-gray-50">
                <img src="/Profile.png" alt="Sanjay Neelakandan" className="w-full h-full  object-cover" />
              </div>
            </div>

          </div>
        </section>

        {/* --- About & Skills Section --- */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Hello! I'm Sanjay, a passionate full-stack developer with a strong focus on building 
                clean, efficient, and scalable web applications. I specialize in the MERN stack, 
                leveraging React and Node.js to create seamless user experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm driven by a desire to solve problems and learn new technologies. From 
                concept to deployment, I enjoy every part of the development process and 
                I'm always looking for opportunities to grow and create impactful products.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Skills</h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                      <skill.icon className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span key={item} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <article 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 flex flex-col h-full
                             transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  aria-labelledby={`proj-title-${index}`}
                >
                  <h3 id={`proj-title-${index}`} className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 text-center mb-10">
              I'm currently open to new opportunities. If you have a project in mind 
              or just want to connect, feel free to send me a message!
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sanjay Neelakandan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;