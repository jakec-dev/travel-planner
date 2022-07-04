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

describe("createItem()", () => {
  it("should return the new item", async () => {
    const item = { id: 4, name: "test name" };
    const resp = await createItem(item);
    expect(resp).toMatchObject(item);
  });
});

describe("deleteItem()", () => {
  it("should return the deleted item", async () => {
    const itemId = 3;
    const resp = await deleteItem(itemId);
    expect(resp).toMatchObject(items[2]);
  });
});

describe("readItem()", () => {
  it("should return the item", async () => {
    const itemId = 3;
    const resp = await readItem(itemId);
    expect(resp).toMatchObject(items[2]);
  });
});

describe("readItems()", () => {
  it("should return all items", async () => {
    const resp = await readItems();
    expect(resp).toMatchObject(items);
  });
});

describe("updateItem()", () => {
  it("should return the modified items", async () => {
    const modifiedItem = { id: 2, name: "new name", brand: "Nike" };
    const resp = await updateItem(modifiedItem);
    expect(resp).toMatchObject(modifiedItem);
  });
});
