import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import BackEnd from "i18next-http-backend";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(BackEnd)
  .init({
    debug: true,
    supportedLngs: ["en", "uk"],
    fallbackLng: "en",
    backend: {
      loadPath:
        "https://family-apiary.herokuapp.com/api/translations/{{lng}}",
    },
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "localStorage",
        "sessionStorage",
        "navigator",
        "querystring",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });
export default i18next;
