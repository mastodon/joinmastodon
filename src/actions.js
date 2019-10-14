import axios from 'axios';

export const INSTANCES_FETCH_SUCCESS = 'INSTANCES_FETCH_SUCCESS';
export const LOCALE_CHANGE           = 'LOCALE_CHANGE';
export const FILTER_LANGUAGE_CHANGE  = 'FILTER_LANGUAGE_CHANGE';
export const FILTER_CATEGORY_CHANGE  = 'FILTER_CATEGORY_CHANGE';
export const LANGUAGES_FETCH_SUCCESS = 'LANGUAGES_FETCH_SUCCESS';

export function fetchInstances() {
  return (dispatch, getState) => {
    const { category, language } = getState().filter;
    const params = {};

    if (category !== '') {
      params.category = category.split('-')[0];
    }

    if (language !== '') {
      params.language = language;
    }

    axios.get('https://api.joinmastodon.org/servers', { params })
         .then(({ data }) => dispatch(fetchInstancesSuccess(data)));
  };
};

export function fetchInstancesSuccess(data) {
  return {
    type: INSTANCES_FETCH_SUCCESS,
    data,
  };
};

export function changeFilterCategory(data) {
  return {
    type: FILTER_CATEGORY_CHANGE,
    data,
  };
};

export function changeLocale(data) {
  return {
    type: LOCALE_CHANGE,
    data,
  };
};

export function changeFilterLanguage(data) {
  return {
    type: FILTER_LANGUAGE_CHANGE,
    data,
  };
};

export function fetchLanguages() {
  return (dispatch, getState) => {
    const { category } = getState().filter;
    const params = {};

    if (category !== '') {
      params.category = category.split('-')[0];
    }

    axios.get('https://api.joinmastodon.org/languages', { params })
         .then(({ data }) => dispatch(fetchLanguagesSuccess(data)));
  };
};

export function fetchLanguagesSuccess(data) {
  return {
    type: LANGUAGES_FETCH_SUCCESS,
    data,
  };
};
