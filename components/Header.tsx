import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Button from './Button';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.projects, path: '/portfolio' },
    { name: t.nav.contact, path: '/contact' },
  ];

  // Dynamic header classes based on scroll state
  const headerClass = `fixed w-full z-50 transition-all duration-500 border-b ${
    isScrolled 
      ? 'bg-brand-navy py-3 border-white/10 shadow-lg top-0' 
      : 'bg-brand-navy/90 backdrop-blur-md md:bg-transparent py-4 border-transparent md:top-0'
  }`;

  return (
    <>
      {/* --- Desktop Top Bar (Hidden on Mobile) --- */}
      <div 
        className={`hidden md:block bg-brand-navy text-white text-xs py-2 border-b border-white/5 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6 items-center">
             <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="flex items-center gap-2 hover:text-brand-gold transition-colors" dir="ltr">
               <Phone size={14} className="text-brand-gold" />
               <span>{COMPANY_INFO.phonePrimary}</span>
             </a>
             <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
               <Mail size={14} className="text-brand-gold" />
               <span>{COMPANY_INFO.email}</span>
             </a>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-white/60">{t.home.ratingLabel} 4.6 ⭐</span>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex gap-2 font-medium">
               <button 
                 type="button"
                 onClick={() => setLanguage('EN')} 
                 className={`transition-colors cursor-pointer ${language === 'EN' ? 'text-brand-gold font-bold' : 'text-white/70 hover:text-white'}`}
               >EN</button>
               <span className="text-white/20">/</span>
               <button 
                 type="button"
                 onClick={() => setLanguage('AR')} 
                 className={`transition-colors cursor-pointer ${language === 'AR' ? 'text-brand-gold font-bold' : 'text-white/70 hover:text-white'}`}
               >AR</button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Header --- */}
      <header className={headerClass}>
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          
          {/* Logo */}
          <Link to="/" className="relative z-50 flex flex-col group" onClick={() => setMobileMenuOpen(false)}>
             <h1 className="font-serif text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-brand-gold transition-colors duration-300">
               AL FURSAN
             </h1>
             <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold group-hover:text-white transition-colors duration-300">
               Contracting
             </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                   location.pathname === link.path ? 'text-brand-gold' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            
            <div className="w-px h-8 bg-white/10 mx-2"></div>

            {/* Logical margin-start (ms-0) used because flex gap handles spacing, Button handles padding */}
            <Button variant="primary" to="/contact" className="!py-2 !px-6 !text-sm whitespace-nowrap">
              {t.nav.getQuote}
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="md:hidden relative z-50 p-2 text-white hover:text-brand-gold transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <div 
        className={`fixed inset-0 bg-brand-navy z-40 md:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ height: '100dvh' }} // Use dynamic viewport height to prevent cutoff
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Spacer for fixed header bar */}
          <div className="min-h-[100px] shrink-0"></div>

          <div className="flex-1 flex flex-col items-center justify-start px-6 pb-12 gap-6">
            {/* Nav Links */}
            <nav className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-3xl font-serif text-white hover:text-brand-gold transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="w-24 h-px bg-white/10 my-4 shrink-0"></div>

            {/* Language Switcher Mobile */}
            <div className="flex items-center gap-6 bg-white/5 px-6 py-3 rounded-full shrink-0">
               <button 
                 type="button"
                 onClick={() => setLanguage('EN')} 
                 className={`text-lg font-medium transition-colors cursor-pointer ${language === 'EN' ? 'text-brand-gold' : 'text-white/60'}`}
               >English</button>
               <div className="w-px h-4 bg-white/20"></div>
               <button 
                 type="button"
                 onClick={() => setLanguage('AR')} 
                 className={`text-lg font-medium transition-colors cursor-pointer ${language === 'AR' ? 'text-brand-gold' : 'text-white/60'}`}
               >العربية</button>
            </div>

            {/* CTA */}
            <div className="w-full max-w-xs mt-4 shrink-0">
               <Button variant="primary" to="/contact" fullWidth onClick={() => setMobileMenuOpen(false)}>
                 {t.nav.getQuote}
               </Button>
            </div>

            {/* Contact Info Mobile */}
            <div className="mt-auto pt-8 flex flex-col gap-4 text-center text-sm text-gray-400 shrink-0 pb-safe">
               <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="block hover:text-white" dir="ltr">
                 <Phone size={16} className="inline mr-2 text-brand-gold" />
                 {COMPANY_INFO.phonePrimary}
               </a>
               <a href={`mailto:${COMPANY_INFO.email}`} className="block hover:text-white">
                 <Mail size={16} className="inline mr-2 text-brand-gold" />
                 {COMPANY_INFO.email}
               </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;