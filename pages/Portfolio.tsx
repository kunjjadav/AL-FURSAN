import React, { useState } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../components/LanguageContext';

const Portfolio: React.FC = () => {
  const { t, dir } = useLanguage();
  const [filter, setFilter] = useState<'All' | 'Commercial' | 'Residential' | 'Hospitality' | 'MEP'>('All');

  const filteredProjects = filter === 'All' 
    ? t.data.projects 
    : t.data.projects.filter(p => p.category === filter);

  const categories = ['All', 'Commercial', 'Residential', 'Hospitality', 'MEP'];

  return (
    <>
      <Section className="bg-brand-navy text-white pt-32 pb-16" dir={dir}>
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.portfolio.title}</h1>
          <p className="text-xl text-gray-300">
            {t.portfolio.subtitle}
          </p>
        </div>
      </Section>

      <Section className="bg-white min-h-screen" dir={dir}>
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-brand-navy text-brand-gold shadow-lg' 
                    : 'bg-brand-ivory text-brand-gray hover:bg-brand-navy/10'
                }`}
              >
                {cat === 'All' ? t.portfolio.filterAll : cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredProjects.map((project) => (
               <ProjectCard key={project.id} project={project} />
             ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-brand-gray">
              <p>{t.portfolio.noProjects}</p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default Portfolio;