const sendRequest = async (endpoint, options) => {
  try {
    const SERVER_URL = process.env.API_URL;
    const resp = await fetch(`${SERVER_URL}${endpoint}`, options).then((res) =>
      res.json()
    );
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

const getItems = () => sendRequest("/items");

const addItem = (newItem) =>
  sendRequest("/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newItem),
  });

const updateItem = async (modifiedItem) =>
  sendRequest("/items", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(modifiedItem),
  });

const getItemById = async (itemId) => sendRequest(`/items/${itemId}`);

const deleteItemById = async (itemId) =>
  sendRequest(`/items/${itemId}`, { method: "DELETE" });

export {
  getItems,
  addItem,
  updateItem,
  getItemById,
  deleteItemById,
  sendRequest,
};
