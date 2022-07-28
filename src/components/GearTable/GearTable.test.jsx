import React from "react";
import fetchMock from "jest-fetch-mock";
import "@testing-library/jest-dom";
import { render, cleanup, waitFor } from "../../../test-utils";
import GearTable from "./GearTable";

describe("GearTable", () => {
  beforeEach(() => {
    fetchMock.doMock();
    fetch.resetMocks();
  });
  afterEach(() => {
    cleanup();
  });
  it("renders list of items", async () => {
    const items = [
      { id: 1, name: "test name 1", brand: "test brand 1" },
      { id: 2, name: "test name 2", brand: "test brand 2" },
    ];
    await fetch.mockResponseOnce(
      JSON.stringify({
        status: "success",
        data: items,
      })
    );
    const { getByText, getAllByRole } = render(<GearTable />);
    await waitFor(
      () => {
        expect(getAllByRole("row").length).toEqual(3);
        expect(getByText("test name 1")).toBeInTheDocument();
        expect(getByText("test name 2")).toBeInTheDocument();
      },
      { timeout: 4000 }
    );
  });
});
