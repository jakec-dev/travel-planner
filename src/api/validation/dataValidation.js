const validateNumber = (value, errorMessage) => {
  if (typeof value !== "number") {
    throw new Error(errorMessage);
  }
};

const validateNonEmptyString = (value, errorMessage) => {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(errorMessage);
  }
};

const validateObject = (value, errorMessage) => {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(errorMessage);
  }
};

const validateObjectHasKeys = (object, properties, objectName) => {
  properties.forEach((property) => {
    if (!Object.prototype.hasOwnProperty.call(object, property)) {
      throw new Error(`${objectName} must contain a '${property}' property`);
    }
  });
};

export {
  validateNumber,
  validateNonEmptyString,
  validateObject,
  validateObjectHasKeys,
};
