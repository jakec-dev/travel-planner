import React, { createContext, useContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer, initialState } from "../state/reducers";
import useActions from "../state/actions";

const Context = createContext();

function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(dispatch);
  const value = useMemo(() => ({ ...state, ...actions }), [state]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

AppStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useAppState() {
  return useContext(Context);
}

export { AppStateProvider, useAppState };