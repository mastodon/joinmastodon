import { INSTANCES_FETCH_SUCCESS } from './actions';

const initialState = {
  instances: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case INSTANCES_FETCH_SUCCESS:
    return { ...state, instances: action.data };
  default:
    return state;
  }
};
