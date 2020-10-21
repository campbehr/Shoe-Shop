import HeaderActionTypes from "./header.types";

const INITIAL_STATE = {
  hideMenu: true,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionTypes.TOGGLE_MENU_HIDDEN:
      return {
        ...state,
        hideMenu: !state.hideMenu,
      };

    default:
      return state;
  }
};

export default headerReducer;
