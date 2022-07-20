const validateItemId = (itemId) => {
  if (typeof itemId !== "number") {
    throw new Error("Item ID is not a number");
  }
};

const validateItemName = (itemName) => {
  if (typeof itemName !== "string" || itemName.length === 0) {
    throw new Error("Item name must be a non-empty string");
  }
};

const validateItemObject = (item) => {
  if (!item || typeof item !== "object" || Array.isArray(item)) {
    throw new Error("Item must be an object");
  }
};

const validateItemRequirements = (item, properties) => {
  properties.forEach((property) => {
    if (!Object.prototype.hasOwnProperty.call(item, property)) {
      throw new Error(`Item must contain a '${property}' property`);
    }
  });
};

const validateNewItem = (newItem) => {
  validateItemObject(newItem);
  validateItemRequirements(newItem, ["name"]);
  const { name } = newItem;
  validateItemName(name);
};

const validateExistingItem = (existingItem) => {
  validateItemObject(existingItem);
  validateItemRequirements(existingItem, ["id", "name"]);
  const { id, name } = existingItem;
  validateItemId(id);
  validateItemName(name);
};

export {
  validateItemId,
  validateItemName,
  validateNewItem,
  validateExistingItem,
};
