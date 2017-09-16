import {
  INSTANCES_FETCH_SUCCESS,
  SEARCH_VALUE_CHANGE,
  LOCALE_CHANGE,
} from './actions';

const supportedLocales = ['en', 'fr', 'pl'];

const initialLocale = () => {
  const lang = navigator.language.split('-')[0];

  if (supportedLocales.indexOf(lang) !== -1) {
    return lang;
  } else {
    return 'en';
  }
};

const initialState = {
  instances: [],
  searchValue: '',
  locale: initialLocale(),
};

const createSearchable = item => {
  let searchable = [];

  searchable.push(item.name);

  if (item.info) {
    searchable.push(item.info.theme || 'general');
  }

  return { ...item, searchable: searchable.join(' ').toLowerCase() };
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case INSTANCES_FETCH_SUCCESS:
    return { ...state, instances: action.data.map(createSearchable) };
  case SEARCH_VALUE_CHANGE:
    return { ...state, searchValue: action.data };
  case LOCALE_CHANGE:
    return { ...state, locale: action.data };
  default:
    return state;
  }
};
