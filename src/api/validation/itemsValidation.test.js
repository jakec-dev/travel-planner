import { validateNewItem, validateExistingItem } from "./itemsValidation";
import * as dataValidation from "./dataValidation";

describe("itemsValidation.js", () => {
  describe("validateNewItem()", () => {
    let validateObjectSpy;
    let validateObjectHasKeysSpy;
    let validateNonEmptyStringSpy;
    beforeEach(() => {
      validateObjectSpy = jest
        .spyOn(dataValidation, "validateObject")
        .mockImplementation(() => {});
      validateObjectHasKeysSpy = jest
        .spyOn(dataValidation, "validateObjectHasKeys")
        .mockImplementation(() => {});
      validateNonEmptyStringSpy = jest
        .spyOn(dataValidation, "validateNonEmptyString")
        .mockImplementation(() => {});
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should validate that the new item is an object", () => {
      const newItem = { name: "test name", brand: "test brand" };
      validateNewItem(newItem);
      expect(validateObjectSpy).toHaveBeenCalledWith(
        newItem,
        "Item must be an object"
      );
    });
    it("should validate that the new item has a name property", () => {
      const newItem = { name: "test name", brand: "test brand" };
      validateNewItem(newItem);
      expect(validateObjectHasKeysSpy).toHaveBeenCalledWith(
        newItem,
        ["name"],
        "Item"
      );
    });
    it("should validate that the new item name is a non empty string", () => {
      const newItem = { name: "test name", brand: "test brand" };
      validateNewItem(newItem);
      expect(validateNonEmptyStringSpy).toHaveBeenCalledWith(
        newItem.name,
        "Item name must be a non-empty string"
      );
    });
    it("should return true if validation passes", () => {
      const newItem = { name: "test name", brand: "test brand" };
      const result = validateNewItem(newItem);
      expect(result).toEqual(true);
    });
  });

  describe("validateExistingItem()", () => {
    let validateObjectSpy;
    let validateObjectHasKeysSpy;
    let validateNumberSpy;
    let validateNonEmptyStringSpy;
    beforeEach(() => {
      validateObjectSpy = jest
        .spyOn(dataValidation, "validateObject")
        .mockImplementation(() => {});
      validateObjectHasKeysSpy = jest
        .spyOn(dataValidation, "validateObjectHasKeys")
        .mockImplementation(() => {});
      validateNumberSpy = jest
        .spyOn(dataValidation, "validateNumber")
        .mockImplementation(() => {});
      validateNonEmptyStringSpy = jest
        .spyOn(dataValidation, "validateNonEmptyString")
        .mockImplementation(() => {});
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it("should validate that the existing item is an object", () => {
      const existingItem = { id: 3, name: "test name", brand: "test brand" };
      validateExistingItem(existingItem);
      expect(validateObjectSpy).toHaveBeenCalledWith(
        existingItem,
        "Item must be an object"
      );
    });
    it("should validate that the existing item has a name and ID property", () => {
      const existingItem = { id: 3, name: "test name", brand: "test brand" };
      validateExistingItem(existingItem);
      expect(validateObjectHasKeysSpy).toHaveBeenCalledWith(
        existingItem,
        ["id", "name"],
        "Item"
      );
    });

    it("should validate that the existing item ID is a number", () => {
      const existingItem = { id: 3, name: "test name", brand: "test brand" };
      validateExistingItem(existingItem);
      expect(validateNumberSpy).toHaveBeenCalledWith(
        existingItem.id,
        "Item ID must be a number"
      );
    });
    it("should validate that the existing item name is a non empty string", () => {
      const existingItem = { id: 3, name: "test name", brand: "test brand" };
      validateExistingItem(existingItem);
      expect(validateNonEmptyStringSpy).toHaveBeenCalledWith(
        existingItem.name,
        "Item name must be a non-empty string"
      );
    });
    it("should return true if validation passes", () => {
      const existingItem = { id: 3, name: "test name", brand: "test brand" };
      const result = validateExistingItem(existingItem);
      expect(result).toEqual(true);
    });
  });
});
