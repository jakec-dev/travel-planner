import * as SELECTION_ACTION_TYPES from "./selectionActionTypes";

const itemsActions = (dispatch) => {
  const clearAll = () => {
    dispatch({
      type: SELECTION_ACTION_TYPES.CLEAR_ALL,
    });
  };

  const deselectItem = (itemId) => {
    dispatch({
      type: SELECTION_ACTION_TYPES.DESELECT_ITEM,
      payload: itemId,
    });
  };

  const selectAll = (items) => {
    dispatch({
      type: SELECTION_ACTION_TYPES.SELECT_ALL,
      payload: items,
    });
  };

  const toggleItem = (itemId) => {
    dispatch({
      type: SELECTION_ACTION_TYPES.TOGGLE_ITEM,
      payload: itemId,
    });
  };

  return { clearAll, deselectItem, selectAll, toggleItem };
};

export default itemsActions;
