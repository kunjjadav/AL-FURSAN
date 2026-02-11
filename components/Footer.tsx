import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-brand-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-start">

          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-tight">AL FURSAN</h2>
              <p className="text-brand-gold text-xs tracking-widest uppercase">Contracting LLC</p>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-brand-gold">{t.footer.quickLinks}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">{t.nav.projects}</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Insights & News</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-brand-gold">{t.footer.services}</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {t.data.services.map((service) => (
                <li key={service.id}><Link to="/services" className="hover:text-white transition-colors">{service.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-brand-gold">{t.footer.contact}</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold shrink-0 mt-1" size={16} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold shrink-0" size={16} />
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} className="hover:text-white" dir="ltr">{COMPANY_INFO.phonePrimary}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold shrink-0" size={16} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link to="/legal" className="hover:text-white">{t.footer.privacy}</Link>
            <Link to="/legal" className="hover:text-white">{t.footer.terms}</Link>
            <Link to="/legal" className="hover:text-white">{t.footer.cookies}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;