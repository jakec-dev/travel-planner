import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, screen } from "../../../../test-utils";
import Item from "./Item";

describe("<Item />", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders the item name and brand", () => {
    const item = { id: 1, name: "test name", brand: "test brand" };
    render(
      <table>
        <tbody>
          <Item item={item} />
        </tbody>
      </table>
    );
    expect(screen.queryByText(item.name)).toBeInTheDocument();
    expect(screen.queryByText(item.brand)).toBeInTheDocument();
  });
  it("renders an empty string in brand field if no brand is provided", () => {
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
  it("does not render the item ID", () => {
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
  it("renders a button to delete the item", () => {
    const item = { id: 1, name: "test name", brand: "test brand" };
    render(
      <table>
        <tbody>
          <Item item={item} />
        </tbody>
      </table>
    );
    expect(screen.getByRole("button")).toBeInTheDocument("");
  });
});
