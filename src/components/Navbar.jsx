import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Add shadow when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 pb-navbar${scrolled ? ' pb-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 text-slate-900 group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20 group-hover:bg-blue-700 transition">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              ProjectBridge
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="pb-nav-link text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="pb-nav-link text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              Services
            </button>
            <Link
              to="/project-ideas"
              className="pb-nav-link text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              Project Ideas
            </Link>
            <button 
              onClick={() => handleNavClick('how-it-works')} 
              className="pb-nav-link text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="pb-nav-link text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/request-project"
              className="pb-btn-arrow inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 active:scale-[0.98] transition shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="pb-arrow-icon w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick('hero')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition"
          >
            Services
          </button>
          <Link
            to="/project-ideas"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition"
          >
            Project Ideas
          </Link>
          <button
            onClick={() => handleNavClick('how-it-works')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition"
          >
            Contact
          </button>
          <div className="pt-2">
            <Link
              to="/request-project"
              onClick={() => setMobileMenuOpen(false)}
              className="pb-btn-arrow flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              <span>Start a Project</span>
              <ArrowRight className="pb-arrow-icon w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
