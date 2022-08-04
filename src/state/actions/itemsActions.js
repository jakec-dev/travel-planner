import * as ITEMS_ACTION_TYPES from "./itemsActionTypes";

const itemsActions = (dispatch) => {
  const addItem = (newItem) => {
    dispatch({
      type: ITEMS_ACTION_TYPES.ADD_ITEM,
      payload: newItem,
    });
  };

  const deleteItem = (itemId) => {
    dispatch({
      type: ITEMS_ACTION_TYPES.DELETE_ITEM,
      payload: itemId,
    });
  };

  const setItems = (items) => {
    dispatch({
      type: ITEMS_ACTION_TYPES.SET_ITEMS,
      payload: items,
    });
  };

  const updateItem = (modifiedItem) => {
    dispatch({
      type: ITEMS_ACTION_TYPES.UPDATE_ITEM,
      payload: modifiedItem,
    });
  };

  return { addItem, deleteItem, setItems, updateItem };
};

export default itemsActions;
