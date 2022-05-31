// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    WEBSOCKET_FETCH_ALL_CARS, WEBSOCKET_OBSERVE_CAR_DATA
} from "../actions/actionsTypes";

const initialState = {
    data: [],
    error: null,
};

export default function carsViewReducerModal(state = initialState, action) {
    switch (action.type) {

        case WEBSOCKET_FETCH_ALL_CARS:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        // Update a car data
        case WEBSOCKET_OBSERVE_CAR_DATA:
            return {
                ...state,
                data: state.data.map(car=>car.matricule!== action.payload.matricule ? car : action.payload ),
                error: null,
                loading: false,
            };
        // case GET_ALL_POSTS_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         loading: false,
        //     };
        default:
            return state;
    }
}
