import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      about: 'Acerca de mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
      // Agrega más traducciones aquí
    },
  },
  en: {
    translation: {
      about: 'About me',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
  },
  fr: {
    translation: {
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contact',
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
