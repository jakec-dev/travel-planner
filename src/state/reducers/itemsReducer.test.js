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

describe("CLEAR_ITEMS", () => {
  it("should remove all items", () => {
    const initialState = {
      items: [
        { id: 1, name: "item 1", brand: "brand 1" },
        { id: 2, name: "item 2", brand: "brand 2" },
      ],
    };
    const action = {
      type: ITEMS_ACTION_TYPES.CLEAR_ITEMS,
    };
    const state = itemsReducer(initialState, action);
    expect(state).toMatchObject({ items: [] });
  });
});

describe("DELETE_ITEM", () => {
  it("should remove the item from existing items", () => {
    const itemId = 2;
    const existingItems = [
      { id: 1, name: "item 1", brand: "brand 1" },
      { id: 2, name: "item 2", brand: "brand 2" },
      { id: 3, name: "item 3", brand: "brand 3" },
    ];
    const action = {
      type: ITEMS_ACTION_TYPES.DELETE_ITEM,
      payload: itemId,
    };
    const state = itemsReducer({ items: existingItems }, action);
    expect(state).toMatchObject({
      items: [existingItems[0], existingItems[2]],
    });
  });

  describe("SET_ITEMS", () => {
    it("should replace existing items with specified items", () => {
      const newItems = [
        { id: 4, name: "new item 4", brand: "brand 4" },
        { id: 5, name: "new item 5", brand: "brand 5" },
        { id: 6, name: "new item 6", brand: "brand 6" },
      ];
      const existingItems = [
        { id: 1, name: "item 1", brand: "brand 1" },
        { id: 2, name: "item 2", brand: "brand 2" },
        { id: 3, name: "item 3", brand: "brand 3" },
      ];
      const action = {
        type: ITEMS_ACTION_TYPES.SET_ITEMS,
        payload: newItems,
      };
      const state = itemsReducer({ items: existingItems }, action);
      expect(state).toMatchObject({
        items: newItems,
      });
    });
  });

  describe("UPDATE_ITEM", () => {
    it("should replace existing item with updated item", () => {
      const existingItems = [
        { id: 1, name: "item 1", brand: "brand 1" },
        { id: 2, name: "item 2", brand: "brand 2" },
        { id: 3, name: "item 3", brand: "brand 3" },
      ];
      const modifiedItem = { id: 2, name: "new name", brand: "new brand" };
      const action = {
        type: ITEMS_ACTION_TYPES.UPDATE_ITEM,
        payload: modifiedItem,
      };
      const state = itemsReducer({ items: existingItems }, action);
      expect(state).toMatchObject({
        items: [existingItems[0], modifiedItem, existingItems[2]],
      });
    });
  });
});
