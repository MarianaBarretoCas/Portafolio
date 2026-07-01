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
      buttonLabel: "English Version",
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
            { name: ".Net", icon: "skill-icons:dotnet" },
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
      eyebrow: "My work",
      title: "Projects",
      description:
        "Digital solutions where I apply development, analysis and automation skills to solve real needs.",
      viewAll: "View GitHub →",
      detailsLabel: "View details",
      problemLabel: "Problem",
      solutionLabel: "Solution",
      roleLabel: "My role",
      featuresLabel: "Key features",
      stackLabel: "Tech stack",
      cards: [
        {
          title: "Indrugs",
          type: "Pharmacy Management System",
          status: "Completed",
          image: "/images/projects/project-1.png",

          shortDescription:
            "A web system designed to centralize inventory, medication, order, delivery and administrative management for a pharmaceutical operation.",

          problem:
            "The operation needed a centralized platform to manage medications, control inventory, handle orders, organize deliveries and support administrative processes more efficiently.",

          solution:
            "I developed a Spring Boot web application using a layered architecture, implementing role-based access control, business logic, DTOs, mappers and specialized modules to organize pharmaceutical operations.",

          role: "I contributed to both backend and frontend development by implementing entities, repositories, services, controllers, business logic and key features. I also collaborated on the system’s visual structure and user experience.",

          features: [
            "Role-based access control",
            "Inventory management",
            "Medication administration",
            "Order management",
            "Delivery and vehicle modules",
            "Dashboard and reporting",
            "Mass email functionality",
            "Password recovery",
            "User profile management",
            "PQRS management",
            "Layered architecture with DTOs and mappers",
          ],

          technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JPA",
            "Hibernate",
            "MySQL",
            "Maven",
            "Docker",
          ],

          demoLabel: "View Project",
          githubLabel: "Repository",
          demoUrl: "#",
          githubUrl: "https://github.com/MarianaBarretoCas",
        },
        {
          title: "StatusCake Monitoring Flow",
          type: "Monitoring and reporting automation",
          status: "Completed",
          image: "/images/projects/project-2.png",

          shortDescription:
            "An automated workflow to process StatusCake alerts, track downtime and recovery events, calculate incident duration and generate Excel reports.",

          problem:
            "Service monitoring generated email alerts, but the information was scattered and difficult to consolidate into an operational report with outages, recoveries, incident duration, reasons and affected services.",

          solution:
            "I designed an n8n workflow that reads StatusCake notifications, identifies DOWN and UP events, extracts key data, matches outages with recoveries and automatically updates a tracking file with a detailed log and incident summary.",

          role: "I designed the workflow logic, structured the alert processing, defined event classification rules, calculated downtime duration and organized the information to generate clear and reusable reports.",

          features: [
            "Automatic email alert processing",
            "DOWN and UP event classification",
            "Extraction of service, status, time, region and reason",
            "Matching outages with recovery events",
            "Incident duration calculation",
            "Historical event log",
            "Outage summary by service",
            "Pending incident detection",
            "Automatic Excel file update",
          ],

          technologies: [
            "n8n",
            "StatusCake",
            "Email",
            "Excel",
            "JavaScript",
            "Automation",
            "Webhooks",
          ],

          demoLabel: "View Flow",
          demoUrl: "#",
        },
      ],
    },

    experience: {
      title: "Experience & Journey",
      items: [
        {
          year: "2024",
          title: "Beginning My Journey",
          description:
            "Started studying Software Analysis and Development and discovered my passion for creating digital solutions.",
          icon: "lucide:rocket",
        },
        {
          year: "2025",
          title: "Building Real Projects",
          description:
            "Developed Indrugs and academic solutions, gaining experience with backend development and software architecture.",
          icon: "lucide:code-xml",
        },
        {
          year: "2026",
          title: "Professional Experience",
          description:
            "Started my internship and worked on process automation, monitoring flows and system integrations.",
          icon: "lucide:briefcase-business",
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
      buttonLabel: "Versión en Español",
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
            { name: ".Net", icon: "skill-icons:dotnet" },
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
      eyebrow: "Mi trabajo",
      title: "Proyectos",
      description:
        "Soluciones digitales donde aplico desarrollo, análisis y automatización para responder a necesidades reales.",
      viewAll: "Ver GitHub →",
      detailsLabel: "Ver detalles",
      problemLabel: "Problema",
      solutionLabel: "Solución",
      roleLabel: "Mi rol",
      featuresLabel: "Funcionalidades clave",
      stackLabel: "Stack tecnológico",
      cards: [
        {
          title: "Indrugs",
          type: "Sistema de Gestión Farmacéutica",
          status: "Completado",
          image: "/images/projects/project-1.png",

          shortDescription:
            "Sistema web diseñado para centralizar la gestión de inventario, medicamentos, pedidos, entregas y procesos administrativos en una operación farmacéutica.",

          problem:
            "La operación necesitaba una plataforma centralizada para administrar medicamentos, controlar inventario, gestionar pedidos, organizar entregas y manejar procesos administrativos de forma más eficiente.",

          solution:
            "Desarrollé una aplicación web con Spring Boot y una arquitectura por capas, implementando control de acceso por roles, lógica de negocio, DTOs, mapeadores y módulos especializados para organizar las operaciones farmacéuticas.",

          role: "Participé en el desarrollo backend y frontend, implementando entidades, repositorios, servicios, controladores, lógica de negocio y funcionalidades clave. También colaboré en la estructura visual y experiencia de usuario del sistema.",

          features: [
            "Control de acceso basado en roles",
            "Gestión de inventario",
            "Administración de medicamentos",
            "Gestión de pedidos",
            "Módulos de domicilios y vehículos",
            "Dashboard y reportes",
            "Envío masivo de correos",
            "Recuperación de contraseña",
            "Gestión de perfil de usuario",
            "Gestión de PQRS",
            "Arquitectura por capas con DTOs y mapeadores",
          ],

          technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "JPA",
            "Hibernate",
            "MySQL",
            "Maven",
            "Docker",
          ],

          demoLabel: "Ver proyecto",
          githubLabel: "Repositorio",
          demoUrl: "#",
          githubUrl: "https://github.com/MarianaBarretoCas",
        },
        {
          title: "StatusCake Monitoring Flow",
          type: "Automatización de monitoreo y reportes",
          status: "Completado",
          image: "/images/projects/project-2.png",

          shortDescription:
            "Flujo automatizado para procesar alertas de StatusCake, registrar eventos de caída y recuperación, calcular duración de incidentes y generar reportes en Excel.",

          problem:
            "El monitoreo de servicios generaba alertas por correo, pero la información quedaba dispersa y era difícil consolidar caídas, recuperaciones, duración de incidentes, motivos y servicios afectados en un reporte operativo.",

          solution:
            "Diseñé un flujo en n8n que lee notificaciones de StatusCake, identifica eventos DOWN y UP, extrae datos clave, relaciona caídas con recuperaciones y actualiza automáticamente un archivo de seguimiento con log detallado y resumen de incidentes.",

          role: "Diseñé la lógica del flujo, estructuré el procesamiento de alertas, definí las reglas para clasificar eventos, calculé tiempos de indisponibilidad y organicé la información para generar reportes claros y reutilizables.",

          features: [
            "Lectura automática de alertas por correo",
            "Clasificación de eventos DOWN y UP",
            "Extracción de servicio, estado, hora, región y motivo",
            "Relación entre caída y recuperación",
            "Cálculo de duración del incidente",
            "Registro histórico de eventos",
            "Resumen de caídas por servicio",
            "Identificación de incidentes pendientes",
            "Actualización automática de archivo Excel",
          ],

          technologies: [
            "n8n",
            "StatusCake",
            "Email",
            "Excel",
            "JavaScript",
            "Automatización",
            "Webhooks",
          ],

          demoLabel: "Ver flujo",
          demoUrl: "#",
        },
      ],
    },

    experience: {
      title: "Experiencia y recorrido",
      items: [
        {
          year: "2024",
          title: "Inicio de mi Trayectoria",
          description:
            "Comencé mis estudios en Análisis y Desarrollo de Software, descubriendo mi pasión por crear soluciones digitales.",
          icon: "lucide:rocket",
        },
        {
          year: "2025",
          title: "Construcción de Proyectos",
          description:
            "Desarrollé Indrugs y otros proyectos académicos, adquiriendo experiencia en desarrollo backend y arquitectura de software.",
          icon: "lucide:code-xml",
        },
        {
          year: "2026",
          title: "Experiencia Profesional",
          description:
            "Inicié mis prácticas profesionales, trabajando en automatización de procesos, flujos de monitoreo e integración de sistemas.",
          icon: "lucide:briefcase-business",
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
    },

    footer: {
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },
};
