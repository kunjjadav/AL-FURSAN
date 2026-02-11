import { Project, Service, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "Al Fursan Contracting",
  email: "info@alfursancont.com",
  phonePrimary: "+971 52 485 2148",
  address: "Office No.G-03 & G-04, Al Diyafa Building 188, Bur Dubai, UAE",
  tagline: "Precision Civil & MEP Contracting, Dubai",
};

export const SERVICES: Service[] = [
  {
    id: 'civil',
    title: 'Civil Contracting',
    description: 'From foundations to finishes, our civil contracting team delivers structural integrity.',
    icon: 'Hammer',
    outcomes: ['Structural Integrity', 'Schedule Adherence', 'Cost Control']
  },
  {
    id: 'mep',
    title: 'MEP Contracting',
    description: 'Comprehensive Mechanical, Electrical, and Plumbing solutions for complex infrastructures.',
    icon: 'Zap',
    outcomes: ['Energy Efficiency', 'Safety Compliance', 'System Reliability']
  },
  {
    id: 'fitout',
    title: 'Fit-outs',
    description: 'Luxury interior fit-outs for commercial and hospitality sectors.',
    icon: 'Ruler',
    outcomes: ['Premium Finishes', 'Space Optimization', 'Brand Alignment']
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Ongoing facility management and preventative maintenance services.',
    icon: 'Wrench',
    outcomes: ['24/7 Support', 'Asset Longevity', 'Rapid Response']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Skyline Heights Tower',
    category: 'Commercial',
    description: 'A 45-story commercial tower in Business Bay featuring state-of-the-art MEP systems.',
    image: 'https://picsum.photos/800/600?random=1',
    location: 'Business Bay, Dubai',
    completionDate: '2023',
    stats: [{ value: '45', label: 'Floors' }, { value: '24mo', label: 'Duration' }]
  },
  {
    id: '2',
    title: 'Palm Jumeirah Villa',
    category: 'Residential',
    description: 'Luxury renovation and civil expansion of a private beachfront villa.',
    image: 'https://picsum.photos/800/600?random=2',
    location: 'Palm Jumeirah, Dubai',
    completionDate: '2022',
    stats: [{ value: '12k', label: 'Sq. Ft' }]
  },
  {
    id: '3',
    title: 'Oasis Mall MEP',
    category: 'MEP',
    description: 'Complete HVAC and electrical overhaul for a regional shopping center.',
    image: 'https://picsum.photos/800/600?random=3',
    location: 'Deira, Dubai',
    completionDate: '2023',
  },
  {
    id: '4',
    title: 'Royal Resort Spa',
    category: 'Hospitality',
    description: 'High-end fit-out for a 5-star resort spa and wellness center.',
    image: 'https://picsum.photos/800/600?random=4',
    location: 'Jumeirah, Dubai',
    completionDate: '2024',
  },
  {
    id: '5',
    title: 'Tech Park HQ',
    category: 'Commercial',
    description: 'Structural steel and concrete works for a modern technology headquarters.',
    image: 'https://picsum.photos/800/600?random=5',
    location: 'Dubai Internet City',
    completionDate: '2021',
  },
  {
    id: '6',
    title: 'Marina Residence',
    category: 'Residential',
    description: 'Full turnkey construction of a multi-unit luxury residential complex.',
    image: 'https://picsum.photos/800/600?random=6',
    location: 'Dubai Marina',
    completionDate: '2023',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Al Mansoori',
    role: 'Project Director',
    company: 'Emaar Properties',
    content: 'Al Fursan delivered the project two weeks ahead of schedule without compromising quality. Their MEP team is exceptional.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    role: 'Operations Manager',
    company: 'Hilton Group',
    content: 'Professional, clean, and safe. The fit-out works were handled with extreme attention to detail.',
    rating: 5
  },
  {
    id: '3',
    name: 'Mohammed Fayed',
    role: 'CEO',
    company: 'Fayed Investments',
    content: 'A trusted partner for our commercial developments. Transparency in costs is their biggest strength.',
    rating: 5
  }
];
