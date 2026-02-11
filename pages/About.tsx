import React from 'react';
import { Award, Clock, Users, ShieldCheck } from 'lucide-react';
import Section from '../components/Section';
import { useLanguage } from '../components/LanguageContext';

const About: React.FC = () => {
  const { t, dir } = useLanguage();

  const stats = [
    { icon: ShieldCheck, title: t.about.stats.safety, text: t.about.stats.safetyDesc },
    { icon: Clock, title: t.about.stats.time, text: t.about.stats.timeDesc },
    { icon: Award, title: t.about.stats.quality, text: t.about.stats.qualityDesc },
    { icon: Users, title: t.about.stats.team, text: t.about.stats.teamDesc }
  ];

  return (
    <>
      <Section className="bg-brand-navy text-white pt-32 pb-16" dir={dir}>
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.about.title}</h1>
          <p className="text-xl text-gray-300">
            {t.about.subtitle}
          </p>
        </div>
      </Section>

      <Section className="bg-white" dir={dir}>
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-brand-gold font-bold uppercase tracking-wider text-sm mb-3">{t.about.missionTitle}</h3>
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">{t.about.missionSubtitle}</h2>
            <div className="space-y-4 text-brand-gray">
              <p>{t.about.missionBody1}</p>
              <p>{t.about.missionBody2}</p>
              <p>{t.about.missionBody3}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-gold/10 rounded-xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
              alt="Engineering Team" 
              className="relative rounded-xl shadow-2xl z-10" 
            />
          </div>
        </div>
      </Section>

      <Section className="bg-brand-ivory" dir={dir}>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-brand-gold">
                <item.icon size={32} className="text-brand-navy mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2 text-brand-navy">{item.title}</h3>
                <p className="text-sm text-brand-gray">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;