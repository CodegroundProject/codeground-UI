// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_THE_CHALLENGE_SUCCESS,
    GET_THE_CHALLENGE_LOADING,
    GET_THE_CHALLENGE_ERROR, SOCKET_UPDATE_TIMER, SOCKET_UPDATE_LEADERBOARD
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
    timer : null,
    leaderboard: [
        {
            rank : 1,
            user_id : "Metidji Sid Ahmed",
            score : 13234
        },
        {
            rank : 1,
            user_id : "Dhiaa",
            score : 12451
        }
    ]
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
        case SOCKET_UPDATE_TIMER:
            return {
                ...state,
                timer : action.payload
            }
        case SOCKET_UPDATE_LEADERBOARD:
            return {
                ...state,
                leaderboard: action.payload
            }
        default:
            return state;
    }
}
