import axios from 'axios';

export const INSTANCES_FETCH_REQUEST  = 'INSTANCES_FETCH_REQUEST';
export const INSTANCES_FETCH_SUCCESS  = 'INSTANCES_FETCH_SUCCESS';
export const INSTANCES_FETCH_FAIL     = 'INSTANCES_FETCH_FAIL';
export const LOCALE_CHANGE            = 'LOCALE_CHANGE';
export const FILTER_LANGUAGE_CHANGE   = 'FILTER_LANGUAGE_CHANGE';
export const FILTER_CATEGORY_CHANGE   = 'FILTER_CATEGORY_CHANGE';
export const LANGUAGES_FETCH_SUCCESS  = 'LANGUAGES_FETCH_SUCCESS';
export const CATEGORIES_FETCH_SUCCESS = 'CATEGORIES_FETCH_SUCCESS';
export const INSTANCES_SHOW_ALL       = 'INSTANCES_SHOW_ALL';

export function fetchInstances() {
  return (dispatch, getState) => {
    const { category, language } = getState().filter;
    const params = {};

    if (category && category !== '') {
      params.category = category.split('-')[0];
    }

    if (language && language !== 'null') {
      params.language = language;
    }

    dispatch(fetchInstancesRequest());

    axios.get('https://api.joinmastodon.org/servers', { params })
         .then(({ data }) => dispatch(fetchInstancesSuccess(data)))
         .catch(err => dispatch(fetchInstancesFail(err)));
  };
};

export function fetchInstancesRequest() {
  return {
    type: INSTANCES_FETCH_REQUEST,
  };
};

export function fetchInstancesSuccess(data) {
  return {
    type: INSTANCES_FETCH_SUCCESS,
    data,
  };
};

export function fetchInstancesFail(error) {
  return {
    type: INSTANCES_FETCH_FAIL,
    error,
  };
};

export function showAllInstances() {
  return {
    type: INSTANCES_SHOW_ALL,
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

export function fetchCategories() {
  return (dispatch, getState) => {
    axios.get('https://api.joinmastodon.org/categories')
         .then(({ data }) => dispatch(fetchCategoriesSuccess(data)));
  };
};

export function fetchCategoriesSuccess(data) {
  return {
    type: CATEGORIES_FETCH_SUCCESS,
    data,
  };
};
