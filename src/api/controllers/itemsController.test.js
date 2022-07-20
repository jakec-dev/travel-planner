import { get, add, update, getById, deleteById } from "./itemsController";
import * as itemsService from "../services/itemsService";
import * as itemsValidation from "../validation/itemsValidation";

describe("itemsController.js", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  describe("get()", () => {
    let getItemsSpy;
    beforeEach(() => {
      getItemsSpy = jest.spyOn(itemsService, "getItems");
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should return all items", async () => {
      const items = [
        { id: 1, name: "test name", brand: "test brand" },
        { id: 2, name: "test name 2", brand: "test brand 2" },
      ];
      getItemsSpy.mockImplementation(() => ({
        status: "success",
        message: "Items fetched successfully",
        data: items,
      }));
      const result = await get();
      expect(result).toMatchObject(items);
    });
    it("should throw an error if response status is error", async () => {
      getItemsSpy.mockImplementation(() => ({
        status: "error",
        message: "Test error message",
      }));
      await expect(get()).rejects.toThrowError("Test error message");
    });
    it("should throw an error if fetch fails", async () => {
      getItemsSpy.mockImplementation(() => {
        throw new Error("Test error message");
      });
      await expect(get()).rejects.toThrowError("Test error message");
    });
  });

  describe("add(newItem)", () => {
    let addItemSpy;
    let validateNewItemSpy;
    beforeEach(() => {
      addItemSpy = jest.spyOn(itemsService, "addItem");
      validateNewItemSpy = jest
        .spyOn(itemsValidation, "validateNewItem")
        .mockImplementation(() => {});
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should return the created item", async () => {
      const newItem = { name: "test name", brand: "test brand" };
      const createdItem = { id: 1, ...newItem };
      addItemSpy.mockImplementation(() => ({
        status: "success",
        message: "Items created successfully",
        data: createdItem,
      }));
      const result = await add(newItem);
      expect(result).toMatchObject(createdItem);
    });
    it("should validate the input", async () => {
      const newItem = { name: "test name", brand: "test brand" };
      const createdItem = { id: 1, ...newItem };
      addItemSpy.mockImplementation(() => ({
        status: "success",
        message: "Items created successfully",
        data: createdItem,
      }));
      await add(newItem);
      expect(validateNewItemSpy).toHaveBeenCalledTimes(1);
    });
    it("should throw an error if response status is error", async () => {
      const newItem = { name: "test name", brand: "test brand" };
      addItemSpy.mockImplementation(() => ({
        status: "error",
        message: "Test error message",
      }));
      await expect(add(newItem)).rejects.toThrowError("Test error message");
    });
    it("should throw an error if fetch fails", async () => {
      const newItem = { name: "test name", brand: "test brand" };
      addItemSpy.mockImplementation(() => {
        throw new Error("Test error message");
      });
      await expect(add(newItem)).rejects.toThrowError("Test error message");
    });
  });

  describe("update(modifiedItem)", () => {
    let updateItemSpy;
    let validateExistingItemSpy;
    beforeEach(() => {
      updateItemSpy = jest.spyOn(itemsService, "updateItem");
      validateExistingItemSpy = jest
        .spyOn(itemsValidation, "validateExistingItem")
        .mockImplementation(() => {});
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should return the updated item", async () => {
      const modifiedItem = {
        id: 1,
        name: "modified name",
        brand: "test brand",
      };
      updateItemSpy.mockImplementation(() => ({
        status: "success",
        message: "Items updated successfully",
        data: modifiedItem,
      }));
      const result = await update(modifiedItem);
      expect(result).toMatchObject(modifiedItem);
    });
    it("should validate the input", async () => {
      const modifiedItem = {
        id: 1,
        name: "modified name",
        brand: "test brand",
      };
      updateItemSpy.mockImplementation(() => ({
        status: "success",
        message: "Items updated successfully",
        data: modifiedItem,
      }));
      await update(modifiedItem);
      expect(validateExistingItemSpy).toHaveBeenCalledTimes(1);
    });
    it("should throw an error if response status is error", async () => {
      const modifiedItem = {
        id: 1,
        name: "modified name",
        brand: "test brand",
      };
      updateItemSpy.mockImplementation(() => ({
        status: "error",
        message: "Test error message",
      }));
      await expect(update(modifiedItem)).rejects.toThrowError(
        "Test error message"
      );
    });
    it("should throw an error if fetch fails", async () => {
      const modifiedItem = {
        id: 1,
        name: "modified name",
        brand: "test brand",
      };
      updateItemSpy.mockImplementation(() => {
        throw new Error("Test error message");
      });
      await expect(update(modifiedItem)).rejects.toThrowError(
        "Test error message"
      );
    });
  });

  describe("getById(itemId)", () => {
    let getItemWithIdSpy;
    let validateItemIdSpy;
    beforeEach(() => {
      getItemWithIdSpy = jest.spyOn(itemsService, "getItemWithId");
      validateItemIdSpy = jest
        .spyOn(itemsValidation, "validateItemId")
        .mockImplementation(() => {});
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should return the item", async () => {
      const item = {
        id: 1,
        name: "test name",
        brand: "test brand",
      };
      getItemWithIdSpy.mockImplementation(() => ({
        status: "success",
        message: "Item fetched successfully",
        data: item,
      }));
      const result = await getById(item);
      expect(result).toMatchObject(item);
    });
    it("should validate the input", async () => {
      const item = {
        id: 1,
        name: "test name",
        brand: "test brand",
      };
      getItemWithIdSpy.mockImplementation(() => ({
        status: "success",
        message: "Item fetched successfully",
        data: item,
      }));
      await getById(item);
      expect(validateItemIdSpy).toHaveBeenCalledTimes(1);
    });
    it("should throw an error if response status is error", async () => {
      const item = {
        id: 1,
        name: "test name",
        brand: "test brand",
      };
      getItemWithIdSpy.mockImplementation(() => ({
        status: "error",
        message: "Test error message",
      }));
      await expect(getById(item)).rejects.toThrowError("Test error message");
    });
    it("should throw an error if fetch fails", async () => {
      const item = {
        id: 1,
        name: "test name",
        brand: "test brand",
      };
      getItemWithIdSpy.mockImplementation(() => {
        throw new Error("Test error message");
      });
      await expect(getById(item)).rejects.toThrowError("Test error message");
    });
  });

  describe("deleteById(itemId)", () => {
    let deleteItemWithIdSpy;
    let validateItemIdSpy;
    beforeEach(() => {
      deleteItemWithIdSpy = jest.spyOn(itemsService, "deleteItemWithId");
      validateItemIdSpy = jest
        .spyOn(itemsValidation, "validateItemId")
        .mockImplementation(() => {});
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should return the item's ID", async () => {
      const itemId = 4;
      deleteItemWithIdSpy.mockImplementation(() => ({
        status: "success",
        message: "Item fetched successfully",
        data: itemId,
      }));
      const result = await deleteById(itemId);
      expect(result).toEqual(itemId);
    });
    it("should validate the input", async () => {
      const itemId = 4;
      deleteItemWithIdSpy.mockImplementation(() => ({
        status: "success",
        message: "Item fetched successfully",
        data: itemId,
      }));
      await deleteById(itemId);
      expect(validateItemIdSpy).toHaveBeenCalledTimes(1);
    });
    it("should throw an error if response status is error", async () => {
      const itemId = 4;
      deleteItemWithIdSpy.mockImplementation(() => ({
        status: "error",
        message: "Test error message",
      }));
      await expect(deleteById(itemId)).rejects.toThrowError(
        "Test error message"
      );
    });
    it("should throw an error if fetch fails", async () => {
      const itemId = 4;
      deleteItemWithIdSpy.mockImplementation(() => {
        throw new Error("Test error message");
      });
      await expect(deleteById(itemId)).rejects.toThrowError(
        "Test error message"
      );
    });
  });
});

