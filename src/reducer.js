import {
  INSTANCES_FETCH_SUCCESS,
  SEARCH_VALUE_CHANGE,
} from './actions';

const initialState = {
  instances: [],
  searchValue: '',
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
  default:
    return state;
  }
};
