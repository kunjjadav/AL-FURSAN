import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Project, Service, Testimonial } from '../types';

type Language = 'EN' | 'AR';

interface TranslationData {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    est: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    iso: string;
    employees: string;
  };
  home: {
    expertise: string;
    expertiseTitle: string;
    expertiseDesc: string;
    years: string;
    yearsLabel: string;
    projects: string;
    projectsLabel: string;
    workforce: string;
    workforceLabel: string;
    rating: string;
    ratingLabel: string;
    portfolioTitle: string;
    portfolioSubtitle: string;
    viewAll: string;
    testimonialsTitle: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionSubtitle: string;
    missionBody1: string;
    missionBody2: string;
    missionBody3: string;
    stats: {
        safety: string;
        safetyDesc: string;
        time: string;
        timeDesc: string;
        quality: string;
        qualityDesc: string;
        team: string;
        teamDesc: string;
    }
  };
  services: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    filterAll: string;
    noProjects: string;
    stats: {
        floors: string;
        duration: string;
        sqft: string;
    }
  };
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    getInTouchDesc: string;
    headOffice: string;
    phone: string;
    email: string;
    hours: string;
    hoursDesc: string;
    formTitle: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    typeLabel: string;
    messageLabel: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    errorTitle: string;
    errorDesc: string;
    tryAgain: string;
    types: {
        general: string;
        civil: string;
        mep: string;
        fitout: string;
        maintenance: string;
    }
  };
  footer: {
    desc: string;
    quickLinks: string;
    services: string;
    contact: string;
    rights: string;
    privacy: string;
    terms: string;
    cookies: string;
  };
  data: {
    services: Service[];
    projects: Project[];
    testimonials: Testimonial[];
  }
}

