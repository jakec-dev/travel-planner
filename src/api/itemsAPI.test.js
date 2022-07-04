import { jest } from "@jest/globals";
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

afterEach(() => {
  fetch.mockClear();
});

describe("createItem()", () => {
  it("should return the new item", async () => {
    const newItem = { id: 4, name: "test name" };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: "success",
            message: "it worked",
            data: newItem,
          }),
      })
    );
    const resp = await createItem(newItem);
    expect(resp).toMatchObject(newItem);
  });
});

describe("deleteItem()", () => {
  it("should return the deleted item", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: "success",
            message: "it worked",
            data: items[2],
          }),
      })
    );
    const itemId = 3;
    const resp = await deleteItem(itemId);
    expect(resp).toMatchObject(items[2]);
  });
});

describe("readItem()", () => {
  it("should return the item", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: "success",
            message: "it worked",
            data: items[2],
          }),
      })
    );
    const itemId = 3;
    const resp = await readItem(itemId);
    expect(resp).toMatchObject(items[2]);
  });
});

describe("readItems()", () => {
  it("should return all items", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: "success",
            message: "it worked",
            data: items,
          }),
      })
    );
    const resp = await readItems();
    expect(resp).toMatchObject(items);
  });
});

describe("updateItem()", () => {
  it("should return the modified items", async () => {
    const modifiedItem = { id: 2, name: "new name", brand: "Nike" };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: "success",
            message: "it worked",
            data: modifiedItem,
          }),
      })
    );
    const resp = await updateItem(modifiedItem);
    expect(resp).toMatchObject(modifiedItem);
  });
});
