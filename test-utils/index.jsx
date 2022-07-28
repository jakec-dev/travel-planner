import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "@testing-library/react";
import { ItemsStateProvider } from "../src/contexts/itemsState";

function AllTheProviders({ children }) {
  return <ItemsStateProvider>{children}</ItemsStateProvider>;
}

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from "@testing-library/react";

export { customRender as render };
