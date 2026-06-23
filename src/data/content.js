export const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },

    cv: {
      button: "Download CV",
    },

    hero: {
      eyebrow: "HELLO! I'M",
      name: "Mariana Barreto Castro",
      role: "Software Analyst & Developer",
      description:
        "I design and build digital solutions by combining requirements analysis, process automation and web development.",
      primaryButton: "View my work",
      secondaryButton: "Contact me",
    },

    about: {
      title: "About Me",
      tagline: "Building digital solutions with structure, logic and purpose.",
      paragraphs: [
        "I’m a software developer focused on turning ideas and processes into functional digital solutions.",
        "I enjoy combining analysis, backend logic, databases, automation and user-friendly interfaces to build tools that solve real needs.",
      ],
      cards: [
        {
          title: "Analysis",
          description:
            "I understand needs, organize information and translate processes into clear technical solutions.",
          icon: "ph:brain-duotone",
          type: "purple",
        },
        {
          title: "Development",
          description:
            "I build functional solutions by connecting logic, data and user-friendly interfaces.",
          icon: "lucide:code-xml",
          type: "green",
        },
        {
          title: "Automation",
          description:
            "I optimize workflows through integrations, digital tools and process automation.",
          icon: "hugeicons:flow-circle",
          type: "yellow",
        },
      ],
    },

    skills: {
      eyebrow: "My expertise",
      title: "Skills & Stack",
      description:
        "Skills and tools I use to analyze processes, build digital solutions and automate workflows.",
      groups: [
        {
          title: "Digital Solutions Development",
          subtitle: "Interfaces and user experience",
          description:
            "Building web interfaces and features with a focus on structure, usability and user experience.",
          icon: "lucide:monitor",
          color: "#8b5cf6",
          technologies: [
            { name: "HTML", icon: "devicon:html5" },
            { name: "CSS", icon: "devicon:css3" },
            { name: "JavaScript", icon: "devicon:javascript" },
            { name: "Vue.js", icon: "devicon:vuejs" },
            { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
            { name: "Bootstrap", icon: "devicon:bootstrap" },
          ],
        },
        {
          title: "Functional Analysis",
          subtitle: "Requirements and documentation",
          description:
            "Understanding needs, documenting requirements and defining solutions from both functional and technical perspectives.",
          icon: "solar:document-text-outline",
          color: "#f59e0b",
          technologies: [
            { name: "Requirements", icon: "lucide:list-checks" },
            { name: "User Stories", icon: "lucide:book-open" },
            { name: "Documentation", icon: "lucide:file-text" },
            { name: "Process Analysis", icon: "lucide:workflow" },
          ],
        },
        {
          title: "Backend & APIs",
          subtitle: "Logic, services and integration",
          description:
            "Building backend logic, services and integrations to connect systems and support functional solutions.",
          icon: "lucide:server",
          color: "#22c55e",
          technologies: [
            { name: "Node.js", icon: "devicon:nodejs" },
            { name: "Spring Boot", icon: "devicon:spring" },
            { name: "REST APIs", icon: "carbon:api" },
          ],
        },
        {
          title: "Databases",
          subtitle: "Data management and storage",
          description:
            "Managing data, relational structures and storage services to support digital solutions.",
          icon: "lucide:database",
          color: "#e11d48",
          technologies: [
            { name: "MySQL", icon: "devicon:mysql" },
            { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
            { name: "Firestore & Firebase", icon: "logos:firebase" },
            { name: "MongoDB", icon: "devicon:mongodb" },
          ],
        },
        {
          title: "Automation",
          subtitle: "Workflows",
          description:
            "Creating automated workflows to connect tools, reduce manual tasks and optimize processes.",
          icon: "hugeicons:flow-circle",
          color: "#f59e0b",
          technologies: [
            { name: "n8n", icon: "simple-icons:n8n" },
            { name: "APIs", icon: "carbon:api" },
            { name: "Webhooks", icon: "mdi:webhook" },
            { name: "HTTP Requests", icon: "lucide:send" },
          ],
        },
        {
          title: "Tools & Workflow",
          subtitle: "Version control and organization",
          description:
            "I use collaborative tools to organize work, manage code and support development processes.",
          icon: "lucide:wrench",
          color: "#f43f5e",
          technologies: [
            { name: "Git", icon: "devicon:git" },
            { name: "GitHub", icon: "mdi:github" },
            { name: "VS Code", icon: "devicon:vscode" },
            { name: "Postman", icon: "devicon:postman" },
            { name: "Jira", icon: "devicon:jira" },
          ],
        },
      ],
    },

    projects: {
      title: "Projects",
      viewAll: "View GitHub →",
      cards: [
        {
          title: "Personal Portfolio",
          description:
            "Responsive personal portfolio built to present my profile, skills and projects with a modern interface.",
          image: "/images/projects/project-1.png",
          technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
          demoLabel: "View Project",
          githubLabel: "Repository",
          demoUrl: "#",
          githubUrl: "https://github.com/MarianaBarretoCas",
        },
      ],
    },

    experience: {
      title: "Experience & Journey",
      items: [
        {
          year: "2024",
          title: "Software Analysis & Development",
          description:
            "Learning and building digital solutions through frontend, backend and requirements analysis.",
          icon: "lucide:code-xml",
        },
        {
          year: "2023",
          title: "Functional Analysis",
          description:
            "Requirements gathering, documentation and understanding user needs.",
          icon: "solar:document-text-outline",
        },
        {
          year: "2022",
          title: "Web Development",
          description:
            "Frontend practice, interface development and responsive design.",
          icon: "lucide:monitor",
        },
        {
          year: "2021",
          title: "Start of my Journey",
          description:
            "Beginning my learning path in technology, software and problem solving.",
          icon: "lucide:rocket",
        },
      ],
    },

    contact: {
      title: "Let's Connect!",
      description:
        "I'd love to hear about your project, opportunity or idea. Feel free to contact me through any of these channels.",
      fields: {
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Message",
      },
      button: "Send Message",
      defaultSubject: "New message from portfolio",
      whatsappMessage:
        "Hello Mariana, I saw your portfolio and I would like to contact you.",
    },

    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },

    cv: {
      button: "Descargar CV",
    },

    hero: {
      eyebrow: "¡HOLA!, SOY",
      name: "Mariana Barreto Castro",
      role: "Analista y Desarrolladora de Software",
      description:
        "Diseño y desarrollo soluciones digitales combinando análisis de requerimientos, automatización de procesos y desarrollo web.",
      primaryButton: "Ver mi trabajo",
      secondaryButton: "Contáctame",
    },

    about: {
      title: "Sobre mí",
      tagline:
        "Construyendo soluciones digitales con estructura, lógica y propósito.",
      paragraphs: [
        "Soy desarrolladora de software enfocada en convertir ideas y procesos en soluciones digitales funcionales.",
        "Me gusta combinar análisis, lógica backend, bases de datos, automatización e interfaces claras para construir herramientas que respondan a necesidades reales.",
      ],
      cards: [
        {
          title: "Análisis",
          description:
            "Entiendo necesidades, organizo información y traduzco procesos en soluciones técnicas claras.",
          icon: "ph:brain-duotone",
          type: "purple",
        },
        {
          title: "Desarrollo",
          description:
            "Construyo soluciones funcionales conectando lógica, datos e interfaces fáciles de usar.",
          icon: "lucide:code-xml",
          type: "green",
        },
        {
          title: "Automatización",
          description:
            "Optimizo flujos de trabajo mediante integraciones, herramientas digitales y automatización de procesos.",
          icon: "hugeicons:flow-circle",
          type: "yellow",
        },
      ],
    },

    skills: {
      eyebrow: "Mi experiencia",
      title: "Habilidades & Stack",
      description:
        "Habilidades y herramientas que uso para analizar procesos, construir soluciones digitales y automatizar flujos de trabajo.",
      groups: [
        {
          title: "Desarrollo de soluciones digitales",
          subtitle: "Interfaces y experiencia de usuario",
          description:
            "Construcción de interfaces y funcionalidades web con enfoque en estructura, usabilidad y experiencia de usuario.",
          icon: "lucide:monitor",
          color: "#8b5cf6",
          technologies: [
            { name: "HTML", icon: "devicon:html5" },
            { name: "CSS", icon: "devicon:css3" },
            { name: "JavaScript", icon: "devicon:javascript" },
            { name: "Vue.js", icon: "devicon:vuejs" },
            { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
            { name: "Bootstrap", icon: "devicon:bootstrap" },
          ],
        },
        {
          title: "Análisis Funcional",
          subtitle: "Requerimientos y documentación",
          description:
            "Comprensión de necesidades, documentación de requerimientos y definición de soluciones desde una visión funcional y técnica.",
          icon: "solar:document-text-outline",
          color: "#f59e0b",
          technologies: [
            { name: "Requerimientos", icon: "lucide:list-checks" },
            { name: "Historias de usuario", icon: "lucide:book-open" },
            { name: "Documentación", icon: "lucide:file-text" },
            { name: "Análisis de procesos", icon: "lucide:workflow" },
          ],
        },
        {
          title: "Backend y APIs",
          subtitle: "Lógica, servicios e integración",
          description:
            "Construcción de lógica backend, servicios e integraciones para conectar sistemas y soportar soluciones funcionales.",
          icon: "lucide:server",
          color: "#22c55e",
          technologies: [
            { name: "Node.js", icon: "devicon:nodejs" },
            { name: "Spring Boot", icon: "devicon:spring" },
            { name: "REST APIs", icon: "carbon:api" },
          ],
        },
        {
          title: "Bases de datos",
          subtitle: "Gestión y almacenamiento de información",
          description:
            "Manejo de datos, estructuras relacionales y servicios de almacenamiento para apoyar soluciones digitales.",
          icon: "lucide:database",
          color: "#e11d48",
          technologies: [
            { name: "MySQL", icon: "devicon:mysql" },
            { name: "Sql Server", icon: "devicon:microsoftsqlserver" },
            { name: "Y Firestore", icon: "logos:firebase" },
            { name: "MongoDB", icon: "devicon:mongodb" },
          ],
        },
        {
          title: "Automatización",
          subtitle: "Flujos de trabajo",
          description:
            "Creación de flujos automatizados para conectar herramientas, reducir tareas manuales y optimizar procesos.",
          icon: "hugeicons:flow-circle",
          color: "#f59e0b",
          technologies: [
            { name: "n8n", icon: "simple-icons:n8n" },
            { name: "APIs", icon: "carbon:api" },
            { name: "Webhooks", icon: "mdi:webhook" },
            { name: "HTTP Requests", icon: "lucide:send" },
          ],
        },
        {
          title: "Herramientas y flujo de trabajo",
          subtitle: "Control de versiones y organización",
          description:
            "Uso herramientas colaborativas para organizar el trabajo, gestionar código y apoyar procesos de desarrollo.",
          icon: "lucide:wrench",
          color: "#f43f5e",
          technologies: [
            { name: "Git", icon: "devicon:git" },
            { name: "GitHub", icon: "mdi:github" },
            { name: "VS Code", icon: "devicon:vscode" },
            { name: "Postman", icon: "devicon:postman" },
            { name: "Jira", icon: "devicon:jira" },
          ],
        },
      ],
    },

    projects: {
      title: "Proyectos",
      viewAll: "Ver GitHub →",
      cards: [
        {
          title: "Portafolio personal",
          description:
            "Portafolio responsivo desarrollado para presentar mi perfil, habilidades y proyectos con una interfaz moderna.",
          image: "/images/projects/project-1.png",
          technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
          demoLabel: "Ver proyecto",
          githubLabel: "Repositorio",
          demoUrl: "#",
          githubUrl: "https://github.com/MarianaBarretoCas",
        },
      ],
    },

    experience: {
      title: "Experiencia y recorrido",
      items: [
        {
          year: "2024",
          title: "Análisis y desarrollo de software",
          description:
            "Aprendizaje y construcción de soluciones digitales desde frontend, backend y análisis de requerimientos.",
          icon: "lucide:code-xml",
        },
        {
          year: "2023",
          title: "Análisis funcional",
          description:
            "Levantamiento de requerimientos, documentación y comprensión de necesidades de usuario.",
          icon: "solar:document-text-outline",
        },
        {
          year: "2022",
          title: "Desarrollo web",
          description:
            "Práctica en frontend, desarrollo de interfaces y diseño responsivo.",
          icon: "lucide:monitor",
        },
        {
          year: "2021",
          title: "Inicio de mi recorrido",
          description:
            "Inicio de mi camino de aprendizaje en tecnología, software y resolución de problemas.",
          icon: "lucide:rocket",
        },
      ],
    },

    contact: {
      title: "¡Conectemos!",
      description:
        "Me encantaría conocer tu proyecto, oportunidad o idea. Puedes contactarme por cualquiera de estos canales.",
      fields: {
        name: "Tu nombre",
        email: "Tu correo",
        subject: "Asunto",
        message: "Mensaje",
      },
      button: "Enviar mensaje",
      defaultSubject: "Nuevo mensaje desde el portafolio",
      whatsappMessage:
        "Hola Mariana, vi tu portafolio y me gustaría contactarte.",
    },

    footer: {
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },
};
