import React from 'react';
import { Hammer, Zap, Ruler, Wrench, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import { Link } from 'react-router-dom';

const icons = {
  Hammer: Hammer,
  Zap: Zap,
  Ruler: Ruler,
  Wrench: Wrench
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = icons[service.icon];

  return (
    <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-gold/20 flex flex-col h-full">
      <div className="w-14 h-14 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6 text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">
        {service.title}
      </h3>
      
      <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-8">
        {service.outcomes.map((outcome, idx) => (
          <li key={idx} className="text-xs font-medium text-brand-charcoal flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            {outcome}
          </li>
        ))}
      </ul>

      <Link 
        to="/services" 
        className="inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors mt-auto"
      >
        Learn More 
        {/* Use margin-start (ms-2) for correct spacing in RTL and LTR */}
        <ArrowRight size={16} className="ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;