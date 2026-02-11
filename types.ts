export interface Project {
  id: string;
  title: string;
  category: 'Commercial' | 'Residential' | 'Hospitality' | 'MEP';
  description: string;
  image: string;
  location: string;
  completionDate: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'Hammer' | 'Zap' | 'Ruler' | 'Wrench'; 
  outcomes: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}
