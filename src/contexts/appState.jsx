import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer, initialState } from "../state/reducers";
import itemsActions from "../state/actions/itemsActions";
import selectionActions from "../state/actions/selectionActions";

const Context = createContext();

function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = {
    itemsActions: itemsActions(dispatch),
    selectionActions: selectionActions(dispatch),
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ ...state, ...actions }}>
      {children}
    </Context.Provider>
  );
}

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAppState() {
  return useContext(Context);
}

export { AppStateProvider, useAppState };
