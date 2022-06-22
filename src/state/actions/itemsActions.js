import * as ITEMS_ACTION_TYPES from "./itemsActionTypes";

const itemsActions = (dispatch) => {
  const addItem = (newItem) => {
    dispatch({
      type: ITEMS_ACTION_TYPES.ADD_ITEM,
      payload: newItem,
    });
  };

  const clearItems = () => {
    dispatch({
      type: ITEMS_ACTION_TYPES.CLEAR_ITEMS,
    });
  };

  const deleteItem = (itemId) => {
    dispatch({
      type: ITEMS_ACTION_TYPES.DELETE_ITEM,
      payload: itemId,
    });
  };

  const updateItem = (modifiedItem) => {
    dispatch({
      type: ITEMS_ACTION_TYPES.UPDATE_ITEM,
      payload: modifiedItem,
    });
  };

  return { addItem, clearItems, deleteItem, updateItem };
};

export default itemsActions;
