import {
  INSTANCES_FETCH_REQUEST,
  INSTANCES_FETCH_SUCCESS,
  INSTANCES_FETCH_FAIL,
  INSTANCES_SHOW_ALL,
  LOCALE_CHANGE,
  FILTER_CATEGORY_CHANGE,
  FILTER_LANGUAGE_CHANGE,
  LANGUAGES_FETCH_SUCCESS,
  CATEGORIES_FETCH_SUCCESS,
} from './actions';

const supportedLanguages = [
  { locale: 'ar', language: 'العربية' },
  { locale: 'ca', language: 'Català' },
  { locale: 'cs', language: 'Čeština' },
  { locale: 'cy', language: 'Cymraeg' },
  { locale: 'de', language: 'Deutsch' },
  { locale: 'en', language: 'English' },
  { locale: 'es', language: 'Español' },
  { locale: 'eu', language: 'Euskara' },
  //{ locale: 'fi', language: 'Suomi' },
  { locale: 'fr', language: 'Français' },
  //{ locale: 'he', language: 'עברית' },
  { locale: 'it', language: 'Italiano' },
  { locale: 'ja', language: '日本語' },
  { locale: 'ko', language: '한국어' },
  { locale: 'nl-NL', language: 'Nederlands' },
  //{ locale: 'no', language: 'Norsk' },
  { locale: 'pl', language: 'Polski' },
  { locale: 'pt-BR', language: 'Português' },
  { locale: 'ru', language: 'Русский' },
  //{ locale: 'sk', language: 'Slovenčina' },
  { locale: 'sq', language: 'Shqip' },
  //{ locale: 'sv', language: 'Svenska' },
  { locale: 'tr', language: 'Türkçe' },
  //{ locale: 'uk', language: 'Українська' },
  { locale: 'zh', language: '中文' },
  { locale: 'zh-TW', language: '繁體中文（臺灣' },
];

const supportedLocales = supportedLanguages.map(x => x.locale);

const initialLocale = () => {
  if (window.URLSearchParams) {
    const params = new URLSearchParams(window.location.search);

    const lang = params.get('lang');

    if (supportedLocales.indexOf(lang) !== -1) {
      return lang;
    }
  }

  const lang = navigator.language.split('-')[0];

  if (supportedLocales.indexOf(navigator.language) !== -1) {
    return navigator.language;
  } else if (supportedLocales.indexOf(lang) !== -1) {
    return lang;
  } else {
    return 'en';
  }
};

const initialState = {
  supportedLanguages,

  locale: initialLocale(),

  loading: false,
  instances: [],
  languages: [],
  categories: [],

  filter: {
    category: 'general',
    language: '',
    showAll: false,
  },

  selectedLanguageData: null,
};

const DUNBAR = Math.log(800);

const sortByDunbarsNumber = instances => instances.sort((a, b) => {
  const aa = Math.abs(DUNBAR - Math.log(a.last_week_users));
  const bb = Math.abs(DUNBAR - Math.log(b.last_week_users));

  return aa > bb ? 1 : (aa < bb ? -1 : 0);
});

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case LOCALE_CHANGE:
    return { ...state, locale: action.data };
  case INSTANCES_FETCH_REQUEST:
    return { ...state, loading: true };
  case INSTANCES_FETCH_SUCCESS:
    return { ...state, instances: sortByDunbarsNumber(action.data), loading: false };
  case INSTANCES_FETCH_FAIL:
    return { ...state, loading: false };
  case FILTER_CATEGORY_CHANGE:
    return { ...state, instances: [], filter: { ...state.filter, category: action.data, showAll: false } };
  case FILTER_LANGUAGE_CHANGE:
    return { ...state, filter: { ...state.filter, language: action.data, showAll: false }, selectedLanguageData: state.languages.find(x => x.locale === action.data) || null };
  case LANGUAGES_FETCH_SUCCESS:
    return { ...state, languages: action.data };
  case CATEGORIES_FETCH_SUCCESS:
    return { ...state, categories: action.data };
  case INSTANCES_SHOW_ALL:
    return { ...state, filter: { ...state.filter, showAll: true } };
  default:
    return state;
  }
};
