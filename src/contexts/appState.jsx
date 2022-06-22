import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer, initialState } from "../state/reducers";
import useActions from "../state/actions";

const Context = createContext();

function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(dispatch);
  // const value = useMemo(() => ({ ...state, ...actions }), []);
  // return <Context.Provider value={value}>{children}</Context.Provider>;
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
