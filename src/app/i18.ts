// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Optional for loading translations dynamically
import LanguageDetector from 'i18next-browser-languagedetector'; // Optional, auto-detect language

// Initialize i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        translation: {
          welcome: 'Welcome',
          home: 'Home',
          yogacontent: 'Yoga Content',
          pdfs: 'pdfs',
          links: 'Links',
          generatepdf: 'Generate New Pdf',
          contact: 'Contact',

          // Add your English translations here
        },
      },
      np: {
        translation: {
          welcome: 'स्वागत छ',
          home: 'घर',
          yogacontent: 'योग सामग्री',
          pdfs: 'pdfs',
          links: 'लिनक्सहरु',
          generatepdf: 'Generate New Pdf',
          contact: 'Contact',
          // Add your Nepali translations here
        },
      },
      fi: {
        translation: {
          welcome: 'Tervetuloa',
          home: 'Koti',
          yogacontent: 'Jooga Sisältö',
          pdfs: 'pdfs',
          links: 'linkki',
          generatepdf: 'Generate New Pdf',
          contact: 'Contact',
          // Add your Finnish translations here
        },
      },
    },
  });

export default i18n;
