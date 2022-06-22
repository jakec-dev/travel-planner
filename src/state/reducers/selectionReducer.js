import * as SELECTION_ACTION_TYPES from "../actions/selectionActionTypes";

export const selectionInitialState = [];

// eslint-disable-next-line default-param-last
export const selectionReducer = (state = selectionInitialState, action) => {
  switch (action.type) {
    case SELECTION_ACTION_TYPES.CLEAR_ALL:
      return { ...state, selectedItems: selectionInitialState };

    case SELECTION_ACTION_TYPES.SELECT_ALL: {
      return { ...state, selectedItems: action.payload.map((item) => item.id) };
    }

    case SELECTION_ACTION_TYPES.TOGGLE_ITEM: {
      const itemIndex = state.selectedItems.findIndex(
        (selectedItem) => selectedItem === action.payload
      );
      if (itemIndex === -1) {
        return {
          ...state,
          selectedItems: [...state.selectedItems, action.payload],
        };
      }
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          (selectedItem) => selectedItem !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};
