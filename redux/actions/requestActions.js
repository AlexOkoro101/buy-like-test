import { REQUEST_ERROR, REQUEST_SUCCESS, SET_REQUEST } from './types';
import axios from 'axios';

export const requestVehicle = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=3'
    );
    dispatch({ type: REQUEST_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
  
