import React from "react";
import PropTypes from "prop-types";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as ApProvider,
} from "@apollo/client";

const SERVER_URL = process.env.API_URL;
const client = new ApolloClient({
  uri: `${SERVER_URL}/graphQL`,
  cache: new InMemoryCache(),
});

function ApolloProvider(props) {
  const { children } = props;
  return <ApProvider client={client}>{children}</ApProvider>;
}

ApolloProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApolloProvider;
