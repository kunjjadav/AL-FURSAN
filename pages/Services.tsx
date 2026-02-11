import React from 'react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { useLanguage } from '../components/LanguageContext';

const Services: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <>
      <Section className="bg-brand-navy text-white pt-32 pb-16" dir={dir}>
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.services.title}</h1>
          <p className="text-xl text-gray-300">
            {t.services.subtitle}
          </p>
        </div>
      </Section>

      <Section className="bg-brand-ivory" dir={dir}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {t.data.services.map((service) => (
               <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white" dir={dir}>
        <div className="container mx-auto px-4">
           <div className="bg-brand-charcoal text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="max-w-xl">
               <h2 className="text-3xl font-serif font-bold mb-4">{t.services.ctaTitle}</h2>
               <p className="text-gray-300 mb-0">
                 {t.services.ctaDesc}
               </p>
             </div>
             <Button variant="primary" to="/contact" className="shrink-0">
               {t.services.ctaButton}
             </Button>
           </div>
        </div>
      </Section>
    </>
  );
};

export default Services;