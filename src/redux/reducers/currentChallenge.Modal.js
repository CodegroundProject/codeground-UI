// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_THE_CHALLENGE_SUCCESS ,
    GET_THE_CHALLENGE_LOADING,
    GET_THE_CHALLENGE_ERROR
} from "../actions/actionsTypes";

const initialState = {
    data: {},
    // data: {
    //     champ1 :"blabla",
    //     champ2 : "blabla"
    // }
    loading: false,
    // Message d'erreur
    error: null,
};

export default function currentChallengeModal(state = initialState, action) {
    switch (action.type) {
        case GET_THE_CHALLENGE_LOADING:
            return {
                ...state,
                // data: action.payload,
                error: null,
                loading: true,
            };
        case GET_THE_CHALLENGE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        case GET_THE_CHALLENGE_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
