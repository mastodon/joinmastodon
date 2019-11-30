import {
  INSTANCES_FETCH_SUCCESS,
  LOCALE_CHANGE,
  FILTER_CATEGORY_CHANGE,
  FILTER_LANGUAGE_CHANGE,
  LANGUAGES_FETCH_SUCCESS,
} from './actions';

const defaultLanguages = [
  { locale: 'ar', language: 'العربية' },
  { locale: 'ca', language: 'Català' },
  { locale: 'cs', language: 'Čeština' },
  { locale: 'cy', language: 'Cymraeg' },
  { locale: 'de', language: 'Deutsch' },
  { locale: 'en', language: 'English' },
  { locale: 'es', language: 'Español' },
  { locale: 'eu', language: 'Euskara' },
  { locale: 'fi', language: 'Suomi' },
  { locale: 'fr', language: 'Français' },
  { locale: 'he', language: 'עברית' },
  { locale: 'it', language: 'Italiano' },
  { locale: 'ja', language: '日本語' },
  { locale: 'ko', language: '한국어' },
  { locale: 'nl', language: 'Nederlands' },
  { locale: 'no', language: 'Norsk' },
  { locale: 'pl', language: 'Polski' },
  { locale: 'pt', language: 'Português' },
  { locale: 'ru', language: 'Русский' },
  { locale: 'sk', language: 'Slovenčina' },
  { locale: 'sq', language: 'Shqip' },
  { locale: 'sv', language: 'Svenska' },
  { locale: 'tr', language: 'Türkçe' },
  { locale: 'uk', language: 'Українська' },
  { locale: 'zh', language: '中文' },
];

const supportedLocales = [];

for (let i = 0, l = defaultLanguages.length; i < l; i++) {
  supportedLocales.push(defaultLanguages[i].locale);
}

const initialLocale = () => {
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
  locale: initialLocale(),

  instances: [],
  languages: defaultLanguages,

  filter: {
    category: 'general',
    language: '',
  },
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
  case INSTANCES_FETCH_SUCCESS:
    return { ...state, instances: sortByDunbarsNumber(action.data) };
  case FILTER_CATEGORY_CHANGE:
    return { ...state, filter: { ...state.filter, category: action.data } };
  case FILTER_LANGUAGE_CHANGE:
    return { ...state, filter: { ...state.filter, language: action.data } };
  case LANGUAGES_FETCH_SUCCESS:
    return { ...state, languages: action.data };
  default:
    return state;
  }
};
