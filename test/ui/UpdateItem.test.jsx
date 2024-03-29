import React from "react";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render, cleanup, screen, waitFor } from "../utils";
import GearTable from "../../src/components/GearTable";
import ItemInspector from "../../src/components/ItemInspector";

const initialItems = [
  { id: 1, name: "First item name", brand: "First item brand" },
  { id: 2, name: "Second item name", brand: "Second item brand" },
  { id: 3, name: "Third item name", brand: "Third item brand" },
];

describe("<ItemInspector />", () => {
  beforeEach(() => {
    fetchMock.doMock();
    fetch.resetMocks();
  });
  afterEach(() => {
    cleanup();
  });
  it("should notify the user to select an item if none are selected", () => {
    render(<ItemInspector />);
    expect(screen.queryByText("Select an item")).toBeInTheDocument();
  });
  it("should render the item in detail view if one item is selected", async () => {
    const selectedItem = initialItems[1];
    await fetch.mockResponseOnce(
      JSON.stringify({ status: "success", data: initialItems })
    );
    render(
      <div>
        <ItemInspector />
        <GearTable />
      </div>
    );
    let selectSecondItemCheckbox;
    await waitFor(() => {
      selectSecondItemCheckbox = screen.getByTestId(
        `selItem${selectedItem.id}`
      );
      expect(selectSecondItemCheckbox).toBeInTheDocument();
    });
    await userEvent.click(selectSecondItemCheckbox);
    expect(screen.getByTestId("itemDetailName")).toHaveTextContent(
      selectedItem.name
    );
  });
  it("should render the number of items selected if more than 1", async () => {
    const selectedItems = [initialItems[1], initialItems[2]];
    await fetch.mockResponseOnce(
      JSON.stringify({ status: "success", data: initialItems })
    );
    render(
      <div>
        <ItemInspector />
        <GearTable />
      </div>
    );
    let selectSecondItemCheckbox;
    let selectThirdItemCheckbox;
    await waitFor(() => {
      selectSecondItemCheckbox = screen.getByTestId(
        `selItem${selectedItems[0].id}`
      );
      selectThirdItemCheckbox = screen.getByTestId(
        `selItem${selectedItems[1].id}`
      );
      expect(selectSecondItemCheckbox).toBeInTheDocument();
      expect(selectThirdItemCheckbox).toBeInTheDocument();
    });
    await userEvent.click(selectSecondItemCheckbox);
    await userEvent.click(selectThirdItemCheckbox);
    expect(
      screen.queryByText(`${selectedItems.length} Items Selected`)
    ).toBeInTheDocument();
  });

  describe("<ItemDetail />", () => {
    const selectedItem = initialItems[1];
    beforeEach(async () => {
      await fetch.mockResponseOnce(
        JSON.stringify({ status: "success", data: initialItems })
      );
      render(
        <div>
          <ItemInspector />
          <GearTable />
        </div>
      );
      let selectSecondItemCheckbox;
      await waitFor(() => {
        selectSecondItemCheckbox = screen.getByTestId(
          `selItem${selectedItem.id}`
        );
      });
      await userEvent.click(selectSecondItemCheckbox);
    });
    it("should render the item name and brand", () => {
      expect(screen.getByTestId("itemDetailName")).toHaveTextContent(
        selectedItem.name
      );
      expect(screen.getByTestId("itemDetailBrand")).toHaveTextContent(
        selectedItem.brand
      );
    });
    it("should render buttons to edit each item field", () => {
      expect(
        screen.queryByRole("button", { name: "Edit Name" })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "Edit Brand" })
      ).toBeInTheDocument();
    });
    describe("When an edit button is clicked", () => {
      let editNameBtn;
      beforeEach(async () => {
        editNameBtn = screen.getByRole("button", { name: "Edit Name" });
        await userEvent.click(editNameBtn);
      });
      it("shoould convert the field to a text input", async () => {
        const editBrandBtn = screen.getByRole("button", { name: "Edit Brand" });
        await userEvent.click(editBrandBtn);
        expect(
          screen.queryByDisplayValue(selectedItem.name)
        ).toBeInTheDocument();
        expect(screen.queryByTestId("itemDetailName")).not.toBeInTheDocument();
        expect(
          screen.queryByDisplayValue(selectedItem.brand)
        ).toBeInTheDocument();
        expect(screen.queryByTestId("itemDetailBrand")).not.toBeInTheDocument();
      });
      it("should remove the button to edit the field", async () => {
        const editBrandBtn = screen.getByRole("button", { name: "Edit Brand" });
        await userEvent.click(editBrandBtn);
        expect(editNameBtn).not.toBeInTheDocument();
        expect(editBrandBtn).not.toBeInTheDocument();
      });
      it("should render buttons to save or cancel the changes", () => {
        expect(
          screen.queryByRole("button", { name: "Save Edits" })
        ).toBeInTheDocument();
        expect(
          screen.queryByRole("button", { name: "Cancel Edit" })
        ).toBeInTheDocument();
      });
      describe("When the save button is clicked", () => {
        const modifiedName = "Modified name";
        it("should convert the field back to uneditable text", async () => {
          await fetch.mockResponseOnce(
            JSON.stringify({
              status: "success",
              data: { ...selectedItem, name: modifiedName },
            })
          );
          const nameField = screen.getByDisplayValue(selectedItem.name);
          await userEvent.type(nameField, modifiedName);
          const saveBtn = screen.getByRole("button", { name: "Save Edits" });
          await userEvent.click(saveBtn);
          expect(screen.queryByTestId("itemDetailName")).toBeInTheDocument();
          expect(
            screen.queryByDisplayValue(modifiedName)
          ).not.toBeInTheDocument();
        });
        it("should remove the buttons to save or cancel the changes", async () => {
          await fetch.mockResponseOnce(
            JSON.stringify({
              status: "success",
              data: { ...selectedItem, name: modifiedName },
            })
          );
          const nameField = screen.getByDisplayValue(selectedItem.name);
          await userEvent.type(nameField, modifiedName);
          const saveBtn = screen.getByRole("button", { name: "Save Edits" });
          await userEvent.click(saveBtn);
          expect(
            screen.queryByRole("button", { name: "Save Edits" })
          ).not.toBeInTheDocument();
          expect(
            screen.queryByRole("button", { name: "Cancel Edit" })
          ).not.toBeInTheDocument();
        });
        it("should render a button to edit the field again", async () => {
          await fetch.mockResponseOnce(
            JSON.stringify({
              status: "success",
              data: { ...selectedItem, name: modifiedName },
            })
          );
          const nameField = screen.getByDisplayValue(selectedItem.name);
          await userEvent.type(nameField, modifiedName);
          const saveBtn = screen.getByRole("button", { name: "Save Edits" });
          await userEvent.click(saveBtn);
          expect(
            screen.queryByRole("button", { name: "Edit Name" })
          ).toBeInTheDocument();
        });
        it("should display the updated value", async () => {
          await fetch.mockResponseOnce(
            JSON.stringify({
              status: "success",
              data: { ...selectedItem, name: modifiedName },
            })
          );
          const nameField = screen.getByDisplayValue(selectedItem.name);
          await userEvent.type(nameField, modifiedName);
          const saveBtn = screen.getByRole("button", { name: "Save Edits" });
          await userEvent.click(saveBtn);
          expect(
            screen.queryByText(modifiedName, { selector: "td" })
          ).toBeInTheDocument();
          expect(
            screen.queryByText(selectedItem.name, { selector: "td" })
          ).not.toBeInTheDocument();
        });
        it("should render error message if server request fails", async () => {
          const errorMessage = "Test error message";
          await fetch.mockReject(new Error(errorMessage));
          const nameField = screen.getByDisplayValue(selectedItem.name);
          await userEvent.type(nameField, modifiedName);
          const saveBtn = screen.getByRole("button", { name: "Save Edits" });
          await userEvent.click(saveBtn);
          await waitFor(() => {
            expect(
              screen.queryByText(errorMessage, { exact: false })
            ).toBeInTheDocument();
          });
        });
      });
      describe("When the cancel button is clicked", () => {
        const modifiedName = "Modified name";
        beforeEach(async () => {
          const nameField = screen.getByDisplayValue(selectedItem.name);
          await userEvent.type(nameField, modifiedName);
          const cancelBtn = screen.getByRole("button", { name: "Cancel Edit" });
          await userEvent.click(cancelBtn);
        });
        it("should convert the field back to uneditable text", () => {
          expect(screen.queryByTestId("itemDetailName")).toBeInTheDocument();
          expect(
            screen.queryByDisplayValue(modifiedName)
          ).not.toBeInTheDocument();
        });
        it("should remove the buttons to save or cancel the changes", () => {
          expect(
            screen.queryByRole("button", { name: "Save Edits" })
          ).not.toBeInTheDocument();
          expect(
            screen.queryByRole("button", { name: "Cancel Edit" })
          ).not.toBeInTheDocument();
        });
        it("should render a button to edit the field again", () => {
          expect(
            screen.queryByRole("button", { name: "Edit Name" })
          ).toBeInTheDocument();
        });
        it("should display the original value", () => {
          expect(
            screen.queryByText(modifiedName, { selector: "td" })
          ).not.toBeInTheDocument();
          expect(
            screen.queryByText(selectedItem.name, { selector: "td" })
          ).toBeInTheDocument();
        });
      });
    });
  });
});
