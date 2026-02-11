import React from 'react';
import { Project } from '../types';
import { MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-brand-navy cursor-pointer">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent opacity-90 transition-opacity duration-300" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="text-brand-gold text-xs font-bold tracking-wider uppercase mb-2">
          {project.category}
        </span>
        <h3 className="text-white text-xl font-serif font-bold mb-2 group-hover:text-brand-gold transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-col gap-2 text-white/80 text-xs mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
           <div className="flex items-center gap-2">
             <MapPin size={12} /> {project.location}
           </div>
           <div className="flex items-center gap-2">
             <Calendar size={12} /> Completed {project.completionDate}
           </div>
           <p className="mt-2 line-clamp-2">{project.description}</p>
        </div>

        {project.stats && (
           <div className="flex gap-4 border-t border-white/20 pt-4 mt-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
             {project.stats.map((stat, idx) => (
               <div key={idx}>
                 <p className="text-white font-bold text-sm">{stat.value}</p>
                 <p className="text-brand-gray text-[10px] uppercase">{stat.label}</p>
               </div>
             ))}
           </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;