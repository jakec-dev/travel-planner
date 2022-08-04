import React from "react";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, cleanup, waitFor, screen } from "../utils";
import GearTable from "../../src/components/GearTable";
import Item from "../../src/components/GearTable/Item";

describe("<GearTable />", () => {
  beforeEach(() => {
    fetchMock.doMock();
    fetch.resetMocks();
  });
  afterEach(() => {
    cleanup();
  });

  it("should render a list of all items", async () => {
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
    render(<GearTable />);
    await waitFor(() => {
      expect(screen.getAllByRole("row").length).toEqual(3);
      expect(
        screen.queryByText(items[0].name, { selector: "td" })
      ).toBeInTheDocument();
      expect(
        screen.queryByText(items[1].brand, { selector: "td" })
      ).toBeInTheDocument();
    });
  });

  it("should render empty table if no items exist in database", async () => {
    await fetch.mockResponseOnce(
      JSON.stringify({
        status: "success",
        data: null,
      })
    );
    render(<GearTable />);
    const tableNameHeader = screen.queryByRole("columnheader", {
      name: "Name",
    });
    const tableRows = screen.queryAllByRole("row");
    expect(tableNameHeader).toBeInTheDocument();
    expect(tableRows.length).toEqual(1); // only the header row
  });

  it("should toggle all item selection when the select-all checkbox is checked", async () => {
    const items = [
      { id: 1, name: "test name 1", brand: "test brand 1" },
      { id: 2, name: "test name 2", brand: "test brand 2" },
      { id: 3, name: "test name 3", brand: "test brand 3" },
    ];
    await fetch.mockResponseOnce(
      JSON.stringify({
        status: "success",
        data: items,
      })
    );
    render(<GearTable />);
    const selectAllCheckbox = screen.getByRole("checkbox");
    await userEvent.click(selectAllCheckbox);
    await waitFor(() => {
      expect(selectAllCheckbox).toBeChecked();
    });
    const allCheckboxes = screen.getAllByRole("checkbox");
    allCheckboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked();
    });
    await userEvent.click(selectAllCheckbox);
    allCheckboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });
  });

  it("should render error message if server request fails", async () => {
    const errorMessage = "Test error message";
    await fetch.mockReject(new Error(errorMessage));
    render(<GearTable />);
    await waitFor(() => {
      expect(
        screen.queryByText(errorMessage, { exact: false })
      ).toBeInTheDocument();
    });
  });

  describe("<Item />", () => {
    it("should render the item name and brand", () => {
      const item = { id: 1, name: "test name", brand: "test brand" };
      render(
        <table>
          <tbody>
            <Item item={item} />
          </tbody>
        </table>
      );
      expect(
        screen.queryByText(item.name, { selector: "td" })
      ).toBeInTheDocument();
      expect(
        screen.queryByText(item.brand, { selector: "td" })
      ).toBeInTheDocument();
    });

    it("should render an empty string if optional fields are not provided", () => {
      // no 'brand' field
      const item = { id: 1, name: "test name" };
      render(
        <table>
          <tbody>
            <Item item={item} />
          </tbody>
        </table>
      );
      expect(screen.getByTestId("itemBrand")).toHaveTextContent("");
    });

    it("should not render the item ID", () => {
      const item = { id: 123, name: "test name", brand: "test brand" };
      render(
        <table>
          <tbody>
            <Item item={item} />
          </tbody>
        </table>
      );
      expect(screen.queryByText(item.id)).not.toBeInTheDocument();
      expect(screen.queryByText(String(item.id))).not.toBeInTheDocument();
    });
  });
});
