// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
  GET_ALL_POSTS_LOADING,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_ERROR,
  POST_POST_LOADING,
  POST_POST_SUCCESS,
  POST_POST_ERROR,
} from "../actions/actionsTypes";

const initialState = {
  data: [],
  // data: {
  //     champ1 :"blabla",
  //     champ2 : "blabla"
  // }
  loading: false,
  // Message d'erreur
  error: null,
};

export default function postsReducerModal(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS_LOADING || POST_POST_LOADING:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: true,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    case GET_ALL_POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case POST_POST_SUCCESS:
      const newData = [...state.data];
      newData.push({ userId: 1, id: 999, title: "title", body: "body" });
      // newData.push(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false,
        data: newData,
      };
    default:
      return state;
  }
}
