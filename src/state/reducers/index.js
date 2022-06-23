import { itemsInitialState, itemsReducer } from "./itemsReducer";
import { selectionInitialState, selectionReducer } from "./selectionReducer";

const combineReducers = (reducers) => (state, action) =>
  Object.keys(reducers).reduce(
    (acc, prop) => ({
      ...acc,
      ...reducers[prop]({ [prop]: acc[prop] }, action),
    }),
    state
  );

const initialState = {
  items: itemsInitialState,
  selectedItems: selectionInitialState,
};

const reducer = combineReducers({
  items: itemsReducer,
  selectedItems: selectionReducer,
});

export { initialState, reducer };
