import React from "react";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, cleanup, screen, waitFor } from "../utils";
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
  it("should remove the item when the delete button is clicked", async () => {
    const initialItems = [
      { id: 1, name: "First item" },
      { id: 2, name: "Second item" },
      { id: 3, name: "Third item" },
    ];
    const itemIdToDelete = initialItems[1].id;
    await fetch
      .mockResponseOnce(
        JSON.stringify({ status: "success", data: initialItems })
      )
      .mockResponseOnce(
        JSON.stringify({ status: "success", data: itemIdToDelete })
      );
    render(<GearTable />);
    let deleteButton;
    let deleteItemName;
    await waitFor(() => {
      deleteButton = screen.getByRole("button", {
        name: `Delete Item ${itemIdToDelete}`,
      });
      deleteItemName = screen.queryByText(initialItems[1].name, {
        selector: "td",
      });
      expect(deleteButton).toBeInTheDocument();
      expect(deleteItemName).toBeInTheDocument();
    });
    await userEvent.click(deleteButton);
    await waitFor(() => {
      expect(deleteItemName).not.toBeInTheDocument();
    });
  });

  describe("<Item />", () => {
    it("renders a button to delete the item", () => {
      const item = { id: 1, name: "test name", brand: "test brand" };
      render(
        <table>
          <tbody>
            <Item item={item} />
          </tbody>
        </table>
      );
      expect(screen.getByRole("button")).toBeInTheDocument(""); // THIS NEEDS IMPROVEMENT
    });
  });
});
