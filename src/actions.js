import axios from 'axios';

const INSTANCES_API_TOKEN = 'JEzPe4Ff5c5WA7k4IP5tx0rJMDzEMFxhmXXZvBG4LFSF0Almf0ewfBAKtbPsqMWx1E0hYe6Wy2Zx6HJHP2LmSwUvKneZVOOnelmFaGB7yNeoCvWUxfM0WyVL0FODQPm7';

export const INSTANCES_FETCH_SUCCESS = 'INSTANCES_FETCH_SUCCESS';
export const SEARCH_VALUE_CHANGE     = 'SEARCH_VALUE_CHANGE';
export const LOCALE_CHANGE           = 'LOCALE_CHANGE';
export const INSTANCES_LOCALE_CHANGE = 'INSTANCES_LOCALE_CHANGE';

const shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex   = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue      = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex]  = temporaryValue;
  }

  return array;
};

export function fetchInstances() {
  return (dispatch, getState) => {
    if (getState().instances.length > 0) {
      return;
    }

    const headers = { 'Authorization': `Bearer ${INSTANCES_API_TOKEN}` };
    const params  = { count: 0, include_down: false, include_closed: false, sort_by: 'users', sort_order: 'desc', supported_features: 'mstdn_custom_emojis' };

    axios.get('https://instances.social/api/1.0/instances/list', { headers, params }).then(res => {
      let { instances } = res.data;
      shuffle(instances);
      dispatch(fetchInstancesSuccess(instances));
    });
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

export function changeInstancesLocale(data) {
  return {
    type: INSTANCES_LOCALE_CHANGE,
    data,
  };
};
