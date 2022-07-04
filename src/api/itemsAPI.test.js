import {
  createItem,
  deleteItem,
  readItem,
  readItems,
  updateItem,
} from "./itemsAPI";

const items = [
  { id: 1, name: "Backpack", brand: "Osprey" },
  { id: 2, name: "Shoes", brand: "Nike" },
  { id: 3, name: "Toothpaste", brand: "Colgate" },
];

beforeEach(() => {
  fetch.resetMocks();
});

describe("createItem()", () => {
  it("should return the new item", async () => {
    const newItem = { id: 4, name: "test name" };
    fetch.mockResponseOnce(
      JSON.stringify({ status: "success", data: newItem })
    );
    const resp = await createItem(newItem);
    expect(resp).toMatchObject(newItem);
  });
});

describe("deleteItem()", () => {
  it("should return the deleted item", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        status: "success",
        message: "it worked",
        data: items[2],
      })
    );
    const itemId = 3;
    const resp = await deleteItem(itemId);
    expect(resp).toMatchObject(items[2]);
  });
});

describe("readItem()", () => {
  it("should return the item", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        status: "success",
        message: "it worked",
        data: items[2],
      })
    );
    const itemId = 3;
    const resp = await readItem(itemId);
    expect(resp).toMatchObject(items[2]);
  });
});

describe("readItems()", () => {
  it("should return all items", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        status: "success",
        message: "it worked",
        data: items,
      })
    );
    const resp = await readItems();
    expect(resp).toMatchObject(items);
  });
});

describe("updateItem()", () => {
  it("should return the modified items", async () => {
    const modifiedItem = { id: 2, name: "new name", brand: "Nike" };
    fetch.mockResponseOnce(
      JSON.stringify({
        status: "success",
        message: "it worked",
        data: modifiedItem,
      })
    );
    const resp = await updateItem(modifiedItem);
    expect(resp).toMatchObject(modifiedItem);
  });
});