const translations: Record<Language, TranslationData> = {
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      getQuote: 'Get Quote',
    },
    hero: {
      est: 'Est. 2005 in Dubai',
      title1: 'Building Dubai’s',
      title2: 'Future',
      subtitle: 'Precision Civil & MEP Contracting. On time. On budget. Built to last.',
      ctaPrimary: 'Request a Quote',
      ctaSecondary: 'View Projects',
      iso: 'ISO 9001 Certified',
      employees: '200+ Employees',
    },
    home: {
      expertise: 'Our Expertise',
      expertiseTitle: 'Comprehensive Contracting Solutions',
      expertiseDesc: 'Al Fursan Contracting delivers rapid, high-quality Civil and MEP contracting services across Dubai — committed to safety, timelines and exceptional craftsmanship.',
      years: '22+',
      yearsLabel: 'Years in UAE',
      projects: '150+',
      projectsLabel: 'Projects Delivered',
      workforce: '200+',
      workforceLabel: 'Skilled Workforce',
      rating: '4.8',
      ratingLabel: 'Client Rating',
      portfolioTitle: 'Portfolio',
      portfolioSubtitle: 'Featured Projects',
      viewAll: 'View All Projects',
      testimonialsTitle: 'What Our Clients Say',
      ctaTitle: 'Ready to Build With Confidence?',
      ctaDesc: 'Whether it\'s a commercial tower, luxury villa, or complex MEP upgrade, Al Fursan delivers precision and quality.',
      ctaButton: 'Start Your Project',
    },
    about: {
      title: 'About Al Fursan',
      subtitle: 'Precision engineering and construction excellence since 2005. We build the foundations of Dubai\'s future.',
      missionTitle: 'Our Mission',
      missionSubtitle: 'Committed to Excellence in Every Detail',
      missionBody1: 'Al Fursan Contracting was established with a singular vision: to provide the UAE market with a construction partner that values precision as much as speed.',
      missionBody2: 'Over the last two decades, we have grown from a small civil works team to a full-spectrum contracting firm employing over 200 professionals. Our portfolio spans high-rise commercial towers, luxury residential villas, and complex industrial MEP fit-outs.',
      missionBody3: 'We believe that true craftsmanship lies in the invisible details—the integrity of the wiring, the precision of the concrete pour, and the durability of the finishes.',
      stats: {
        safety: "Safety First",
        safetyDesc: "Zero compromise on site safety standards and HSE compliance.",
        time: "On-Time Delivery",
        timeDesc: "98% of projects delivered within the agreed timeline.",
        quality: "Quality Assurance",
        qualityDesc: "ISO 9001 certified processes for consistent output.",
        team: "Expert Team",
        teamDesc: "In-house engineers, architects, and skilled labor."
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'End-to-end construction and maintenance solutions tailored for the commercial and residential sectors of Dubai.',
      ctaTitle: 'Need a specialized solution?',
      ctaDesc: 'We also handle specialized custom fabrication, industrial flooring, and green building retrofits. Contact our engineering team to discuss your specific requirements.',
      ctaButton: 'Contact Engineers'
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'A showcase of precision, quality, and scale across Dubai and the UAE.',
      filterAll: 'All',
      noProjects: 'No projects found in this category.',
      stats: {
        floors: 'Floors',
        duration: 'Duration',
        sqft: 'Sq. Ft'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Start your project with Al Fursan. Reach out for quotes, consultations, or career opportunities.',
      getInTouch: 'Get in Touch',
      getInTouchDesc: 'Our team is available Monday through Saturday to answer your questions. Visit our office in Bur Dubai or send us a message.',
      headOffice: 'Head Office',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      hoursDesc: 'Mon - Sat: 8:00 AM - 6:00 PM \nSunday: Closed',
      formTitle: 'Send a Message',
      nameLabel: 'Your Name',
      phoneLabel: 'Phone Number',
      emailLabel: 'Email Address',
      typeLabel: 'Project Type',
      messageLabel: 'Message',
      submitButton: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message Sent!',
      successDesc: 'Thanks — your message is sent. Our team will contact you within one business day.',
      sendAnother: 'Send another message',
      errorTitle: 'Submission Failed',
      errorDesc: 'Something went wrong. Please try again or contact us directly via phone.',
      tryAgain: 'Try again',
      types: {
        general: 'General Inquiry',
        civil: 'Civil Contracting',
        mep: 'MEP Works',
        fitout: 'Fit-out',
        maintenance: 'Maintenance'
      }
    },
    footer: {
      desc: 'Building Dubai’s Future with precision Civil & MEP Contracting. Delivering projects on time, on budget, and built to last.',
      quickLinks: 'Company',
      services: 'Services',
      contact: 'Contact',
      rights: 'Al Fursan Contracting LLC. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookie Policy'
    },
    data: {
      services: [
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
      ],
      projects: [
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
      ],
      testimonials: [
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
      ]
    }
  },
  AR: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      contact: 'تواصل معنا',
      getQuote: 'اطلب عرض سعر',
    },
    hero: {
      est: 'تأسست عام 2005 في دبي',
      title1: 'نبني مستقبل',
      title2: 'دبي',
      subtitle: 'مقاولات مدنية وكهروميكانيكية دقيقة. في الوقت المحدد. ضمن الميزانية. بني ليدوم.',
      ctaPrimary: 'اطلب عرض سعر',
      ctaSecondary: 'عرض المشاريع',
      iso: 'حاصلون على شهادة ISO 9001',
      employees: 'أكثر من 200 موظف',
    },
    home: {
      expertise: 'خبرتنا',
      expertiseTitle: 'حلول مقاولات شاملة',
      expertiseDesc: 'تقدم شركة الفرسان للمقاولات خدمات مقاولات مدنية وكهروميكانيكية سريعة وعالية الجودة في جميع أنحاء دبي - ملتزمون بالسلامة والمواعيد النهائية والحرفية الاستثنائية.',
      years: '+22',
      yearsLabel: 'عاماً في الإمارات',
      projects: '+150',
      projectsLabel: 'مشروع تم تسليمه',
      workforce: '+200',
      workforceLabel: 'قوى عاملة ماهرة',
      rating: '4.8',
      ratingLabel: 'تقييم العملاء',
      portfolioTitle: 'أعمالنا',
      portfolioSubtitle: 'مشاريع مميزة',
      viewAll: 'عرض جميع المشاريع',
      testimonialsTitle: 'ماذا يقول عملاؤنا',
      ctaTitle: 'جاهز للبناء بثقة؟',
      ctaDesc: 'سواء كان برجاً تجارياً، فيلا فاخرة، أو تحديثاً معقداً للأنظمة الكهروميكانيكية، تقدم الفرسان الدقة والجودة.',
      ctaButton: 'ابدأ مشروعك',
    },
    about: {
      title: 'عن الفرسان',
      subtitle: 'تميز في الهندسة والبناء منذ عام 2005. نبني أسس مستقبل دبي.',
      missionTitle: 'مهمتنا',
      missionSubtitle: 'ملتزمون بالتميز في كل التفاصيل',
      missionBody1: 'تأسست شركة الفرسان للمقاولات برؤية فريدة: تزويد سوق الإمارات بشريك بناء يقدر الدقة بقدر السرعة.',
      missionBody2: 'على مدى العقدين الماضيين، نمونا من فريق صغير للأعمال المدنية إلى شركة مقاولات شاملة توظف أكثر من 200 محترف. تشمل محفظتنا أبراج تجارية شاهقة، فلل سكنية فاخرة، وتجهيزات صناعية معقدة.',
      missionBody3: 'نؤمن بأن الحرفية الحقيقية تكمن في التفاصيل غير المرئية - سلامة التوصيلات، دقة صب الخرسانة، ومتانة التشطيبات.',
      stats: {
        safety: "السلامة أولاً",
        safetyDesc: "لا مساومة على معايير السلامة في الموقع والامتثال للصحة والسلامة والبيئة.",
        time: "التسليم في الوقت المحدد",
        timeDesc: "98% من المشاريع تم تسليمها ضمن الجدول الزمني المتفق عليه.",
        quality: "ضمان الجودة",
        qualityDesc: "عمليات معتمدة بشهادة ISO 9001 لنتائج متسقة.",
        team: "فريق خبير",
        teamDesc: "مهندسون معماريون وعمال مهرة داخليون."
      }
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول بناء وصيانة شاملة مصممة للقطاعات التجارية والسكنية في دبي.',
      ctaTitle: 'هل تحتاج إلى حل متخصص؟',
      ctaDesc: 'نتعامل أيضاً مع التصنيع المخصص، الأرضيات الصناعية، وتعديلات المباني الخضراء. اتصل بفريقنا الهندسي لمناقشة متطلباتك الخاصة.',
      ctaButton: 'تواصل مع المهندسين'
    },
    portfolio: {
      title: 'أعمالنا',
      subtitle: 'عرض للدقة والجودة والحجم في جميع أنحاء دبي والإمارات.',
      filterAll: 'الكل',
      noProjects: 'لم يتم العثور على مشاريع في هذه الفئة.',
      stats: {
        floors: 'طابق',
        duration: 'المدة',
        sqft: 'قدم مربع'
      }
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'ابدأ مشروعك مع الفرسان. تواصل معنا للحصول على عروض أسعار أو استشارات أو فرص عمل.',
      getInTouch: 'تواصل معنا',
      getInTouchDesc: 'فريقنا متاح من الاثنين إلى السبت للإجابة على أسئلتكم. تفضل بزيارة مكتبنا في بر دبي أو أرسل لنا رسالة.',
      headOffice: 'المكتب الرئيسي',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      hoursDesc: 'الاثنين - السبت: 8:00 صباحاً - 6:00 مساءً \nالأحد: مغلق',
      formTitle: 'أرسل رسالة',
      nameLabel: 'اسمك',
      phoneLabel: 'رقم الهاتف',
      emailLabel: 'البريد الإلكتروني',
      typeLabel: 'نوع المشروع',
      messageLabel: 'الرسالة',
      submitButton: 'إرسال الرسالة',
      submitting: 'جاري الإرسال...',
      successTitle: 'تم إرسال الرسالة!',
      successDesc: 'شكراً - تم إرسال رسالتك. سيتصل بك فريقنا في غضون يوم عمل واحد.',
      sendAnother: 'إرسال رسالة أخرى',
      errorTitle: 'فشل الإرسال',
      errorDesc: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة عبر الهاتف.',
      tryAgain: 'حاول مرة أخرى',
      types: {
        general: 'استفسار عام',
        civil: 'مقاولات مدنية',
        mep: 'أعمال كهروميكانيكية',
        fitout: 'تجهيزات داخلية',
        maintenance: 'صيانة'
      }
    },
    footer: {
      desc: 'نبني مستقبل دبي بمقاولات مدنية وكهروميكانيكية دقيقة. نسلم المشاريع في الوقت المحدد، ضمن الميزانية، وبجودة تدوم.',
      quickLinks: 'الشركة',
      services: 'الخدمات',
      contact: 'اتصل بنا',
      rights: 'شركة الفرسان للمقاولات ذ.م.م. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      cookies: 'سياسة ملفات تعريف الارتباط'
    },
    data: {
      services: [
        {
          id: 'civil',
          title: 'المقاولات المدنية',
          description: 'من الأساسات إلى التشطيبات، يقدم فريق المقاولات المدنية لدينا السلامة الهيكلية.',
          icon: 'Hammer',
          outcomes: ['السلامة الهيكلية', 'الالتزام بالجدول', 'التحكم بالتكلفة']
        },
        {
          id: 'mep',
          title: 'المقاولات الكهروميكانيكية',
          description: 'حلول ميكانيكية وكهربائية وصحية شاملة للبنى التحتية المعقدة.',
          icon: 'Zap',
          outcomes: ['كفاءة الطاقة', 'الامتثال للسلامة', 'موثوقية النظام']
        },
        {
          id: 'fitout',
          title: 'التجهيزات الداخلية',
          description: 'تجهيزات داخلية فاخرة للقطاعات التجارية والضيافة.',
          icon: 'Ruler',
          outcomes: ['تشطيبات ممتازة', 'تحسين المساحة', 'توافق العلامة التجارية']
        },
        {
          id: 'maintenance',
          title: 'الصيانة',
          description: 'إدارة المرافق المستمرة وخدمات الصيانة الوقائية.',
          icon: 'Wrench',
          outcomes: ['دعم 24/7', 'طول عمر الأصول', 'استجابة سريعة']
        }
      ],
      projects: [
        {
          id: '1',
          title: 'برج سكاي لاين هايتس',
          category: 'Commercial',
          description: 'برج تجاري مكون من 45 طابقاً في الخليج التجاري يتميز بأنظمة كهروميكانيكية حديثة.',
          image: 'https://picsum.photos/800/600?random=1',
          location: 'الخليج التجاري، دبي',
          completionDate: '2023',
          stats: [{ value: '45', label: 'طابق' }, { value: '24 شهر', label: 'المدة' }]
        },
        {
          id: '2',
          title: 'فيلا نخلة جميرا',
          category: 'Residential',
          description: 'تجديد فاخر وتوسع مدني لفيلا خاصة على شاطئ البحر.',
          image: 'https://picsum.photos/800/600?random=2',
          location: 'نخلة جميرا، دبي',
          completionDate: '2022',
          stats: [{ value: '12k', label: 'قدم مربع' }]
        },
        {
          id: '3',
          title: 'أعمال ميكانيكية لمول الواحة',
          category: 'MEP',
          description: 'إصلاح شامل للتدفئة والتهوية وتكييف الهواء والكهرباء لمركز تسوق إقليمي.',
          image: 'https://picsum.photos/800/600?random=3',
          location: 'ديرة، دبي',
          completionDate: '2023',
        },
        {
          id: '4',
          title: 'منتجع رويال سبا',
          category: 'Hospitality',
          description: 'تجهيز راقٍ لمنتجع صحي 5 نجوم ومركز عافية.',
          image: 'https://picsum.photos/800/600?random=4',
          location: 'جميرا، دبي',
          completionDate: '2024',
        },
        {
          id: '5',
          title: 'مقر واحة التكنولوجيا',
          category: 'Commercial',
          description: 'أعمال الهيكل الفولاذي والخرسانة لمقر تكنولوجيا حديث.',
          image: 'https://picsum.photos/800/600?random=5',
          location: 'مدينة دبي للإنترنت',
          completionDate: '2021',
        },
        {
          id: '6',
          title: 'مساكن مارينا',
          category: 'Residential',
          description: 'بناء تسليم مفتاح كامل لمجمع سكني فاخر متعدد الوحدات.',
          image: 'https://picsum.photos/800/600?random=6',
          location: 'دبي مارينا',
          completionDate: '2023',
        }
      ],
      testimonials: [
        {
          id: '1',
          name: 'أحمد المنصوري',
          role: 'مدير المشروع',
          company: 'إعمار العقارية',
          content: 'سلمت الفرسان المشروع قبل أسبوعين من الموعد المحدد دون المساومة على الجودة. فريق الأعمال الكهروميكانيكية استثنائي.',
          rating: 5
        },
        {
          id: '2',
          name: 'سارة جنكينز',
          role: 'مدير العمليات',
          company: 'مجموعة هيلتون',
          content: 'مهنية، نظيفة، وآمنة. تم التعامل مع أعمال التجهيز باهتمام شديد بالتفاصيل.',
          rating: 5
        },
        {
          id: '3',
          name: 'محمد فايد',
          role: 'الرئيس التنفيذي',
          company: 'استثمارات فايد',
          content: 'شريك موثوق لتطويراتنا التجارية. الشفافية في التكاليف هي أكبر نقاط قوتهم.',
          rating: 5
        }
      ]
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('EN');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = lang === 'AR' ? 'rtl' : 'ltr';
    document.dir = dir;
    document.documentElement.lang = lang === 'AR' ? 'ar' : 'en';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], dir: language === 'AR' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
