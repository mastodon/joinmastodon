import axios from 'axios';

const INSTANCES_API_TOKEN = 'JEzPe4Ff5c5WA7k4IP5tx0rJMDzEMFxhmXXZvBG4LFSF0Almf0ewfBAKtbPsqMWx1E0hYe6Wy2Zx6HJHP2LmSwUvKneZVOOnelmFaGB7yNeoCvWUxfM0WyVL0FODQPm7';

export const INSTANCES_FETCH_SUCCESS = 'INSTANCES_FETCH_SUCCESS';
export const SEARCH_VALUE_CHANGE     = 'SEARCH_VALUE_CHANGE';
export const LOCALE_CHANGE           = 'LOCALE_CHANGE';

export function fetchInstances() {
  return (dispatch, getState) => {
    if (getState().instances.length > 0) {
      return;
    }

    axios('https://instances.social/api/1.0/instances/list?count=0', {
        headers: {'Authorization': `Bearer ${INSTANCES_API_TOKEN}`},
    }).then(response => dispatch(fetchInstancesSuccess(response.data.instances)));
  };
};

export function fetchInstancesSuccess(data) {
  return {
    type: INSTANCES_FETCH_SUCCESS,
    data,
  };
};

export function changeSearchValue(data) {
  return {
    type: SEARCH_VALUE_CHANGE,
    data,
  };
};

export function changeLocale(data) {
  return {
    type: LOCALE_CHANGE,
    data,
  };
};
