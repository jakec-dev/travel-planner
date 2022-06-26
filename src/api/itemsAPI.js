const serverURL = process.env.API_URL;

const createItem = async (newItem) => {
  const data = await fetch(`${serverURL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  }).then((resp) => resp.json());
  return data;
};

const deleteItem = async (id) => {
  const data = await fetch(`${serverURL}/items/${id}`, {
    method: "DELETE",
  }).then((resp) => resp.json());
  return data;
};

const readItem = async (itemId) => {
  const data = await fetch(`${serverURL}/items/${itemId}`).then((resp) =>
    resp.json()
  );
  return data;
};

const readItems = async () => {
  const data = await fetch(`${serverURL}/items`).then((resp) => resp.json());
  return data;
};

const updateItem = async (modifiedItem) => {
  const data = await fetch(`${serverURL}/items`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedItem),
  }).then((resp) => resp.json());
  return data;
};

export { createItem, deleteItem, readItem, readItems, updateItem };
