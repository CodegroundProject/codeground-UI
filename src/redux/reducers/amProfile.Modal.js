import {
  GET_AM_LOADING,
  GET_AM_SUCCESS,
  GET_AM_ERROR,
} from "../actions/actionsTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function amProfileModal(state = initialState, action) {
  switch (action.type) {
    case GET_AM_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_AM_SUCCESS:
      return {
        ...state,
        data: action.payload.agent,
        error: null,
        loading: false,
      };
    case GET_AM_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
