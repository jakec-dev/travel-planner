import {
  addItem,
  deleteItemWithId,
  getItems,
  getItemWithId,
  updateItem,
} from "../services/itemsService";
import {
  validateExistingItem,
  validateNewItem,
} from "../validation/itemsValidation";
import { validateNumber } from "../validation/dataValidation";

const get = async () => {
  try {
    const resp = await getItems();
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

const add = async (newItem) => {
  validateNewItem(newItem);
  try {
    const resp = await addItem(newItem);
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

const update = async (modifiedItem) => {
  validateExistingItem(modifiedItem);
  try {
    const resp = await updateItem(modifiedItem);
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

const getById = async (itemId) => {
  validateNumber(itemId);
  try {
    const resp = await getItemWithId(itemId);
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

const deleteById = async (itemId) => {
  validateNumber(itemId);
  try {
    const resp = await deleteItemWithId(itemId);
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

export { get, add, update, getById, deleteById };
