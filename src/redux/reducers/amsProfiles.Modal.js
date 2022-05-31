import {
  GET_ALL_AMS_LOADING,
  GET_ALL_AMS_SUCCESS,
  GET_ALL_AMS_ERROR,
} from "../actions/actionsTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function amsProfilesModal(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_AMS_LOADING:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case GET_ALL_AMS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      };
    case GET_ALL_AMS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
