import { itemsInitialState, itemsReducer } from "./itemsReducer";
import { selectionInitialState, selectionReducer } from "./selectionReducer";
import combineReducers from "./combineReducers";

const initialState = {
  items: itemsInitialState,
  selectedItems: selectionInitialState,
};

const reducer = combineReducers({
  items: itemsReducer,
  selectedItems: selectionReducer,
});

export { initialState, reducer };
