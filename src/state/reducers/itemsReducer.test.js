import { itemsReducer } from "./itemsReducer";
import * as ITEMS_ACTION_TYPES from "../actions/itemsActionTypes";

describe("function setup", () => {
  it("should return initial state if no action.type provided", () => {
    const initialState = {
      items: [{ id: 1, name: "test name", brand: "test brand" }],
    };
    const state = itemsReducer(initialState, { type: undefined });
    expect(state).toMatchObject(initialState);
  });
  it("should set state to empty array of items if first argument is missing", () => {
    const state = itemsReducer(undefined, { type: undefined });
    expect(state).toMatchObject({ items: [] });
  });
  it("should throw error if no action is provided", () => {
    const initialState = { items: [{ id: 1, name: "test" }] };
    expect(() => itemsReducer(initialState)).toThrow();
  });
  it("should throw error if initial state is invalid", () => {
    const initialStateAsArray = [{ id: 1, name: "test" }];
    expect(() =>
      itemsReducer(initialStateAsArray, { type: undefined })
    ).toThrow();
    const initialStateAsSingleItem = { id: 1, name: "test" };
    expect(() =>
      itemsReducer(initialStateAsSingleItem, { type: undefined })
    ).toThrow();
  });
});

describe("ADD_ITEM", () => {
  it("should add the new item to list of existing items", () => {
    const newItem = {
      name: "test name",
      brand: "test brand",
    };
    const existingItems = [
      { id: 1, name: "item 1", brand: "brand 1" },
      { id: 2, name: "item 2", brand: "brand 2" },
    ];
    const action = {
      type: ITEMS_ACTION_TYPES.ADD_ITEM,
      payload: newItem,
    };
    const state = itemsReducer({ items: existingItems }, action);
    expect(state).toMatchObject({ items: [...existingItems, newItem] });
  });
});
