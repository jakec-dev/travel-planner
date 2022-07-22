import {
  addItem,
  deleteItemWithId,
  getItems,
  getItemWithId,
  updateItem,
} from "./itemsService";
import * as itemsData from "../data/itemsData";

describe("itemsService.js", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  describe("getItems()", () => {
    let getItemsFromDatabaseSpy;
    beforeEach(() => {
      getItemsFromDatabaseSpy = jest.spyOn(itemsData, "getItemsFromDatabase");
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should get all items from database", async () => {
      const items = [
        { id: 1, name: "test name", brand: "test brand" },
        { id: 2, name: "test name 2", brand: "test brand 2" },
      ];
      getItemsFromDatabaseSpy.mockImplementation(() => items);
      await getItems();
      expect(getItemsFromDatabaseSpy).toHaveBeenCalledTimes(1);
    });
    it("should return all items", async () => {
      const items = [
        { id: 1, name: "test name", brand: "test brand" },
        { id: 2, name: "test name 2", brand: "test brand 2" },
      ];
      getItemsFromDatabaseSpy.mockImplementation(() => items);
      const result = await getItems();
      expect(result).toMatchObject(items);
    });
  });

  describe("addItem()", () => {
    let createItemInDatabaseSpy;
    beforeEach(() => {
      createItemInDatabaseSpy = jest.spyOn(itemsData, "createItemInDatabase");
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should create a new item in database", async () => {
      const newItem = { name: "test name", brand: "test brand" };
      const createdItem = { id: 1, ...newItem };
      createItemInDatabaseSpy.mockImplementation(() => createdItem);
      await addItem(newItem);
      expect(createItemInDatabaseSpy).toHaveBeenCalledTimes(1);
    });
    it("should return the created item", async () => {
      const newItem = { name: "test name", brand: "test brand" };
      const createdItem = { id: 1, ...newItem };
      createItemInDatabaseSpy.mockImplementation(() => createdItem);
      const result = await addItem(newItem);
      expect(result).toMatchObject(createdItem);
    });
  });

  describe("updateItem()", () => {
    let updateItemInDatabaseSpy;
    beforeEach(() => {
      updateItemInDatabaseSpy = jest.spyOn(itemsData, "updateItemInDatabase");
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should update the item in database", async () => {
      const modifiedItem = {
        id: 1,
        name: "modified name",
        brand: "test brand",
      };
      updateItemInDatabaseSpy.mockImplementation(() => modifiedItem);
      await updateItem(modifiedItem);
      expect(updateItemInDatabaseSpy).toHaveBeenCalledTimes(1);
    });
    it("should return the updated item", async () => {
      const modifiedItem = {
        id: 1,
        name: "modified name",
        brand: "test brand",
      };
      updateItemInDatabaseSpy.mockImplementation(() => modifiedItem);
      const result = await updateItem(modifiedItem);
      expect(result).toMatchObject(modifiedItem);
    });
  });

  describe("getItemWithId()", () => {
    let getItemsFromDatabaseSpy;
    beforeEach(() => {
      getItemsFromDatabaseSpy = jest.spyOn(itemsData, "getItemsFromDatabase");
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should get the item from database", async () => {
      const itemId = 3;
      const item = { id: 3, name: "test name", brand: "test brand" };
      getItemsFromDatabaseSpy.mockImplementation(() => item);
      await getItemWithId(itemId);
      expect(getItemsFromDatabaseSpy).toHaveBeenCalledTimes(1);
    });
    it("should return the item", async () => {
      const itemId = 3;
      const item = { id: 3, name: "test name", brand: "test brand" };
      getItemsFromDatabaseSpy.mockImplementation(() => item);
      const result = await getItemWithId(itemId);
      expect(result).toMatchObject(item);
    });
  });

  describe("deleteItemWithId()", () => {
    let deleteItemInDatabaseSpy;
    beforeEach(() => {
      deleteItemInDatabaseSpy = jest.spyOn(itemsData, "deleteItemInDatabase");
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should delete the item in database", async () => {
      const itemId = 3;
      deleteItemInDatabaseSpy.mockImplementation(() => itemId);
      await deleteItemWithId(itemId);
      expect(deleteItemInDatabaseSpy).toHaveBeenCalledTimes(1);
    });
    it("should return the deleted item's ID", async () => {
      const itemId = 3;
      deleteItemInDatabaseSpy.mockImplementation(() => itemId);
      const result = await deleteItemWithId(itemId);
      expect(result).toEqual(itemId);
    });
  });
});
