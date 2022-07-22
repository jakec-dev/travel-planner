import {
  createItemInDatabase,
  getItemsFromDatabase,
  updateItemInDatabase,
  deleteItemInDatabase,
} from "../data/itemsData";

const getItems = async () => getItemsFromDatabase();

const addItem = async (newItem) => createItemInDatabase(newItem);

const updateItem = async (modifiedItem) => updateItemInDatabase(modifiedItem);

const getItemWithId = async (itemId) => getItemsFromDatabase(itemId);

const deleteItemWithId = async (itemId) => deleteItemInDatabase(itemId);

export { getItems, addItem, updateItem, getItemWithId, deleteItemWithId };
