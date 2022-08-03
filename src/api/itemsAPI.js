import * as apiUtils from "./apiUtils";

const getItems = () => apiUtils.sendRequest("/items");

const addItem = (newItem) =>
  apiUtils.sendRequest("/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  });

const updateItem = (modifiedItem) =>
  apiUtils.sendRequest("/items", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedItem),
  });

const getItemById = (itemId) => apiUtils.sendRequest(`/items/${itemId}`);

const deleteItemById = (itemId) =>
  apiUtils.sendRequest(`/items/${itemId}`, { method: "DELETE" });

export { getItems, addItem, updateItem, getItemById, deleteItemById };
