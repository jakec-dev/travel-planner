const serverURL = process.env.API_URL;

const createItem = async (newItem) => {
  try {
    const resp = await fetch(`${serverURL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }).then((res) => res.json());
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    console.log("RESP: " + JSON.stringify(resp.data));
    return resp.data;
  } catch (err) {
    console.log("hit err");
    throw Error(err);
  }
};

const deleteItem = async (id) => {
  try {
    const resp = await fetch(`${serverURL}/items/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

const readItem = async (itemId) => {
  try {
    const resp = await fetch(`${serverURL}/items/${itemId}`).then((res) =>
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

const readItems = async () => {
  try {
    const resp = await fetch(`${serverURL}/items`).then((res) => res.json());
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

const updateItem = async (modifiedItem) => {
  try {
    const resp = await fetch(`${serverURL}/items`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedItem),
    }).then((res) => res.json());
    if (resp.status === "error") {
      throw Error(resp.message);
    }
    return resp.data;
  } catch (err) {
    throw Error(err);
  }
};

export { createItem, deleteItem, readItem, readItems, updateItem };
