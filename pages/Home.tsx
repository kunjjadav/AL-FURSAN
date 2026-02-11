import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { CheckCircle, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';

const Home: React.FC = () => {
  const { t, dir } = useLanguage();
  const featuredProjects = t.data.projects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-brand-navy" dir={dir}>
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Skyline Construction" 
            className="w-full h-full object-cover opacity-40 animate-[pulse_10s_ease-in-out_infinite]" 
            style={{ animation: 'none', transform: 'scale(1.1)' }} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-brand-navy/30" />
        </div>

        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
          <motion.div 
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-brand-gold"></div>
              <span className="text-brand-gold font-bold tracking-widest text-sm uppercase">{t.hero.est}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              {t.hero.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">{t.hero.title2}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-8 max-w-lg">
              {t.hero.subtitle}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" to="/contact">{t.hero.ctaPrimary}</Button>
              <Button variant="outline" to="/portfolio">{t.hero.ctaSecondary}</Button>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
               <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> {t.hero.iso}</span>
               <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> {t.hero.employees}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-brand-ivory" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">{t.home.expertise}</h3>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">{t.home.expertiseTitle}</h2>
            <p className="text-brand-gray">{t.home.expertiseDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.data.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar / Why Choose Us */}
      <section className="py-20 bg-brand-navy text-white overflow-hidden" dir={dir}>
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-4 gap-8 text-center divide-x rtl:divide-x-reverse divide-white/10">
             <div className="p-4">
               <div className="text-5xl font-serif font-bold text-brand-gold mb-2">{t.home.years}</div>
               <p className="text-sm uppercase tracking-widest opacity-80">{t.home.yearsLabel}</p>
             </div>
             <div className="p-4">
               <div className="text-5xl font-serif font-bold text-brand-gold mb-2">{t.home.projects}</div>
               <p className="text-sm uppercase tracking-widest opacity-80">{t.home.projectsLabel}</p>
             </div>
             <div className="p-4">
               <div className="text-5xl font-serif font-bold text-brand-gold mb-2">{t.home.workforce}</div>
               <p className="text-sm uppercase tracking-widest opacity-80">{t.home.workforceLabel}</p>
             </div>
             <div className="p-4">
               <div className="text-5xl font-serif font-bold text-brand-gold mb-2">{t.home.rating}</div>
               <p className="text-sm uppercase tracking-widest opacity-80">{t.home.ratingLabel}</p>
             </div>
           </div>
           
           <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos */}
             {['Emaar', 'Nakheel', 'Damac', 'Dubai Properties', 'Meraas'].map((client) => (
               <div key={client} className="text-xl font-bold font-serif">{client}</div>
             ))}
           </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white" dir={dir}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <div>
              <h3 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">{t.home.portfolioTitle}</h3>
              <h2 className="text-4xl font-serif font-bold text-brand-navy">{t.home.portfolioSubtitle}</h2>
             </div>
             <Link to="/portfolio" className="text-brand-navy font-semibold hover:text-brand-gold transition-colors flex items-center group">
               {t.home.viewAll} <span className="mx-2 text-xl group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">→</span>
             </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-ivory relative overflow-hidden" dir={dir}>
        <div className={`absolute top-0 ${dir === 'rtl' ? 'right-0' : 'left-0'} text-9xl text-brand-gold/10 font-serif leading-none select-none`}>“</div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-brand-navy">{t.home.testimonialsTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.data.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
                <Quote className="text-brand-gold/30 mb-4" size={32} />
                <p className="text-brand-charcoal text-sm italic leading-relaxed mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center text-white font-serif font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">{testimonial.name}</h4>
                    <p className="text-xs text-brand-gray">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className={`absolute top-8 ${dir === 'rtl' ? 'left-8' : 'right-8'} flex text-brand-gold text-xs`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-navy relative overflow-hidden" dir={dir}>
        <div className="absolute inset-0 bg-brand-gold/10 transform -skew-y-3 origin-bottom-right scale-150"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">{t.home.ctaTitle}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            {t.home.ctaDesc}
          </p>
          <Button variant="primary" to="/contact" className="!px-10 !py-4 text-lg">
            {t.home.ctaButton}
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;