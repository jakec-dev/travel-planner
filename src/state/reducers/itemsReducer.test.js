import {
  itemsReducer,
  itemsInitialState as defaultInitialState,
} from "./itemsReducer";
import * as ITEMS_ACTION_TYPES from "../actions/itemsActionTypes";

describe("function setup", () => {
  it("should return initial state if no action.type provided", () => {
    const initialState = [{ id: 1, name: "test" }];
    const state = itemsReducer(initialState, { type: undefined });
    expect(state).toMatchObject(initialState);
  });
  it("should set initial state to default value if first argument is missing", () => {
    const state = itemsReducer(undefined, { type: undefined });
    expect(state).toMatchObject(defaultInitialState);
  });
  it("should throw error if no action is provided", () => {
    const initialState = [{ id: 1, name: "test" }];
    expect(() => itemsReducer(initialState)).toThrow();
  });
});

describe("ADD_ITEM", () => {
  it("should add a new item when there are no items created yet", () => {
    const newItem = {
      name: "test name",
      brand: "test brand",
    };
    const action = {
      type: ITEMS_ACTION_TYPES.ADD_ITEM,
      payload: newItem,
    };
    const state = itemsReducer({ items: [] }, action);
    expect(state).toMatchObject({ items: [newItem] });
  });
});
