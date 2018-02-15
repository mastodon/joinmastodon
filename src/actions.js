import axios from 'axios';

const INSTANCES_API_TOKEN = 'JEzPe4Ff5c5WA7k4IP5tx0rJMDzEMFxhmXXZvBG4LFSF0Almf0ewfBAKtbPsqMWx1E0hYe6Wy2Zx6HJHP2LmSwUvKneZVOOnelmFaGB7yNeoCvWUxfM0WyVL0FODQPm7';

export const INSTANCES_FETCH_SUCCESS = 'INSTANCES_FETCH_SUCCESS';
export const LOCALE_CHANGE           = 'LOCALE_CHANGE';
export const FILTER_LANGUAGE_CHANGE  = 'FILTER_LANGUAGE_CHANGE';
export const FILTER_CATEGORY_CHANGE  = 'FILTER_CATEGORY_CHANGE';

export function fetchInstances() {
  return (dispatch, getState) => {
    const { category, language } = getState().filter;

    const headers = { 'Authorization': `Bearer ${INSTANCES_API_TOKEN}` };

    const params = {
      count: 60,
      include_down: false,
      include_closed: false,
      min_version: '2.1.2',
      min_active_users: '10',
      category,
      sort_by: 'active_users',
      sort_order: 'desc',
    };

    if (language !== '') {
      params.language = language;
    }

    axios.get('https://instances.social/api/1.0/instances/list', { headers, params }).then(({ data }) => dispatch(fetchInstancesSuccess(data.instances)));
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
