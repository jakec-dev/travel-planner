import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import ItemInspector from "./ItemInspector";

let mockItems = [];
let mockSelectedItems = [];
jest.mock("../../contexts/itemsState", () => ({
  useItemsState: () => ({
    items: mockItems,
    selectedItems: mockSelectedItems,
  }),
}));

describe("<ItemInspector />", () => {
  afterEach(() => {
    cleanup();
  });
  it("asks the user to select an item if none are selected", () => {
    render(<ItemInspector />);
    expect(screen.queryByText("Select an item")).toBeInTheDocument();
  });
  it("renders the item if one item is selected", () => {
    const item = { id: 123, name: "test name", brand: "test brand" };
    mockItems = [item];
    mockSelectedItems = [item.id];
    render(<ItemInspector />);
    expect(screen.queryByText(item.name, { exact: false })).toBeInTheDocument();
    expect(
      screen.queryByText(item.brand, { exact: false })
    ).toBeInTheDocument();
  });
  it("renders the number of items selected if more than 1", () => {
    const items = [
      { id: 123, name: "test name", brand: "test brand" },
      { id: 321, name: "test name 2", brand: "test brand 2" },
      { id: 456, name: "test name 3", brand: "test brand 3" },
    ];
    mockItems = items;
    mockSelectedItems = [items[0].id, items[1].id];
    render(<ItemInspector />);
    expect(
      screen.queryByText(`${mockSelectedItems.length} Items Selected`)
    ).toBeInTheDocument();
  });
});
