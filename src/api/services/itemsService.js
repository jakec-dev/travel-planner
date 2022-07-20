import {
  createItemInDatabase,
  getItemsFromDatabase,
  updateItemInDatabase,
} from "../data/itemsData";

const getItems = async () => getItemsFromDatabase();

const addItem = async (newItem) => createItemInDatabase(newItem);

const updateItem = async (modifiedItem) => updateItemInDatabase(modifiedItem);

const getItemWithId = async (itemId) => getItemsFromDatabase(itemId);

const deleteItemWithId = async (itemId) => deleteItemWithId(itemId);

export { getItems, addItem, updateItem, getItemWithId, deleteItemWithId };
