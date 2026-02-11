import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dir?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, dir }) => {
  return (
    <section id={id} className={`py-20 md:py-24 ${className}`} dir={dir}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;