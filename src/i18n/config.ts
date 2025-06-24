import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        about: 'Acerca de mí',
        skills: 'Habilidades',
        experience: 'Experiencia',
        projects: 'Proyectos',
        contact: 'Contacto',
      },
      hero: {
        greeting: '¡Hola! 👋 Soy',
        role: 'Desarrollador Full Stack',
        description: 'Apasionado por crear soluciones web innovadoras y eficientes',
        downloadCV: 'Descargar CV'
      },
      about: {
        title: 'Acerca de mí',
        description: 'Soy un desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web modernas. Me especializo en tecnologías como React, Node.js, y bases de datos SQL/NoSQL. Disfruto creando soluciones eficientes y manteniendo código limpio y escalable.',
      },
      skills: {
        title: 'Habilidades',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bases de Datos',
        tools: 'Herramientas',
      },
      experience: {
        title: 'Experiencia',
        years: 'años',
        present: 'Presente',
        roles: {
          fullstack: 'Desarrollador Full Stack',
          backend: 'Desarrollador Backend',
          frontend: 'Desarrollador Frontend'
        }
      },
      projects: {
        title: 'Proyectos',
        viewProject: 'Ver Proyecto',
        sourceCode: 'Código Fuente',
        university: {
          title: 'Portal Universitario',
          description: 'Plataforma web para la gestión de recursos universitarios, incluyendo inscripción de materias, consulta de notas y comunicación entre profesores y estudiantes.'
        }
      },
      contact: {
        title: '¡Colaboremos!',
        infoTitle: 'Información de contacto',
        name: 'Nombre/Empresa',
        namePlaceholder: 'John Doe',
        email: 'Correo',
        emailPlaceholder: 'ejemplo@correo.com',
        emailLabel: 'Correo electrónico',
        message: 'Mensaje',
        messagePlaceholder: 'Déjame un bonito mensaje :)',
        send: 'Enviar',
        success: 'Mensaje enviado con éxito',
        error: 'Error al enviar el mensaje',
        requiredFields: 'Los campos marcados con * son obligatorios',
        location: 'Ubicación',
        validation: {
          nameRequired: 'El nombre es requerido',
          emailRequired: 'El correo es requerido',
          emailInvalid: 'El correo no es válido',
          messageRequired: 'El mensaje es requerido'
        }
      }
    },
  },
  en: {
    translation: {
      nav: {
        about: 'About me',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Hi there! 👋 I\'m',
        role: 'Full Stack Developer',
        description: 'Passionate about creating innovative and efficient web solutions',
        downloadCV: 'Download CV'
      },
      about: {
        title: 'About me',
        description: 'I\'m a Full Stack developer with experience in modern web application development. I specialize in technologies like React, Node.js, and SQL/NoSQL databases. I enjoy creating efficient solutions and maintaining clean, scalable code.',
      },
      skills: {
        title: 'Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        tools: 'Tools',
      },
      experience: {
        title: 'Experience',
        years: 'years',
        present: 'Present',
        roles: {
          fullstack: 'Full Stack Developer',
          backend: 'Backend Developer',
          frontend: 'Frontend Developer'
        }
      },
      projects: {
        title: 'Projects',
        viewProject: 'View Project',
        sourceCode: 'Source Code',
        university: {
          title: 'University Portal',
          description: 'Web platform for managing university resources, including course registration, grade consultation, and communication between professors and students.'
        }
      },
      contact: {
        title: "Let's Collaborate!",
        infoTitle: 'Contact Information',
        name: 'Name/Company',
        namePlaceholder: 'John Doe',
        email: 'Email',
        emailPlaceholder: 'example@email.com',
        emailLabel: 'Email address',
        message: 'Message',
        messagePlaceholder: 'Leave me a nice message :)',
        send: 'Send',
        success: 'Message sent successfully',
        error: 'Error sending message',
        requiredFields: 'Fields marked with * are required',
        location: 'Location',
        validation: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Email is not valid',
          messageRequired: 'Message is required'
        }
      },
    },
  },
  fr: {
    translation: {
      nav: {
        about: 'À propos',
        skills: 'Compétences',
        experience: 'Expérience',
        projects: 'Projets',
        contact: 'Contact',
      },
      hero: {
        greeting: 'Salut! 👋 Je suis',
        role: 'Développeur Full Stack',
        description: 'Passionné par la création de solutions web innovantes et efficaces',
        downloadCV: 'Télécharger CV'
      },
      about: {
        title: 'À propos',
        description: 'Je suis un développeur Full Stack expérimenté dans le développement d\'applications web modernes. Je me spécialise dans les technologies comme React, Node.js et les bases de données SQL/NoSQL. J\'aime créer des solutions efficaces et maintenir un code propre et évolutif.',
      },
      skills: {
        title: 'Compétences',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bases de données',
        tools: 'Outils',
      },
      experience: {
        title: 'Expérience',
        years: 'ans',
        present: 'Présent',
        roles: {
          fullstack: 'Développeur Full Stack',
          backend: 'Développeur Backend',
          frontend: 'Développeur Frontend'
        }
      },
      projects: {
        title: 'Projets',
        viewProject: 'Voir le projet',
        sourceCode: 'Code source',
        university: {
          title: 'Portail Universitaire',
          description: 'Plateforme web pour la gestion des ressources universitaires, comprenant l\'inscription aux cours, la consultation des notes et la communication entre professeurs et étudiants.'
        }
      },
      contact: {
        title: 'Collaborons !',
        infoTitle: 'Informations de contact',
        name: 'Nom/Entreprise',
        namePlaceholder: 'John Doe',
        email: 'Email',
        emailPlaceholder: 'exemple@email.com',
        emailLabel: 'Adresse email',
        message: 'Message',
        messagePlaceholder: 'Laissez-moi un joli message :)',
        send: 'Envoyer',
        success: 'Message envoyé avec succès',
        error: 'Erreur lors de l\'envoi du message',
        requiredFields: 'Les champs marqués d\'un * sont obligatoires',
        location: 'Localisation',
        validation: {
          nameRequired: 'Le nom est requis',
          emailRequired: 'L\'email est requis',
          emailInvalid: 'L\'email n\'est pas valide',
          messageRequired: 'Le message est requis'
        }
      },
    },
  },
};

i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
