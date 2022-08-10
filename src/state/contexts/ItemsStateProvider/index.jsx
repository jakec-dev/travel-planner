import React, { createContext, useContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
import { reducer, initialState } from "../../reducers";
import useActions from "../../actions";

const Context = createContext();

function ItemsStateProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useActions(dispatch);
  const value = useMemo(() => ({ ...state, ...actions }), [state]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

ItemsStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useItemsState = () => useContext(Context);

export default ItemsStateProvider;
