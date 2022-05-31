import { SET_SNACKBAR_CONTENT, CLOSE_SNACKBAR } from "../actions/actionsTypes";

const initialState = {
  open: false,
  vertical: "top",
  horizontal: "right",
  text: "",
  severity: null,
};

export default function snackBarModal(state = initialState, action) {
  switch (action.type) {
    case SET_SNACKBAR_CONTENT:
      return {
        ...state,
        open: true,
        text: action.payload.text,
        severity: action.payload.severity,
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
