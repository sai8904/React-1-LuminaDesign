import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, User, Code,ArrowUp, BookOpen, Film, Award, FileText, ChevronRight, ChevronDown, ExternalLink, X, ChevronUp, Pencil, Menu, Download, ArrowRight } from 'lucide-react';

function EnhancedHeroSection({ onScrollDown }) {
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const roles = [
    "Front-end Developer",
    "AI/ML Student", 
    "Web Designer",
    "UI Enthusiast"
  ];
  
  // Typing effect
  useEffect(() => {
    const currentPhrase = roles[typingIndex % roles.length];
    
    if (typedText.length < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setTypingIndex(typingIndex + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, typingIndex]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white pt-24 pb-20 overflow-hidden w-full h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left column - Profile image */}
          <div className="md:w-2/5 mb-10 md:mb-0 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500"></div>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">SK</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Text content */}
          <div className="md:w-3/5 md:pl-10">
            <div className="mb-4 inline-block">
              <span className="bg-blue-500 bg-opacity-20 text-white-300 px-4 py-1 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 text-transparent bg-clip-text">
              SAI KIRAN GOUD JAGIRI 
            </h1>
            
            <div className="flex items-baseline mb-6 h-8">
              <span className="text-xl sm:text-2xl text-gray-300 mr-3 font-light">I am a</span>
              <span className="text-xl sm:text-2xl font-semibold text-blue-300">
                {typedText}<span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </span>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-lg text-base sm:text-lg">
              A passionate developer focused on creating responsive and engaging web experiences. 
              Currently pursuing B.Tech in Artificial Intelligence and Machine Learning with a 
              <span className="text-blue-300 font-medium"> 9.5 CGPA</span>.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="flex items-center bg-transparent border border-blue-400 text-blue-300 hover:bg-blue-900 hover:bg-opacity-30 px-6 py-3 rounded-lg font-medium transition-all"
              >
                Download CV
                <Download size={18} className="ml-2" />
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-blue-900">
              <div className="flex items-center gap-6">
                <a 
                  href="https://github.com/sai8904" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/saikirangoudjagiri/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="mailto:jagirisaikiran2004@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
                <div className="ml-4 pl-4 border-l border-gray-700">
                  <span className="text-gray-400 text-sm">CGPA 9.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll down indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <button 
            onClick={onScrollDown}
            className="animate-bounce bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors focus:outline-none"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
          <span className="text-xs text-gray-400 mt-2">Scroll Down</span>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu on section click
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openProjectModal = (project) => {
    setModalProject(project);
  };

  const closeProjectModal = () => {
    setModalProject(null);
  };

  const handleScrollDown = () => {
    // Scroll to about section which is next
    scrollToSection('about');
  };

  // Scroll to top on page refresh
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Reset scroll positions for html and body
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // Scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Handle body overflow when modal is open
  useEffect(() => {
    if (modalProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalProject]);

  const skills = [
    { name: "PHP", icon: <FileText />, level: "Intermediate" },
    { name: "Tailwind CSS", icon: <Code />, level: "Intermediate" },
    { name: "HTML5", icon: <Code />, level: "Advanced" },
    { name: "Bootstrap", icon: <Code />, level: "Advanced" },
    { name: "C++", icon: <Code />, level: "Beginner" },
    { name: "Python3", icon: <Code />, level: "Intermediate" },
    { name: "React.js", icon: <Code />, level: "Beginner" },
    { name: "C", icon: <Code />, level: "Advanced" },
    { name: "Java", icon: <Code />, level: "Advanced" },
    { name: "R", icon: <Code />, level: "Intermediate" },
    { name: "DSA", icon: <Code />, level: "Intermediate" },
    { name: "CSS3", icon: <Code />, level: "Advanced" },
    { name: "JavaScript", icon: <Code />, level: "Beginner" },
    { name: "SQL", icon: <Code />, level: "Intermediate" }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "HotStar Clone",
      description: "A fully responsive clone of the HotStar streaming platform with similar UI/UX elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://saikiran-hotstar-clone.netlify.app/",
      github: "https://github.com/sai8904/Hotstar-Clone",
      detailedDescription: "This project is a pixel-perfect clone of Disney+ Hotstar's interface, featuring responsive design for all device sizes. I implemented a dynamic carousel for featured content, movie/show grid layouts, and hover effects for an engaging user experience. The navigation and footer components closely mimic the original platform, while custom CSS ensures visual fidelity across browsers.",
      unsplashImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 2,
      title: "Dog Buy And Sell Platform",
      description: "An e-commerce platform for dog breeders and buyers featuring listings and filtering options.",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://dogbuyandsell-saikiran.netlify.app",
      github: "https://github.com/sai8904/DogSellAndBuyPlatform",
      detailedDescription: "This specialized e-commerce platform connects dog breeders with potential buyers. The interface features advanced filtering options by breed, age, and price range. The product listings include detailed dog profiles with image galleries, health information, and breeder details. The responsive design ensures a seamless experience on both desktop and mobile devices, while Tailwind CSS provides a clean, modern aesthetic.",
      unsplashImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 3,
      title: "BookStore",
      description: "A dynamic bookstore application with user authentication and shopping cart functionality.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      liveUrl: "https://saikiran.lovestoblog.com/bookstore/home.html",
      github: "https://github.com/sai8904/SunShineColony-php",
      detailedDescription: "This full-stack bookstore application features a comprehensive book catalog with categories, author information, and user reviews. The backend is powered by PHP with MySQL database integration, handling user authentication, shopping cart management, and order processing. Key features include personalized recommendations, wishlist functionality, and a responsive checkout process with multiple payment options.",
      unsplashImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 4,
      title: "Colony Management Of Sunshine",
      description: "A comprehensive colony management system with resident directory and maintenance tracking.",
      technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
      liveUrl: "https://saikiran.lovestoblog.com/p-5/",
      github: "https://github.com/sai8904/SunShineColony-php",
      detailedDescription: "This colony management system serves as a complete solution for residential community administration. The platform features secure resident login, a comprehensive directory with contact information, and a maintenance request system that tracks issues from submission to resolution. The events calendar allows residents to view and register for community activities, while the announcement board keeps everyone informed about important updates.",
      unsplashImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      id: 5,
      title: "Responsive Google Clone",
      description: "A responsive replica of the Google search engine interface with working search functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://saikiran-googleclone-responsive.netlify.app/",
      github: "https://github.com/sai8904/GoogleResponsive",
      detailedDescription: "This project recreates Google's iconic search interface with pixel-perfect accuracy. The clone features a responsive design that adapts to various screen sizes while maintaining Google's minimalist aesthetic. The search functionality connects to a custom API that returns mock search results. Additional features include voice search capability, Google Apps dropdown menu, and theme toggle between light and dark modes.",
      unsplashImage: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 6,
      title: "Netflix Clone",
      description: "A responsive Netflix homepage clone with similar layout and visual elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://saikiran-net-clone.netlify.app/",
      github: "https://github.com/sai8904/Netflix-Clone",
      detailedDescription: "This Netflix homepage clone faithfully reproduces the streaming platform's distinctive UI with a fullscreen hero section, featured content rows, and hover animations for title cards. The interface includes a responsive navigation bar with search functionality and user profile dropdown. Bootstrap grid system ensures optimal layout across devices.",
      unsplashImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 7,
      title: "ShoeStore-1",
      description: "A responsive e-commerce shoe store with product listings and category filters.",
      technologies: ["HTML", "Bootstrap"],
      liveUrl: "https://saikiran-shoe-brand-store.netlify.app/",
      github: "https://github.com/sai8904/Shoe-Brand-Store",
      detailedDescription: "This e-commerce platform specializes in premium footwear with an elegant, minimalist design approach. The product catalog features dynamic filtering options by brand, style, price range, and size availability. Each product card displays high-quality imagery with hover zoom functionality, price information, and quick-add buttons.",
      unsplashImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 8,
      title: "ShoeStore-2",
      description: "An alternative shoe store design with focus on Nike products and modern UI elements.",
      technologies: ["HTML", "Bootstrap"],
      liveUrl: "https://saikiran-nike2.netlify.app/",
      github: "https://github.com/sai8904/BootStrappingEx-2-Nike-2",
      detailedDescription: "This Nike-focused storefront features a bold, brand-centric design with dynamic product showcases and immersive imagery. The interface includes animated product carousels that highlight new releases and bestsellers, with parallax scrolling effects creating depth throughout the browsing experience. Product pages include 360-degree product views and color variants.",
      unsplashImage: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 9,
      title: "Bootstrap Interior Project",
      description: "An interior design company website showcasing services and portfolio using Bootstrap.",
      technologies: ["HTML", "Bootstrap"],
      liveUrl: "https://saikiran-bootstrapex.netlify.app/",
      github: "https://github.com/sai8904/BootStrappingEx",
      detailedDescription: "This interior design studio website combines elegant aesthetics with functional presentation of services. The homepage features a fullscreen image slider showcasing signature projects with subtle text overlays. The services section uses Bootstrap cards with custom hover effects to detail different design packages offered.",
      unsplashImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 10,
      title: "MediaQueries Example",
      description: "A demonstration of responsive design using CSS media queries for different device sizes.",
      technologies: ["HTML", "CSS", "Media Queries"],
      liveUrl: "https://saikiran-media-queries.netlify.app/",
      github: "https://github.com/sai8904/Media-Queries",
      detailedDescription: "This educational project demonstrates the power of CSS media queries through a series of responsive layouts that transform based on viewport dimensions. The page elements reconfigure themselves at key breakpoints for optimal viewing on desktops, tablets, and mobile devices.",
      unsplashImage: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 11,
      title: "Amazon Clone",
      description: "A responsive replica of the Amazon e-commerce platform with similar UI components.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://saikiran-amazonclone.netlify.app/",
      github: "https://github.com/sai8904/Amazon_clone",
      detailedDescription: "This Amazon clone replicates the comprehensive e-commerce experience with attention to UI details and core functionality. The header includes the distinctive search bar with department dropdown, account navigation, and cart functionality. The homepage features a main carousel for promotions and product grids.",
      unsplashImage: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 12,
      title: "JavaScript Movie Genres",
      description: "A movie filtering application that allows users to browse films by genre.",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://saikiran-js-movie-genere.netlify.app/",
      github: "https://github.com/sai8904/JavaScript-Basics-MovieGeneres",
      detailedDescription: "This interactive movie browsing application organizes films by genre with dynamic filtering capabilities. The interface presents movie cards with poster images, ratings, release years, and brief synopses. Users can filter content by selecting multiple genres simultaneously, with smooth animations as results update.",
      unsplashImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 13,
      title: "Interior Design React",
      description: "A modern interior design store named Lumina built with React and responsive design principles.",
      technologies: ["React", "JavaScript", "CSS"],
      liveUrl: "https://saikiran-lumina-react1.netlify.app/",
      github: "https://github.com/sai8904/React-1-LuminaDesign",
      detailedDescription: "Lumina is a sophisticated interior design e-commerce platform built with React's component architecture. The application features a modular design system with reusable UI components for consistent brand presentation. Product browsing implements infinite scroll with lazy loading images for performance optimization.",
      unsplashImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 14,
      title: "Basic CRUD Operations in PHP",
      description: "A simple demonstration of Create, Read, Update, and Delete operations using PHP.",
      technologies: ["PHP", "MySQL", "HTML", "CSS"],
      liveUrl: "https://saikiran.lovestoblog.com/sample/index.php",
      github: "https://github.com/sai8904/CRUD-PHP",
      detailedDescription: "This educational project demonstrates fundamental database operations through a clean interface for managing records. The application features a responsive data table with sorting and searching capabilities. The code structure follows MVC patterns for separation of concerns, making it both a functional tool and a learning resource.",
      unsplashImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      id: 15,
      title: "ProjectNest",
      description: "A project management application with full backend functionality for storing and managing projects.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://saikiran.lovestoblog.com/proj/",
      github: "https://github.com/sai8904/ProjectNest",
      detailedDescription: "ProjectNest is a comprehensive project management solution designed for small to medium teams. The platform features role-based access control with custom permissions. Projects can be organized with milestones, task dependencies, and resource allocation tools. The dashboard provides visual progress tracking with charts and metrics.",
      unsplashImage: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    }
  ];

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            scroll-behavior: auto;
          }
          body.modal-open {
            overflow: hidden;
          }
        `}
      </style>
      <div className="min-h-screen bg-gray-100 font-sans overflow-x-hidden w-full box-border">
        {/* Navigation */}
        <nav className="bg-blue-900 text-white fixed top-0 left-0 right-0 z-100 shadow-lg w-full">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">Sai Kiran Goud Jagiri</h1>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`hover:text-blue-400 transition-colors ${activeSection === 'home' ? 'text-blue-400' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`hover:text-blue-400 transition-colors ${activeSection === 'about' ? 'text-blue-400' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`hover:text-blue-400 transition-colors ${activeSection === 'skills' ? 'text-blue-400' : ''}`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`hover:text-blue-400 transition-colors ${activeSection === 'projects' ? 'text-blue-400' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className={`hover:text-blue-400 transition-colors ${activeSection === 'education' ? 'text-blue-400' : ''}`}
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('interests')}
                className={`hover:text-blue-400 transition-colors ${activeSection === 'interests' ? 'text-blue-400' : ''}`}
              >
                Interests
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`hover:text-blue-400 transition-colors ${activeSection === 'contact' ? 'text-blue-400' : ''}`}
              >
                Contact
              </button>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-900 text-white px-4 py-2">
              <button 
                onClick={() => scrollToSection('home')}
                className={`block w-full text-left py-2 hover:text-blue-400 transition-colors ${activeSection === 'home' ? 'text-blue-400' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left py-2 hover:text-blue-400 transition-colors ${activeSection === 'about' ? 'text-blue-400' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`block w-full text-left py-2 hover:text-blue-400 transition-colors ${activeSection === 'skills' ? 'text-blue-400' : ''}`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`block w-full text-left py-2 hover:text-blue-400 transition-colors ${activeSection === 'projects' ? 'text-blue-400' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className={`block w-full text-left py-2 hover:text-blue-400 transition-colors ${activeSection === 'education' ? 'text-blue-400' : ''}`}
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('interests')}
                className={`block w-full text-left py-2 hover:text-blue-400 transition-colors ${activeSection === 'interests' ? 'text-blue-400' : ''}`}
              >
                Interests
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left py-2 hover:text-blue-400 transition-colors ${activeSection === 'contact' ? 'text-blue-400' : ''}`}
              >
                Contact
              </button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <EnhancedHeroSection onScrollDown={handleScrollDown} />

        {/* About Section */}
        <section id="about" className="min-h-screen bg-white w-full flex items-center">
          <div className="container mx-auto px-4 max-w-4xl py-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hello! I'm <span className="font-semibold text-blue-600">Sai Kiran</span>, a third-year undergraduate at Sreenidhi Institute of Science and Technology, specializing in Artificial Intelligence and Machine Learning with a current CGPA of 9.5.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm passionate about <span className="font-medium text-blue-600">front-end development</span>, creating responsive web interfaces using React.js, Tailwind CSS, and JavaScript. I'm currently expanding my skills in the MERN stack to become a full-stack developer.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Beyond coding, I'm strengthening my skills in Data Structures, Java, and Python. I also actively participate in community service through the National Service Scheme (NSS).
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900 text-white w-full">
          <div className="container mx-auto px-4 w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              A collection of programming languages, frameworks, and technologies I've worked with, categorized by proficiency level.
            </p>
            
            <div className="max-w-5xl mx-auto">
              {/* Categories */}
              <div className="mb-12 flex justify-center space-x-4">
                <div className="px-4 py-2 bg-gray-800 rounded-full flex items-center">
                  <span className="text-sm">Beginner</span>
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-full flex items-center">
                  <span className="text-sm">Intermediate</span>
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-full flex items-center">
                  <span className="text-sm">Advanced</span>
                </div>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 rounded-lg overflow-hidden shadow transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-700 group"
                  >
                    <div className="p-3">
                      <div className="flex items-center mb-2">
                        <div className="p-2 rounded-lg mr-2 bg-gray-700 group-hover:bg-blue-600 transition-colors">
                          {React.cloneElement(skill.icon, { size: 18 })}
                        </div>
                        <h3 className="text-sm font-semibold truncate">{skill.name}</h3>
                      </div>
                      <div className="relative w-full bg-gray-700 rounded-full h-1.5 overflow-hidden mt-1">
                        <div 
                          className="h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors"
                          style={{ 
                            width: skill.level === "Beginner" ? "25%" : 
                                   skill.level === "Intermediate" ? "50%" : "75%" 
                          }}
                        ></div>
                      </div>
                      <div className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                        {skill.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white w-full">
          <div className="container mx-auto px-4 w-full">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Projects</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              A showcase of my web development projects demonstrating skills in frontend, backend, and responsive design.
            </p>

            {/* Featured Projects */}
            {!showAllProjects && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => openProjectModal(project)}
                          className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                        >
                          View Details
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                        <div className="flex space-x-3">
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            title="GitHub Repository"
                          >
                            <Github size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* All Projects */}
            {showAllProjects && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {allProjects.map((project) => (
                  <div 
                    key={project.id} 
                    className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => openProjectModal(project)}
                          className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center"
                        >
                          Details
                          <ChevronRight size={14} className="ml-1" />
                        </button>
                        <div className="flex space-x-3">
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                            title="GitHub Repository"
                          >
                            <Github size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View All Projects / Show Less Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors flex items-center"
              >
                {showAllProjects ? (
                  <>
                    Show Featured Projects
                    <ChevronUp size={18} className="ml-2" />
                  </>
                ) : (
                  <>
                    View All Projects
                    <ChevronDown size={18} className="ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {modalProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-x-hidden w-full">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-screen overflow-y-auto box-border">
              <div className="relative">
                <img 
                  src={modalProject.unsplashImage} 
                  alt={modalProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{modalProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {modalProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 whitespace-pre-line">{modalProject.detailedDescription}</p>
                <div className="flex space-x-4">
                  <a 
                    href={modalProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md flex items-center transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    View Live Demo
                  </a>
                  <a 
                    href={modalProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-md flex items-center transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Section */}
        <section id="education" className="min-h-screen py-16 bg-gray-900 text-white w-full flex items-center">
          <div className="container mx-auto px-4 w-full">
            <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="border-l-4 border-blue-500 pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold">Sreenidhi Institute of Science and Technology</h3>
                  <span className="text-blue-400 font-medium">2022 - Present</span>
                </div>
                <p className="text-gray-300 mb-2">Bachelor of Technology | Artificial Intelligence And Machine Learning</p>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Cumulative GPA: 9.52</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold">Aavishkar Junior College</h3>
                  <span className="text-blue-400 font-medium">2020 - 2022</span>
                </div>
                <p className="text-gray-300 mb-2">Hyderabad, Telangana</p>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Overall Percentage: 97.8</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold">Vishwashanthi High School</h3>
                  <span className="text-blue-400 font-medium">2019 - 2020</span>
                </div>
                <p className="text-gray-300 mb-2">Schooling | Karimnagar, Telangana</p>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Overall CGPA: 10</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="min-h-screen py-16 bg-white w-full flex items-center">
          <div className="container mx-auto px-4 w-full">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Mathematics</h3>
                <p className="text-gray-700">Solving mathematical problems, Statistics, and Calculus.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <BookOpen className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Reading</h3>
                <p className="text-gray-700">Reading books such as Harry Potter and Wings of Fire.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Film className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Movies</h3>
                <p className="text-gray-700">Watching movies like Train to Busan and Chhichhore.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Pencil className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Drawing</h3>
                <p className="text-gray-700">Creating sketches and illustrations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16 bg-gradient-to-b from-gray-900 to-blue-900 text-white w-full flex items-center">
          <div className="container mx-auto px-4 w-full">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
              {/* Contact Info */}
              <div className="md:w-1/2">
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-6 border-b border-blue-500 pb-2">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="bg-blue-900 p-3 rounded-full mr-4">
                          <Mail className="text-blue-400" size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400">Email</h4>
                          <a href="mailto:jagirisaikiran2004@gmail.com" className="text-blue-400 hover:underline">jagirisaikiran2004@gmail.com</a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-900 p-3 rounded-full mr-4">
                          <Phone className="text-blue-400" size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400">Phone</h4>
                          <a href="tel:6304769500" className="text-blue-400 hover:underline">6304769500</a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-900 p-3 rounded-full mr-4">
                          <Github className="text-blue-400" size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400">Github</h4>
                          <a href="https://Github.com/sai8904" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Github.com/sai8904</a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-900 p-3 rounded-full mr-4">
                          <Linkedin className="text-blue-400" size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm text-gray-400">LinkedIn</h4>
                          <a href="https://www.linkedin.com/in/saikirangoudjagiri/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/saikirangoudjagiri</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-6 text-sm text-gray-400">I'm always open to discussing new projects, opportunities or partnerships.</p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="md:w-1/2">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const subject = formData.get('subject');
                    const message = formData.get('message');
                    
                    const mailtoLink = `mailto:jagirisaikiran2004@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                    
                    window.location.href = mailtoLink;
                    e.target.reset();
                    alert('Message sent! Thank you for contacting me.');
                  }}
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg h-full"
                >
                  <h3 className="text-xl font-bold mb-6 border-b border-blue-500 pb-2">Send a Message</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-300">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required 
                          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white" 
                        />
                      </div>
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required 
                          className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-300">Subject</label>
                      <input 
                        type="text" 
                        name="subject"
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white" 
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-300">Message</label>
                      <textarea 
                        rows="4" 
                        name="message"
                        required 
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-2 px-6 rounded transition-colors w-full flex items-center justify-center"
                    >
                      <Mail size={16} className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-12 w-full">
          <div className="container mx-auto px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* About */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-blue-400">Sai Kiran Goud Jagiri</h3>
                <p className="text-gray-300 mb-4">
                  Crafting engaging web experiences with passion for AI and front-end development.
                </p>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Download CV
                  <Download size={16} className="ml-2" />
                </a>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-blue-400">Quick Links</h3>
                <ul className="space-y-2">
                  {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                    <li key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className="text-gray-300 hover:text-blue-400 transition-colors capitalize"
                      >
                        {section}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connect */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-blue-400">Connect</h3>
                <div className="flex space-x-4 mb-4">
                  <a 
                    href="https://github.com/sai8904" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/saikirangoudjagiri/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="mailto:jagirisaikiran2004@gmail.com" 
                    className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
                <p className="text-gray-300">
                  Email: <a href="mailto:jagirisaikiran2004@gmail.com" className="text-blue-400 hover:underline">jagirisaikiran2004@gmail.com</a>
                </p>
                <p className="text-gray-300">
                  Phone: <a href="tel:6304769500" className="text-blue-400 hover:underline">6304769500</a>
                </p>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Sai Kiran Goud Jagiri. All rights reserved.
              </p>
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors"
                aria-label="Scroll to top"
              >
                Back to Top
                <ArrowUp size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}