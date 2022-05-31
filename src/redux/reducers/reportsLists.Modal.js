// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_REPORTS_LISTS_SUCCESS,
    GET_REPORTS_LISTS_LOADING,
    GET_REPORTS_LISTS_ERROR
} from "../actions/actionsTypes";
import moment from "moment";

const initialState = {
    data: [
        {createdAt : moment().format('L') , name : "Rapport1.pdf" , downloadLink : `http://www.africau.edu/images/default/sample.pdf`  },
        {createdAt : moment().add(-1 , 'd').format('L') , name : "Rapport2.pdf" , downloadLink : `http://www.africau.edu/images/default/sample.pdf`  },
        {createdAt : moment().add(-2 , 'd').format('L') , name : "Rapport3.pdf" , downloadLink : `http://www.africau.edu/images/default/sample.pdf`  },
    ],
    loading: false,
    error: null,
};

export default function reportsListsModal(state = initialState, action) {
    switch (action.type) {
        case GET_REPORTS_LISTS_LOADING:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case GET_REPORTS_LISTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        case GET_REPORTS_LISTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
