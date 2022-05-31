// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
  GET_LOCATAIRES_REQUESTS_ERROR,
  GET_LOCATAIRES_REQUESTS_LOADING,
  GET_LOCATAIRES_REQUESTS_SUCCESS,
  POST_LOGIN_ERROR,
  POST_LOGIN_LOADING,
  POST_LOGIN_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function locatairesRequestsModal(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATAIRES_REQUESTS_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_LOCATAIRES_REQUESTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case GET_LOCATAIRES_REQUESTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
