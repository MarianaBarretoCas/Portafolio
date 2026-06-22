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
      english: "English version",
      spanish: "Spanish version",
    },

    hero: {
      eyebrow: "HELLO! I'M",
      name: "Mariana Barreto Castro",
      role: "Software Analyst & Developer",
      description:
        "I design and build digital solutions by combining requirements analysis, web development and a user-focused mindset.",
      primaryButton: "View my work",
      secondaryButton: "Contact me",
    },

    about: {
      title: "About Me",
      paragraphs: [
        "I'm a curious and proactive software analyst and developer focused on transforming ideas into useful digital solutions.",
        "I enjoy understanding user needs, documenting requirements and supporting the development of clear, functional and scalable systems.",
        "I'm constantly learning and improving my skills in frontend development, backend foundations, databases and functional analysis.",
      ],
      cards: [
        {
          title: "Analytical",
          description:
            "I enjoy understanding problems, organizing information and translating needs into clear solutions.",
          icon: "ph:brain-duotone",
          type: "purple",
        },
        {
          title: "Developer",
          description:
            "I build clean, responsive and user-friendly interfaces with modern web technologies.",
          icon: "lucide:code-xml",
          type: "green",
        },
        {
          title: "Learner",
          description:
            "I'm always learning, improving and exploring better ways to solve problems.",
          icon: "solar:lightbulb-bolt-outline",
          type: "yellow",
        },
      ],
    },

    skills: {
      eyebrow: "My expertise",
      title: "Skills & Technologies",
      description:
        "Skills and tools I use to analyze, design and build functional digital solutions.",
      groups: [
        {
          title: "Frontend Development",
          subtitle: "Interfaces and user experience",
          description:
            "I create responsive and accessible interfaces focused on clarity, usability and visual consistency.",
          icon: "lucide:monitor",
          color: "#8b5cf6",
          technologies: [
            { name: "HTML", icon: "devicon:html5" },
            { name: "CSS", icon: "devicon:css3" },
            { name: "JavaScript", icon: "devicon:javascript" },
            { name: "Vue.js", icon: "devicon:vuejs" },
            { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
          ],
        },
        {
          title: "Functional Analysis",
          subtitle: "Requirements and documentation",
          description:
            "I analyze business needs, document requirements and help translate ideas into clear technical and functional specifications.",
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
          title: "Backend & Databases",
          subtitle: "Logic and data management",
          description:
            "I have foundations in backend development and database management to support complete digital solutions.",
          icon: "lucide:database",
          color: "#22c55e",
          technologies: [
            { name: "Java", icon: "devicon:java" },
            { name: "Spring Boot", icon: "devicon:spring" },
            { name: "MySQL", icon: "devicon:mysql" },
            { name: "PostgreSQL", icon: "devicon:postgresql" },
          ],
        },
        {
          title: "Tools & Workflow",
          subtitle: "Version control and organization",
          description:
            "I use collaborative tools to organize work, manage code and support software development processes.",
          icon: "lucide:wrench",
          color: "#f43f5e",
          technologies: [
            { name: "Git", icon: "devicon:git" },
            { name: "GitHub", icon: "mdi:github" },
            { name: "Jira", icon: "devicon:jira" },
            { name: "VS Code", icon: "devicon:vscode" },
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
      english: "Versión en inglés",
      spanish: "Versión en español",
    },

    hero: {
      eyebrow: "HOLA, SOY",
      name: "Mariana Barreto Castro",
      role: "Analista y Desarrolladora de Software",
      description:
        "Diseño y desarrollo soluciones digitales combinando análisis de requerimientos, desarrollo web y una visión centrada en el usuario.",
      primaryButton: "Ver mi trabajo",
      secondaryButton: "Contáctame",
    },

    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy una analista y desarrolladora de software curiosa, proactiva y enfocada en transformar ideas en soluciones digitales útiles.",
        "Disfruto entender las necesidades de los usuarios, documentar requerimientos y apoyar el desarrollo de sistemas claros, funcionales y escalables.",
        "Estoy en constante aprendizaje, fortaleciendo mis habilidades en desarrollo frontend, fundamentos backend, bases de datos y análisis funcional.",
      ],
      cards: [
        {
          title: "Analítica",
          description:
            "Me gusta entender problemas, organizar información y convertir necesidades en soluciones claras.",
          icon: "ph:brain-duotone",
          type: "purple",
        },
        {
          title: "Desarrolladora",
          description:
            "Construyo interfaces limpias, responsivas y centradas en la experiencia de usuario.",
          icon: "lucide:code-xml",
          type: "green",
        },
        {
          title: "Aprendizaje",
          description:
            "Siempre estoy aprendiendo, mejorando y buscando mejores formas de resolver problemas.",
          icon: "solar:lightbulb-bolt-outline",
          type: "yellow",
        },
      ],
    },

    skills: {
      eyebrow: "Mi experiencia",
      title: "Habilidades y tecnologías",
      description:
        "Habilidades y herramientas que uso para analizar, diseñar y construir soluciones digitales funcionales.",
      groups: [
        {
          title: "Desarrollo Frontend",
          subtitle: "Interfaces y experiencia de usuario",
          description:
            "Creo interfaces responsivas y accesibles enfocadas en claridad, usabilidad y consistencia visual.",
          icon: "lucide:monitor",
          color: "#8b5cf6",
          technologies: [
            { name: "HTML", icon: "devicon:html5" },
            { name: "CSS", icon: "devicon:css3" },
            { name: "JavaScript", icon: "devicon:javascript" },
            { name: "Vue.js", icon: "devicon:vuejs" },
            { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
          ],
        },
        {
          title: "Análisis Funcional",
          subtitle: "Requerimientos y documentación",
          description:
            "Analizo necesidades de negocio, documento requerimientos y ayudo a convertir ideas en especificaciones claras.",
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
          title: "Backend y bases de datos",
          subtitle: "Lógica y gestión de datos",
          description:
            "Tengo bases en desarrollo backend y gestión de bases de datos para apoyar soluciones digitales completas.",
          icon: "lucide:database",
          color: "#22c55e",
          technologies: [
            { name: "Java", icon: "devicon:java" },
            { name: "Spring Boot", icon: "devicon:spring" },
            { name: "MySQL", icon: "devicon:mysql" },
            { name: "PostgreSQL", icon: "devicon:postgresql" },
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
            { name: "Jira", icon: "devicon:jira" },
            { name: "VS Code", icon: "devicon:vscode" },
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