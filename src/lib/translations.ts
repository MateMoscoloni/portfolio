// All site copy lives here. Switch language by swapping the exported object.
// Usage: import { useLanguage } from '@/context/LanguageContext' → t.hero.name

export type Language = 'es' | 'en'

export interface Translations {
  nav: {
    about: string
    skills: string
    experience: string
    services: string
    projects: string
    contact: string
  }
  hero: {
    name: string
    title: string
    tagline: string
    cta_projects: string
    cta_contact: string
    cta_cv: string
  }
  about: {
    section_title: string
    p1: string
    p2: string
    p3: string
    p4: string
  }
  skills: {
    section_title: string
    categories: {
      label: string
      items: string[]
    }[]
  }
  experience: {
    section_title: string
    items: {
      company: string
      role: string
      period: string
      description: string
      tags: string[]
    }[]
  }
  services: {
    section_title: string
    items: {
      title: string
      description: string
    }[]
  }
  projects: {
    section_title: string
    items: {
      title: string
      description: string
      tags: string[]
      cta: string
      href: string
    }[]
  }
  contact: {
    section_title: string
    tagline: string
    email_label: string
    email: string
    linkedin_label: string
    linkedin_url: string
    github_label: string
    github_url: string
  }
}

export const translations: Record<Language, Translations> = {
  // ─────────────────────────────────────────────
  // ESPAÑOL
  // ─────────────────────────────────────────────
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Stack',
      experience: 'Experiencia',
      services: 'Servicios',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      name: 'Mate Moscoloni',
      title: 'Freelance Developer & AI Consultant',
      tagline: 'Desarrollo aplicaciones web y automatizaciones con IA para empresas que quieren escalar.',
      cta_projects: 'Ver proyectos',
      cta_contact: 'Contacto',
      cta_cv: 'Descargar CV',
    },
    about: {
      section_title: 'Sobre mí',
      p1: 'Desarrollador web autodidacta y especialista en automatización con inteligencia artificial. Liderazgo el área de tecnología y producto en una agencia de 4 socios enfocada en implementar soluciones de IA y automatización para PyMEs argentinas.',
      p2: 'Diseño y desarrollo aplicaciones web completas con Next.js, React, Supabase y Vercel. Construyo flujos de automatización con n8n e integro APIs de OpenAI, WhatsApp Business y MercadoPago.',
      p3: 'Con más de 6 años de experiencia en Mercado Libre, desarrollé un perfil analítico sólido trabajando con datos a escala usando SQL y Google BigQuery para análisis operativos y legales.',
      p4: 'Basado en Buenos Aires, Argentina.',
    },
    skills: {
      section_title: 'Stack técnico',
      categories: [
        {
          label: 'Frontend',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
        },
        {
          label: 'Backend & Bases de datos',
          items: ['Node.js', 'SQL', 'Google BigQuery', 'Supabase', 'REST APIs'],
        },
        {
          label: 'Datos',
          items: ['Análisis de datos', 'Modelado de datos', 'Python (básico)'],
        },
        {
          label: 'IA & Automatización',
          items: ['n8n', 'OpenAI API', 'WhatsApp Business API', 'MercadoPago API', 'Flujos IA', 'Chatbots'],
        },
        {
          label: 'General',
          items: ['Git', 'GitHub', 'Vercel', 'Google Maps API', 'Airtable', 'MercadoPago API', 'Prompt engineering', 'Herramientas IA'],
        },
      ],
    },
    experience: {
      section_title: 'Experiencia',
      items: [
        {
          company: 'Agencia de IA y Automatización',
          role: 'Fundador & Tech Lead',
          period: 'Enero 2026 — Presente',
          description:
            'Liderazgo de tecnología, producto e IA en agencia. Desarrollo de aplicaciones web con Next.js + Supabase (sistemas de reservas, paneles operativos, confirmaciones por WhatsApp). Diseño de flujos de automatización con n8n: chatbots con OpenAI, webhooks, integración con Airtable y WhatsApp Business API. Construcción de algoritmos de ruteo para operaciones de campo.',
          tags: ['Next.js', 'Supabase', 'n8n', 'OpenAI API', 'WhatsApp API'],
        },
        {
          company: 'Independiente',
          role: 'Freelance Web Developer',
          period: 'Presente',
          description:
            'Desarrollo de sitios web, landing pages y herramientas digitales para clientes. Sitio web con catálogo dinámico conectado a Google Sheets. Landing pages de generación de leads. App de ruteo y optimización de visitas comerciales. Sistema de reservas de transporte con disponibilidad en tiempo real.',
          tags: ['Next.js', 'React', 'JavaScript', 'Google Sheets API', 'Google Maps API'],
        },
        {
          company: 'Mercado Libre',
          role: 'Representante Senior — CAP / Legales',
          period: '2022 — 2026',
          description:
            'Análisis de datos operativos y legales usando SQL y Google BigQuery para identificar patrones, generar reportes y optimizar procesos internos. Resolución de casos de alta complejidad involucrando regulaciones, disputas y escalamiento.',
          tags: ['SQL', 'Google BigQuery', 'Análisis de datos'],
        },
        {
          company: 'Mercado Libre',
          role: 'Representante Semi Senior',
          period: '2020 — 2022',
          description:
            'Gestión de alto volumen de consultas con resolución eficiente y foco en satisfacción del usuario. Colaboración con equipos internos para escalar y resolver casos críticos.',
          tags: ['Atención al cliente', 'Operaciones'],
        },
      ],
    },
    services: {
      section_title: 'Servicios',
      items: [
        {
          title: 'Desarrollo Web',
          description:
            'Aplicaciones web con Next.js, landing pages, portales de cliente. Código limpio, rápido, listo para producción.',
        },
        {
          title: 'Automatización de Procesos',
          description:
            'Flujos de automatización con n8n, integraciones de APIs, automatización de procesos. Conecto WhatsApp, CRMs, bases de datos y cualquier sistema que tu empresa use.',
        },
        {
          title: 'Datos, Métricas & Visualización',
          description:
            'Dashboards interactivos, reportes automáticos e insights accionables con SQL y BigQuery. Tu equipo toma decisiones basadas en datos reales.',
        },
        {
          title: 'Adopción de IA',
          description:
            'Integro IA en tu negocio: chatbots por WhatsApp, asistentes internos con OpenAI, consultoría e implementación con resultados medibles.',
        },
      ],
    },
    projects: {
      section_title: 'Proyectos',
      items: [
        {
          title: 'Zeros Tour',
          description:
            'Plataforma web para empresa de transporte de combis. Demo en Next.js con Tailwind, integración con MercadoPago y automatización de WhatsApp vía n8n.',
          tags: ['Next.js', 'Tailwind', 'Supabase', 'n8n', 'MercadoPago'],
          cta: 'Ver demo',
          href: '#', // TODO: reemplazar con URL real del demo de Zeros Tour
        },
        {
          title: 'WhatsApp Chatbot con n8n + OpenAI',
          description:
            'Chatbot para atención al cliente por WhatsApp con historial de conversación, lógica personalizada y respuestas generadas por OpenAI.',
          tags: ['n8n', 'OpenAI API', 'WhatsApp', 'Airtable'],
          cta: 'Consultar proyecto',
          href: '#contact',
        },
        {
          title: 'La Herencia Argentina — Catálogo Web',
          description:
            'Sitio web multi-página para marca de artesanías argentinas (mates, cuchillos de campo, marroquinería). Catálogo de productos conectado a Google Sheets para que el cliente edite productos sin código. Incluye guía de uso para gestión autónoma.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Google Sheets API'],
          cta: 'Ver proyecto',
          href: '#', // TODO: reemplazar con URL real de La Herencia Argentina
        },
        {
          title: 'RouteQ — Optimización de Visitas Comerciales',
          description:
            'App web para operación de ventas en campo. Algoritmo nearest-neighbor con restricciones de frecuencia de visita, visualización de rutas en Google Maps e interfaz para planificación trimestral de recorridos.',
          tags: ['JavaScript', 'Google Maps API', 'Routing Algorithm'],
          cta: 'Ver proyecto',
          href: '#', // TODO: reemplazar con URL real de RouteQ
        },
      ],
    },
    contact: {
      section_title: 'Hablemos',
      tagline:
        '¿Tenés un proyecto en mente o querés explorar cómo la IA puede mejorar tu negocio? Escribime.',
      email_label: 'Email',
      email: 'mateogm1999@gmail.com',
      linkedin_label: 'LinkedIn',
      linkedin_url: 'https://www.linkedin.com/in/mateomoscoloni/',
      github_label: 'GitHub',
      github_url: 'https://github.com/MateMoscoloni',
    },
  },

  // ─────────────────────────────────────────────
  // ENGLISH
  // ─────────────────────────────────────────────
  en: {
    nav: {
      about: 'About',
      skills: 'Stack',
      experience: 'Experience',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      name: 'Mate Moscoloni',
      title: 'Freelance Developer & AI Consultant',
      tagline: 'I build web apps and AI automations for businesses ready to scale.',
      cta_projects: 'See projects',
      cta_contact: 'Contact',
      cta_cv: 'Download CV',
    },
    about: {
      section_title: 'About me',
      p1: 'Self-taught web developer and AI/automation specialist. I lead technology and product at a 4-partner agency focused on implementing AI and automation solutions for Argentine SMEs.',
      p2: 'I design and build full-stack web applications using Next.js, React, Supabase, and Vercel. I create automation workflows with n8n and integrate OpenAI, WhatsApp Business, and MercadoPago APIs.',
      p3: 'With 6+ years at Mercado Libre, I developed strong analytical skills working with data at scale using SQL and Google BigQuery for operational and legal analysis.',
      p4: 'Based in Buenos Aires, Argentina.',
    },
    skills: {
      section_title: 'Technical Stack',
      categories: [
        {
          label: 'Frontend',
          items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
        },
        {
          label: 'Backend & Databases',
          items: ['Node.js', 'SQL', 'Google BigQuery', 'Supabase', 'REST APIs'],
        },
        {
          label: 'Data',
          items: ['Data analysis', 'Data modeling', 'Python (basic)'],
        },
        {
          label: 'AI & Automation',
          items: ['n8n', 'OpenAI API', 'WhatsApp Business API', 'MercadoPago API', 'AI workflows', 'Chatbots'],
        },
        {
          label: 'General',
          items: ['Git', 'GitHub', 'Vercel', 'Google Maps API', 'Airtable', 'MercadoPago API', 'Prompt engineering', 'AI tools'],
        },
      ],
    },
    experience: {
      section_title: 'Experience',
      items: [
        {
          company: 'AI & Automation Agency',
          role: 'Co-founder & Tech Lead',
          period: '2024 — Present',
          description:
            'Technology, product and AI leadership at a 4-partner agency. Web application development with Next.js + Supabase (booking systems, operator panels, WhatsApp confirmations). Automation workflow design with n8n: OpenAI chatbots, webhooks, Airtable and WhatsApp Business API integration. Route optimization algorithms for field operations.',
          tags: ['Next.js', 'Supabase', 'n8n', 'OpenAI API', 'WhatsApp API'],
        },
        {
          company: 'Independent',
          role: 'Freelance Web Developer',
          period: '2023 — Present',
          description:
            'Web development of sites, landing pages and digital tools for clients. Dynamic catalog website connected to Google Sheets. Lead generation landing pages. Route optimization app for field sales. Real-time transport booking system.',
          tags: ['Next.js', 'React', 'JavaScript', 'Google Sheets API', 'Google Maps API'],
        },
        {
          company: 'Mercado Libre',
          role: 'Senior Representative — CAP / Legal',
          period: '2021 — Present',
          description:
            'Operational and legal data analysis using SQL and Google BigQuery to identify patterns, generate reports, and optimize internal processes. High-complexity case resolution involving regulations, disputes, and escalation.',
          tags: ['SQL', 'Google BigQuery', 'Data Analysis'],
        },
        {
          company: 'Mercado Libre',
          role: 'Semi-Senior Representative',
          period: '2019 — 2021',
          description:
            'High-volume case management with efficient resolution and user satisfaction focus. Cross-team collaboration to escalate and resolve critical cases.',
          tags: ['Customer Service', 'Operations'],
        },
      ],
    },
    services: {
      section_title: 'Services',
      items: [
        {
          title: 'Web Development',
          description:
            'Next.js web apps, landing pages, client portals. Clean, fast, deploy-ready code.',
        },
        {
          title: 'Process Automation',
          description:
            'n8n automation workflows, API integrations, business process automation. I connect WhatsApp, CRMs, databases, and any system your business uses.',
        },
        {
          title: 'Data, Metrics & Visualization',
          description:
            'Interactive dashboards, automated reports, and actionable insights with SQL and BigQuery. Your team makes decisions based on real data.',
        },
        {
          title: 'AI Adoption',
          description:
            'I integrate AI into your business: WhatsApp chatbots, internal assistants with OpenAI, consulting and implementation with measurable results.',
        },
      ],
    },
    projects: {
      section_title: 'Projects',
      items: [
        {
          title: 'Zeros Tour',
          description:
            'Web platform for a combi transport company. Next.js demo with Tailwind, MercadoPago integration and WhatsApp automation via n8n.',
          tags: ['Next.js', 'Tailwind', 'Supabase', 'n8n', 'MercadoPago'],
          cta: 'View demo',
          href: '#', // TODO: replace with real Zeros Tour demo URL
        },
        {
          title: 'WhatsApp Chatbot with n8n + OpenAI',
          description:
            'Customer service chatbot on WhatsApp with conversation history, custom logic and OpenAI-powered responses.',
          tags: ['n8n', 'OpenAI API', 'WhatsApp', 'Airtable'],
          cta: 'Ask about this project',
          href: '#contact',
        },
        {
          title: 'La Herencia Argentina — Product Catalog',
          description:
            'Multi-page website for an Argentine artisan goods brand (mates, field knives, leather goods). Product catalog powered by Google Sheets so the client can update products without coding. Includes a usage guide for autonomous management.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Google Sheets API'],
          cta: 'View project',
          href: '#', // TODO: replace with real La Herencia Argentina URL
        },
        /*{
          title: 'RouteQ — Field Sales Optimizer',
          description:
            'Web app for field sales operations. Nearest-neighbor routing algorithm with visit frequency constraints, Google Maps route visualization, and a quarterly planning interface.',
          tags: ['JavaScript', 'Google Maps API', 'Routing Algorithm'],
          cta: 'View project',
          href: '#',
        },*/
      ],
    },
    contact: {
      section_title: "Let's talk",
      tagline:
        'Have a project in mind or want to explore how AI can improve your business? Reach out.',
      email_label: 'Email',
      email: 'mateogm1999@gmail.com',
      linkedin_label: 'LinkedIn',
      linkedin_url: 'https://www.linkedin.com/in/mateomoscoloni/',
      github_label: 'GitHub',
      github_url: 'https://github.com/MateMoscoloni',
    },
  },
}
