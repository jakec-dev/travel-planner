import {
  getItems,
  addItem,
  updateItem,
  getItemById,
  deleteItemById,
} from "./itemsAPI";
import * as apiUtils from "./apiUtils";

describe("itemsAPI.js", () => {
  let sendRequestSpy;
  beforeEach(() => {
    sendRequestSpy = jest.spyOn(apiUtils, "sendRequest");
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("getItems()", () => {
    it("should send a GET request to '/items'", () => {
      sendRequestSpy.mockImplementation(() => {});
      getItems();
      expect(sendRequestSpy).toHaveBeenCalledWith("/items");
    });
    it("should return the data returned from sendRequest", () => {
      const allItems = [
        { id: 1, name: "item one" },
        { id: 2, name: "item two" },
      ];
      sendRequestSpy.mockImplementation(() => allItems);
      const result = getItems();
      expect(result).toMatchObject(allItems);
    });
  });

  describe("addItem()", () => {
    it("should send the new item as a POST request to '/items'", () => {
      const newItem = { name: "test name", brand: "test brand" };
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      };
      sendRequestSpy.mockImplementation(() => {});
      addItem(newItem);
      expect(sendRequestSpy).toHaveBeenCalledWith("/items", options);
    });
    it("should return the data returned from sendRequest", () => {
      const newItem = { name: "test name", brand: "test brand" };
      const createdItem = { id: 1, ...newItem };
      sendRequestSpy.mockImplementation(() => createdItem);
      const result = addItem(newItem);
      expect(result).toMatchObject(createdItem);
    });
  });

  describe("updateItem()", () => {
    it("should send the modified item as a PUT request to '/items'", () => {
      const modifiedItem = {
        id: 1,
        name: "modified name",
        brand: "test brand",
      };
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modifiedItem),
      };
      sendRequestSpy.mockImplementation(() => {});
      updateItem(modifiedItem);
      expect(sendRequestSpy).toHaveBeenCalledWith("/items", options);
    });
    it("should return the data returned from sendRequest", () => {
      const modifiedItem = {
        id: 1,
        name: "modified name",
        brand: "test brand",
      };
      sendRequestSpy.mockImplementation(() => modifiedItem);
      const result = updateItem(modifiedItem);
      expect(result).toMatchObject(modifiedItem);
    });
  });

  describe("getItemById()", () => {
    it("should send a GET request to '/items/itemId'", () => {
      const itemId = 3;
      sendRequestSpy.mockImplementation(() => {});
      getItemById(itemId);
      expect(sendRequestSpy).toHaveBeenCalledWith(`/items/${itemId}`);
    });
    it("should return the data returned from sendRequest", () => {
      const itemId = 3;
      const item = { id: 3, name: "test name", brand: "test brand" };
      sendRequestSpy.mockImplementation(() => item);
      const result = getItemById(itemId);
      expect(result).toMatchObject(item);
    });
  });

  describe("deleteItemById()", () => {
    it("should send the itemId as a DELETE request to '/items/itemId'", () => {
      const itemId = 3;
      const options = {
        method: "DELETE",
      };
      sendRequestSpy.mockImplementation(() => {});
      deleteItemById(itemId);
      expect(sendRequestSpy).toHaveBeenCalledWith(`/items/${itemId}`, options);
    });
    it("should return the data returned from sendRequest", () => {
      const itemId = 3;
      sendRequestSpy.mockImplementation(() => itemId);
      const result = deleteItemById(itemId);
      expect(result).toEqual(itemId);
    });
  });
});
