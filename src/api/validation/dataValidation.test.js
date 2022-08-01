import {
  validateNonEmptyString,
  validateNumber,
  validateObject,
  validateObjectHasKeys,
} from "./dataValidation";

const errorMessage = "test error message";

describe("dataValidation.js", () => {
  describe("validateNumber()", () => {
    it("should return true if value is a number", () => {
      expect(validateNumber(7, errorMessage)).toEqual(true);
    });
    it("should throw an error if value is not a number", () => {
      const invalidDataTypes = [
        "string",
        true,
        ["array"],
        { type: "object" },
        undefined,
        null,
      ];
      invalidDataTypes.forEach((dataType) => {
        expect(() => validateNumber(dataType, errorMessage)).toThrowError(
          errorMessage
        );
      });
    });
  });

  describe("validateNonEmptyString()", () => {
    it("should return true if value is a non-empty string", () => {
      expect(validateNonEmptyString("some name", errorMessage)).toEqual(true);
    });
    it("should throw an error if value is not a non-empty string", () => {
      const invalidDataTypes = [
        4,
        true,
        ["array"],
        { type: "object" },
        undefined,
        null,
        "",
      ];
      invalidDataTypes.forEach((dataType) => {
        expect(() =>
          validateNonEmptyString(dataType, errorMessage)
        ).toThrowError(errorMessage);
      });
    });
  });

  describe("validateObject()", () => {
    it("should return true if value is an object", () => {
      expect(validateObject({ key: "value" }, errorMessage)).toEqual(true);
    });
    it("should throw an error if value is not an object", () => {
      const invalidDataTypes = ["string", 4, true, ["array"], undefined, null];
      invalidDataTypes.forEach((dataType) => {
        expect(() => validateObject(dataType, errorMessage)).toThrowError(
          errorMessage
        );
      });
    });
  });

  describe("validateObjectHasKeys()", () => {
    const objectName = "Test";
    it("should return true if object contains all keys listed in second argument array", () => {
      expect(
        validateObjectHasKeys(
          { foo: "value", bar: "value" },
          ["foo", "bar"],
          objectName
        )
      ).toEqual(true);
    });
    it("should return true if object contains all keys listed in second argument array plus extra keys", () => {
      expect(
        validateObjectHasKeys(
          { foo: "value", bar: 5, optionalKey: ["test"] },
          ["foo", "bar"],
          objectName
        )
      ).toEqual(true);
    });
    it("should throw an error if object contains no keys listed in second argument array", () => {
      expect(() =>
        validateObjectHasKeys({ someKey: "value" }, ["foo", "bar"], objectName)
      ).toThrowError(`${objectName} must contain a 'foo' property`);
    });
    it("should throw an error if object contains some but not all keys listed in second argument array", () => {
      expect(() =>
        validateObjectHasKeys({ foo: "value" }, ["foo", "bar"], objectName)
      ).toThrowError(`${objectName} must contain a 'bar' property`);
    });
  });
});
