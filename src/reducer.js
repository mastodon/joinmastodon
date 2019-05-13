import {
  INSTANCES_FETCH_SUCCESS,
  LOCALE_CHANGE,
  FILTER_CATEGORY_CHANGE,
  FILTER_LANGUAGE_CHANGE,
} from './actions';

const supportedLocales = [
  'ar',
  'cs',
  'cy',
  'de',
  'en',
  'es',
  'fr',
  'ja',
  'ko',
  'nl-NL',
  'pl',
  'pt-BR',
  'sq',
  'tr',
  'zh',
  'zh-TW',
];

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

  filter: {
    category: '',
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
  default:
    return state;
  }
};
