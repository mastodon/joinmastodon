import axios from 'axios';

export const INSTANCES_FETCH_SUCCESS = 'INSTANCES_FETCH_SUCCESS';
export const SEARCH_VALUE_CHANGE     = 'SEARCH_VALUE_CHANGE';

export function fetchInstances() {
  return (dispatch, getState) => {
    if (getState().instances.length > 0) {
      return;
    }

    axios.get('https://instances.mastodon.xyz/instances.json')
      .then(response => dispatch(fetchInstancesSuccess(response.data)));
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
