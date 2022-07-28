import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, waitFor } from "../../../test-utils";
import GearTable from "./GearTable";

describe("GearTable", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders GearTable component", async () => {
    const { getByText } = render(<GearTable />);
    await waitFor(
      () => {
        expect(getByText("Backpack")).toBeInTheDocument();
      },
      { timeout: 4000 }
    );
    expect(getByText("Backpack")).toBeInTheDocument();
  });
});
