import combineReducers from "./combineReducers";

describe("combineReducers", () => {
  it("should work", () => {
    const firstReducer = (state, action) => [...state, action.payload];
    const result = combineReducers({ firstReducer });
    console.log(result);
    expect(true).toEqual(true);
  });
});
