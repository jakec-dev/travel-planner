import { selectionReducer } from "./selectionReducer";
import * as SELECTION_ACTION_TYPES from "../actions/selectionActionTypes";

describe("function setup", () => {
  it("should return initial state if no action.type provided", () => {
    const initialState = {
      selectedItems: [23],
    };
    const state = selectionReducer(initialState, { type: undefined });
    expect(state).toMatchObject(initialState);
  });
  it("should set state to empty array of item Ids if first argument is missing", () => {
    const state = selectionReducer(undefined, { type: undefined });
    expect(state).toMatchObject({ selectedItems: [] });
  });
  it("should throw error if no action is provided", () => {
    const initialState = {
      selectedItems: [23],
    };
    expect(() => selectionReducer(initialState)).toThrow();
  });
  it("should throw error if initial state is invalid", () => {
    const initialStateAsArray = [23];
    expect(() =>
      selectionReducer(initialStateAsArray, { type: undefined })
    ).toThrow();
    const initialStateAsSingleItemId = 23;
    expect(() =>
      selectionReducer(initialStateAsSingleItemId, { type: undefined })
    ).toThrow();
  });
});

describe("CLEAR_ALL", () => {
  it("should remove all item IDs", () => {
    const initialState = {
      selectedItems: [23, 45],
    };
    const action = {
      type: SELECTION_ACTION_TYPES.CLEAR_ALL,
    };
    const state = selectionReducer(initialState, action);
    expect(state).toMatchObject({ selectedItems: [] });
  });
});

describe("DESELECT_ITEM", () => {
  it("should remove the item ID from selected item IDs", () => {
    const itemId = 2;
    const existingSelectedItems = [1, 2, 3];
    const action = {
      type: SELECTION_ACTION_TYPES.DESELECT_ITEM,
      payload: itemId,
    };
    const state = selectionReducer(
      { selectedItems: existingSelectedItems },
      action
    );
    expect(state).toMatchObject({
      selectedItems: [existingSelectedItems[0], existingSelectedItems[2]],
    });
  });
});

describe("SELECT_ALL", () => {
  it("should add all item IDs to selected items", () => {
    const allItems = [
      { id: 1, name: "First item" },
      { id: 2, name: "Second item" },
      { id: 3, name: "Third item" },
    ];
    const action = {
      type: SELECTION_ACTION_TYPES.SELECT_ALL,
      payload: allItems,
    };
    const state = selectionReducer({ selectedItems: [2] }, action);
    expect(state).toMatchObject({ selectedItems: [1, 2, 3] });
  });
});

describe("TOGGLE_ITEM", () => {
  it("should add item ID to selected items if not already listed", () => {
    const itemId = 55;
    const initialState = { selectedItems: [1, 2, 3] };
    const action = {
      type: SELECTION_ACTION_TYPES.TOGGLE_ITEM,
      payload: itemId,
    };
    const state = selectionReducer(initialState, action);
    expect(state).toMatchObject({ selectedItems: [1, 2, 3, 55] });
  });
  it("should remove item ID from selected items if already listed", () => {
    const itemId = 2;
    const initialState = { selectedItems: [1, 2, 3] };
    const action = {
      type: SELECTION_ACTION_TYPES.TOGGLE_ITEM,
      payload: itemId,
    };
    const state = selectionReducer(initialState, action);
    expect(state).toMatchObject({ selectedItems: [1, 3] });
  });
});
