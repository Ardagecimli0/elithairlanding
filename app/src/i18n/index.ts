// i18n system with slug-based language detection
import tr from './locales/tr.json';
import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import it from './locales/it.json';
import es from './locales/es.json';
import ru from './locales/ru.json';
import pl from './locales/pl.json';

const resources: Record<string, any> = {
  tr,
  en,
  de,
  fr,
  it,
  es,
  ru,
  pl,
};

// Slug → language mapping
export const SLUG_TO_LANG: Record<string, string> = {
  'sac-ekimi': 'tr',
  'hair-transplant': 'en',
  'haar-transplantation': 'de',
  'greffe-de-cheveux': 'fr',
  'trapianto-di-capelli': 'it',
  'trasplante-capilar': 'es',
  'пересадка-волос': 'ru',
  'przeszczep-wlosow': 'pl',
};

// Language → slug mapping (reverse)
export const LANG_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_TO_LANG).map(([slug, lang]) => [lang, slug])
);

let currentLang = 'tr';

const i18n = {
  t: (key: string) => {
    const keys = key.split('.');
    let value: any = resources[currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  },
  changeLanguage: (lang: string) => {
    if (resources[lang]) {
      currentLang = lang;
    }
  },
  get language() {
    return currentLang;
  },
};

export const setLanguageBySlug = (slug: string) => {
  const lang = SLUG_TO_LANG[slug];
  if (lang) {
    i18n.changeLanguage(lang);
    return lang;
  }
  // Default to Turkish
  i18n.changeLanguage('tr');
  return 'tr';
};

export const useTranslation = () => {
  return {
    t: i18n.t,
    i18n: {
      changeLanguage: i18n.changeLanguage,
      language: currentLang,
    },
  };
};

export const I18nextProvider = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default i18n;