// describe("validateNewItem()", () => {
//   it("should not throw for valid inputs", () => {
//     const newItem = { name: "test name", brand: "test brand" };
//     expect(() => itemsAPI.validateNewItem(newItem)).not.toThrowError();
//   });
//   it("should throw an error if new item is not an object", () => {
//     const itemDataTypes = ["string", 1, true, undefined, null, ["array"]];
//     itemDataTypes.forEach((item) => {
//       expect(() => itemsAPI.validateNewItem(item)).toThrowError(
//         "Item must be an object"
//       );
//     });
//     const newItemWithoutName = { brand: "test brand" };
//     expect(() => itemsAPI.validateNewItem(newItemWithoutName)).toThrowError(
//       "Item must contain a name property"
//     );
//   });
// });

// describe("createItem()", () => {
//   it("should return the new item", async () => {
//     const newItem = { name: "test name", brand: "test brand" };
//     fetch.mockResponseOnce(
//       JSON.stringify({
//         status: "success",
//         message: "Item created successfully",
//         data: { id: 1, ...newItem },
//       })
//     );
//     const resp = await itemsAPI.createItem(newItem);
//     expect(resp).toMatchObject({ id: 1, ...newItem });
//   });
// });

// describe("deleteItem()", () => {
//   it("should return the new item", async () => {
//     const newItem = { name: "test name", brand: "test brand" };
//     fetch.mockResponseOnce(
//       JSON.stringify({
//         status: "success",
//         message: "Item created successfully",
//         data: { id: 1, ...newItem },
//       })
//     );
//     const resp = await itemsAPI.createItem(newItem);
//     expect(resp).toMatchObject({ id: 1, ...newItem });
//   });
// });

