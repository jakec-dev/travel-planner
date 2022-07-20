const SERVER_URL = process.env.API_URL;

const getItemsFromDatabase = async (itemIds) => {
  let endpoint = "";
  if (typeof itemIds === "number") {
    endpoint = `/${itemIds}`;
  }
  const result = await fetch(`${SERVER_URL}/items${endpoint}}`).then((res) =>
    res.json()
  );
  return result;
};

const createItemInDatabase = async (newItem) => {
  const result = await fetch(`${SERVER_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  }).then((res) => res.json());
  return result;
};

const updateItemInDatabase = async (modifiedItem) => {
  const result = await fetch(`${SERVER_URL}/items`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedItem),
  }).then((res) => res.json());
  return result;
};

const deleteItemInDatabase = async (itemId) => {
  const result = await fetch(`${SERVER_URL}/items/${itemId}`, {
    method: "DELETE",
  }).then((res) => res.json());
  return result;
};

export {
  getItemsFromDatabase,
  createItemInDatabase,
  updateItemInDatabase,
  deleteItemInDatabase,
};
