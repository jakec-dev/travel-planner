const combineReducers = (reducers) => (state, action) =>
  Object.keys(reducers).reduce(
    (acc, prop) => ({
      ...acc,
      ...reducers[prop]({ [prop]: acc[prop] }, action),
    }),
    state
  );

export default combineReducers;
