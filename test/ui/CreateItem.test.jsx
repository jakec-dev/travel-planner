import React from "react";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, cleanup, screen, waitFor } from "../utils";
import AddItem from "../../src/components/AddItem";
import GearTable from "../../src/components/GearTable";

describe("<AddItem />", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render input fields for name and brand", () => {
    render(<AddItem />);
    expect(screen.getByLabelText("Item name")).toBeInTheDocument();
    expect(screen.getByLabelText("Brand")).toBeInTheDocument();
  });
  it("should initially render a disabled submit button", () => {
    render(<AddItem />);
    const submitButton = screen.getByText("Add Item", { selector: "button" });
    expect(submitButton).toBeDisabled();
  });
  it("should enable the submit button when a valid item is provided", async () => {
    render(<AddItem />);
    const nameField = screen.getByLabelText("Item name");
    const submitButton = screen.getByText("Add Item", { selector: "button" });
    await userEvent.type(nameField, "A valid item name");
    expect(submitButton).not.toBeDisabled();
  });
  it("should disable the submit button when an invalid item is provided", async () => {
    render(<AddItem />);
    const nameField = screen.getByLabelText("Item name");
    const submitButton = screen.getByText("Add Item", { selector: "button" });
    await userEvent.type(nameField, "A valid item name");
    expect(submitButton).not.toBeDisabled();
    await userEvent.clear(nameField);
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });
  describe("On submit", () => {
    beforeEach(() => {
      fetchMock.doMock();
      fetch.resetMocks();
    });
    it("should add the item to list of all items", async () => {
      const initialItems = [{ id: 1, name: "Initial item" }];
      const newItem = {
        name: "New item name",
        brand: "New item brand",
      };
      const createdItem = {
        id: 23,
        ...newItem,
      };
      await fetch
        .mockResponseOnce(
          JSON.stringify({ status: "success", data: initialItems })
        )
        .mockResponseOnce(
          JSON.stringify({ status: "success", data: createdItem })
        );
      render(
        <div>
          <GearTable />
          <AddItem />
        </div>
      );
      const nameField = screen.getByLabelText("Item name");
      const brandField = screen.getByLabelText("Brand");
      const submitButton = screen.getByText("Add Item", { selector: "button" });
      await userEvent.type(nameField, newItem.name);
      await userEvent.type(brandField, newItem.brand);
      await userEvent.click(submitButton);
      await waitFor(() => {
        expect(screen.getAllByRole("row").length).toEqual(
          initialItems.length + 2 // First row is thead
        );
        expect(
          screen.queryByText(newItem.name, { selector: "td" })
        ).toBeInTheDocument();
        expect(
          screen.queryByText(newItem.brand, { selector: "td" })
        ).toBeInTheDocument();
      });
    });
    // it("should throw an error if server request fails", async () => {
    //   const errorMessage = "Test error message";
    //   const initialItems = [{ id: 1, name: "Initial item" }];
    //   const newItem = {
    //     name: "New item name",
    //     brand: "New item brand",
    //   };
    //   await fetch
    //     .mockResponseOnce(
    //       JSON.stringify({ status: "success", data: initialItems })
    //     )
    //     .mockReject(new Error(errorMessage));
    //   render(
    //     <div>
    //       <GearTable />
    //       <AddItem />
    //     </div>
    //   );
    //   const nameField = screen.getByLabelText("Item name");
    //   const brandField = screen.getByLabelText("Brand");
    //   const submitButton = screen.getByText("Add Item", { selector: "button" });
    //   await userEvent.type(nameField, newItem.name);
    //   await userEvent.type(brandField, newItem.brand);
    //   expect(async () => userEvent.click(submitButton)).toThrowError(
    //     errorMessage
    //   );
    // });
  });
});
