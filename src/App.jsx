import { useState, useEffect } from 'react';
import acImage from './assets/ac.png';
import chandelierImage from './assets/chandlier.png';
import coolerImage from './assets/cooler.png';
import fanImage from './assets/fan.png';
import pendantImage from './assets/pendant.png';
import wallsetImage from './assets/wallset.png';
import sarahImage from './assets/sarah.png';
import michaelImage from './assets/michael.png';
import lauraImage from './assets/laura.png';
import headerVideo from './assets/header.gif';

function App() {
  // State management
  const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showModal && e.target.classList.contains('modal-overlay')) {
        setShowModal(false);
      }
    };
    
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showModal]);

  // Scroll to section handler with smooth transition
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
      console.log("Subscribed with email:", subscribeEmail);
      setIsSubscribed(true);
      setSubscribeEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  
  // Product data
  const products = [
    {
      id: 1,
      name: "Modern Pendant Light",
      category: "Lighting",
      description: "Elegant pendant lighting solution for any modern space",
      image: pendantImage,
      price: "$249.99",
      features: [
        "Dimmable LED lighting",
        "Adjustable hanging length",
        "Modern brushed nickel finish",
        "Energy efficient"
      ]
    },
    {
      id: 2,
      name: "Crystal Chandelier",
      category: "Chandelier",
      description: "Luxurious crystal chandelier for dining rooms and entryways",
      image: chandelierImage,
      price: "$1,299.99",
      features: [
        "Hand-cut crystal elements",
        "Polished brass frame",
        "Dimmable LED candles",
        "Custom sizing available"
      ]
    },
    {
      id: 3,
      name: "Smart Ceiling Fan",
      category: "Fan",
      description: "WiFi-enabled ceiling fan with voice control compatibility",
      image: fanImage,
      price: "$399.99",
      features: [
        "App and voice control",
        "Reversible motor for all seasons",
        "Ultra-quiet operation",
        "Energy Star certified"
      ]
    },
    {
      id: 4,
      name: "Energy-Efficient AC",
      category: "AC",
      description: "Silent, energy-saving air conditioner with smart features",
      image: acImage,
      price: "$799.99",
      features: [
        "Inverter technology",
        "WiFi connectivity",
        "Self-cleaning function",
        "24/7 scheduling"
      ]
    },
    {
      id: 5,
      name: "Designer Evaporative Cooler",
      category: "Cooler",
      description: "Stylish cooler that complements your interior design",
      image: coolerImage,
      price: "$349.99",
      features: [
        "3-speed settings",
        "7-liter water tank",
        "Portable with wheels",
        "Low energy consumption"
      ]
    },
    {
      id: 6,
      name: "Wall Sconce Set",
      category: "Lighting",
      description: "Set of two elegant wall sconces for ambient lighting",
      image: wallsetImage,
      price: "$189.99",
      features: [
        "Set of two matching sconces",
        "Frosted glass shades",
        "Plug-in or hardwire options",
        "Dimmable compatible"
      ]
    }
  ];

  const categories = ["All", "Lighting", "Fan", "AC", "Cooler", "Chandelier"];
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-600 rounded-full animate-bounce"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading LuminaDesign...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans transition-all duration-300">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg fixed w-full z-40 transition-all duration-300">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300"
              >
                LuminaDesign
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    if (item === 'Home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      scrollToSection(item.toLowerCase());
                    }
                  }}
                  className="text-gray-800 hover:text-blue-600 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md hover:shadow-lg"
                onClick={() => scrollToSection('contact')}
              >
                Book Consultation
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none transition-transform duration-300 hover:scale-110"
              >
                <svg className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'}`}
          >
            {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'Home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    scrollToSection(item.toLowerCase());
                  }
                  setIsMenuOpen(false);
                }}
                className="block py-3 px-4 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-300"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16 transition-all duration-500">
        <div className="absolute inset-0 overflow-hidden animate-fade-in">
          <img
            src={headerVideo}
            alt="Header background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        </div>

        <div className="relative container mx-auto px-6 text-white z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">Transform Your Space</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">Discover premium lighting and interior solutions that combine elegance, functionality, and sustainability.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-8 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg animate-fade-in-up animation-delay-400"
              >
                Our Collection
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 py-3 px-8 rounded-md font-medium text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 transition-all duration-500">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate          animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to LuminaDesign</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We craft exquisite lighting solutions and interior elements that bring your vision to life. With over 15 years of expertise, our designers blend aesthetics with functionality to transform ordinary spaces into extraordinary environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "✨",
                title: "Premium Quality",
                description: "Every product in our collection is crafted with precision using the finest materials to ensure longevity and performance."
              },
              {
                icon: "🎨",
                title: "Custom Designs",
                description: "Our team of designers can create bespoke lighting and cooling solutions tailored to your specific space and style preferences."
              },
              {
                icon: "🌱",
                title: "Eco-Friendly",
                description: "We prioritize sustainability with energy-efficient products that reduce your carbon footprint without compromising on performance."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className="mb-4 text-2xl text-blue-600">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white transition-all duration-500">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">Our Collection</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12 animate-fade-in">Discover our curated selection of lighting fixtures, fans, air conditioners, and more to enhance your living spaces.</p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category, index) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 transform ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{product.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    <button 
                      onClick={() => openProductDetails(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 transition-all duration-500">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                rating: "★★★★★",
                quote: "The chandelier we purchased transformed our dining room completely. The quality and craftsmanship are exceptional, and the customer service was outstanding.",
                image: sarahImage,
                name: "Sarah Johnson",
                role: "Residential Client"
              },
              {
                rating: "★★★★★",
                quote: "Working with LuminaDesign for our hotel lobby renovation was a fantastic experience. Their attention to detail and innovative lighting solutions exceeded our expectations.",
                image: michaelImage,
                name: "Michael Chen",
                role: "Commercial Client"
              },
              {
                rating: "★★★★★",
                quote: "The energy-efficient AC units we installed have not only reduced our energy bills but also blend perfectly with our interior design. Truly the best of both worlds!",
                image: lauraImage,
                name: "Laura Martinez",
                role: "Office Manager"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-yellow-400 flex mb-4">{testimonial.rating}</div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white transition-all duration-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">Have questions about our products or services? Contact us and our team will be happy to assist you.</p>
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    title: "Visit Our Showroom",
                    text: "123 Design Avenue, Creativity District, CA 90210"
                  },
                  {
                    icon: "📱",
                    title: "Call Us",
                    text: "(555) 123-4567"
                  },
                  {
                    icon: "✉️",
                    title: "Email Us",
                    text: "info@luminadesign.com"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-600 mr-4 text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-4">
                  <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    {['f', 'in', 'ig'].map((social, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <span className="text-lg">{social}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in-up">
              <form 
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
                onSubmit={handleFormSubmit}
              >
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-600 text-5xl mb-4 animate-bounce">✓</div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <>
                    {[
                      { id: 'name', label: 'Your Name', type: 'text' },
                      { id: 'email', label: 'Email Address', type: 'email' },
                      { id: 'subject', label: 'Subject', type: 'text' }
                    ].map((field, index) => (
                      <div key={field.id} className="mb-4" style={{ animationDelay: `${index * 50}ms` }}>
                        <label htmlFor={field.id} className="block text-gray-700 font-medium mb-2">{field.label}</label>
                        <input 
                          type={field.type} 
                          id={field.id} 
                          value={formData[field.id]}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-grayRaghu, [12/5/2024 2:26 PM]
-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                          required
                        />
                      </div>
                    ))}
                    <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 animate-fade-in-up"
                      style={{ animationDelay: '200ms' }}
                    >
                      Send Message
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 transition-all duration-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">LuminaDesign</h3>
              <p className="text-gray-400 mb-4">Transforming spaces with exceptional lighting and interior solutions since 2010.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      onClick={(e) => {
                        e.preventDefault();
                        if (item === 'Home') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                          scrollToSection(item.toLowerCase());
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                {categories.filter(cat => cat !== "All").map((category, index) => (
                  <li key={category}>
                    <button 
                      onClick={() => {
                        setActiveCategory(category);
                        scrollToSection('products');
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on new products and special offers.</p>
              <form onSubmit={handleSubscribe} className="flex">
                <input 
                  type="email" 
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
              {isSubscribed && (
                <p className="mt-2 text-green-400 animate-fade-in">Thank you for subscribing!</p>
              )}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 animate-fade-in">
            <p>© {new Date().getFullYear()} LuminaDesign. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay bg-black bg-opacity-70 animate-fade-in">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up">
            <div className="relative">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="grid coll-1 md:grid-cols-2 gap-8">
                <div className="h-full">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mr-3">
                      {selectedProduct.category}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">{selectedProduct.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Features</h3>
                    <ul className="space-y-2 text-gray-600">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => {
                      setShowModal(false);
                      scrollToSection('contact');
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Inquire About This Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;