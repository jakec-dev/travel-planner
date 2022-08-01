import {
  validateNonEmptyString,
  validateNumber,
  validateObject,
  validateObjectHasKeys,
} from "./dataValidation";

const validateNewItem = (newItem) => {
  validateObject(newItem, "Item must be an object");
  validateObjectHasKeys(newItem, ["name"], "Item");
  const { name } = newItem;
  validateNonEmptyString(name, "Item name must be a non-empty string");
  return true;
};

const validateExistingItem = (existingItem) => {
  validateObject(existingItem, "Item must be an object");
  validateObjectHasKeys(existingItem, ["id", "name"], "Item");
  const { id, name } = existingItem;
  validateNumber(id, "Item ID must be a number");
  validateNonEmptyString(name, "Item name must be a non-empty string");
  return true;
};

export { validateNewItem, validateExistingItem };
