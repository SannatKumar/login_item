import "i18next";

// Define translation keys (modify based on your JSON structure)
interface TranslationKeys {
  welcome: string;
  rajkumar: string;
  language: string;
  home: string;
  yogacontent: string;
  pdfs: string;
  links: string;
  generatepdf: string;
  contact: string;
  images: string;
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      translation: TranslationKeys;
      welcome: string;
      rajkumar: string;
      language: string;
      home: string;
      yogacontent: string;
      pdfs: string;
      links: string;
      generatepdf: string;
      contact: string;
      images: string;
    };
  }
}