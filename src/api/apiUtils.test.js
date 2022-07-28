import fetchMock from "jest-fetch-mock";
import { sendRequest } from "./apiUtils";

const SERVER_URL = process.env.API_URL;

describe("apiUtils.js", () => {
  describe("sendRequest()", () => {
    beforeEach(() => {
      fetchMock.doMock();
      fetch.resetMocks();
    });
    it("should send a fetch request to the endpoint specified in the first parameter", async () => {
      const endpoint = "/testEndpoint";
      await fetch.mockResponseOnce(
        JSON.stringify({ status: "success", data: "some string" })
      );
      sendRequest(endpoint);
      expect(fetch.mock.calls[0][0]).toEqual(`${SERVER_URL}${endpoint}`);
    });
    it("should send a fetch request using options passed in as the second parameter", async () => {
      const options = {
        method: "POST",
      };
      await fetch.mockResponseOnce(
        JSON.stringify({ status: "success", data: "some string" })
      );
      sendRequest("/test", options);
      expect(fetch.mock.calls[0][1]).toMatchObject(options);
    });
    it("should return the response data", async () => {
      const data = "test data";
      fetch.mockResponseOnce(JSON.stringify({ status: "success", data }));
      const result = await sendRequest("/test");
      expect(result).toEqual(data);
    });
    it("should throw an error if response status is 'error'", async () => {
      const errorMessage = "test error message";
      fetch.mockResponseOnce(
        JSON.stringify({ status: "error", message: errorMessage })
      );
      await expect(sendRequest("/test")).rejects.toThrowError(errorMessage);
    });
    it("should throw an error if response code is not 200", async () => {
      fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });
      await expect(sendRequest("/test")).resolves.not.toThrow();
      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify({}), { status: 400 });
      await expect(sendRequest("/test")).rejects.toThrow();
    });
  });
});
