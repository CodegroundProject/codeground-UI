// action - state management
import * as actionTypes from "../actions/actionsTypes";

export const initialState = {
  isOpen: [], // for active default menu
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  opened: true,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.TEMPLATE_MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    case actionTypes.TEMPLATE_SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };
    // case actionTypes.SET_FONT_FAMILY:
    //     return {
    //         ...state,
    //         fontFamily: action.fontFamily
    //     };
    // case actionTypes.SET_BORDER_RADIUS:
    //     return {
    //         ...state,
    //         borderRadius: action.borderRadius
    //     };
    default:
      return state;
  }
};

export default customizationReducer;