// describe("deleteItem()", () => {
//   it("should return the deleted item", async () => {
//     fetch.mockResponseOnce(
//       JSON.stringify({
//         status: "success",
//         message: "it worked",
//         data: items[2],
//       })
//     );
//     const itemId = 3;
//     const resp = await deleteItem(itemId);
//     expect(resp).toMatchObject(items[2]);
//   });
//   it("should throw if an error response is received", async () => {
//     fetch.mockResponseOnce(
//       JSON.stringify({ status: "error", message: "test error message" })
//     );
//     await expect(deleteItem()).rejects.toThrowError("test error message");
//   });
// });

// describe("readItem()", () => {
//   it("should return the item", async () => {
//     fetch.mockResponseOnce(
//       JSON.stringify({
//         status: "success",
//         message: "it worked",
//         data: items[2],
//       })
//     );
//     const itemId = 3;
//     const resp = await readItem(itemId);
//     expect(resp).toMatchObject(items[2]);
//   });
//   it("should throw if an error response is received", async () => {
//     fetch.mockResponseOnce(
//       JSON.stringify({ status: "error", message: "test error message" })
//     );
//     await expect(readItem()).rejects.toThrowError("test error message");
//   });
// });

// describe("readItems()", () => {
//   it("should return all items", async () => {
//     fetch.mockResponseOnce(
//       JSON.stringify({
//         status: "success",
//         message: "it worked",
//         data: items,
//       })
//     );
//     const resp = await readItems();
//     expect(resp).toMatchObject(items);
//   });
//   it("should throw if an error response is received", async () => {
//     fetch.mockResponseOnce(
//       JSON.stringify({ status: "error", message: "test error message" })
//     );
//     await expect(readItems()).rejects.toThrowError("test error message");
//   });
// });

// describe("updateItem()", () => {
//   it("should return the modified items", async () => {
//     const modifiedItem = { id: 2, name: "new name", brand: "Nike" };
//     fetch.mockResponseOnce(
//       JSON.stringify({
//         status: "success",
//         message: "it worked",
//         data: modifiedItem,
//       })
//     );
//     const resp = await updateItem(modifiedItem);
//     expect(resp).toMatchObject(modifiedItem);
//   });
//   it("should throw if an error response is received", async () => {
//     fetch.mockResponseOnce(
//       JSON.stringify({ status: "error", message: "test error message" })
//     );
//     await expect(updateItem()).rejects.toThrowError("test error message");
//   });
// });
