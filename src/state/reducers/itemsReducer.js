import * as ITEMS_ACTION_TYPES from "../actions/itemsActionTypes";

export const itemsInitialState = [];

// eslint-disable-next-line default-param-last
export const itemsReducer = (state = { items: itemsInitialState }, action) => {
  if (!Object.prototype.hasOwnProperty.call(state, "items")) {
    throw new Error("Initial state is incorrect format");
  }
  switch (action.type) {
    case ITEMS_ACTION_TYPES.ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };

    case ITEMS_ACTION_TYPES.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case ITEMS_ACTION_TYPES.SET_ITEMS:
      return { ...state, items: action.payload };

    case ITEMS_ACTION_TYPES.UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};
