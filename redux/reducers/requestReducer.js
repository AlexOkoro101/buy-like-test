import { REQUEST_SUCCESS, REQUEST_ERROR, SET_REQUEST } from '../actions/types';

const initialState = {
  vehicle: null,
  loading: false,
  error: null,
  success: null,
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        success: true,
        vehicle: action.payload,
      };
    default:
      return state;
  }
};


export default requestReducer;