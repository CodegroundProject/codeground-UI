// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
  GET_DECIDEURS_PROFILES_ERROR,
  GET_DECIDEURS_PROFILES_LOADING,
  GET_DECIDEURS_PROFILES_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function decideursProfilesModal(state = initialState, action) {
  switch (action.type) {
    case GET_DECIDEURS_PROFILES_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_DECIDEURS_PROFILES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      };
    case GET_DECIDEURS_PROFILES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
