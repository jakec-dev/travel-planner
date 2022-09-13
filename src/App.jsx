import React from "react";
import AddItem from "./components/organisms/AddItem";
import ItemsStateProvider from "./state/contexts/ItemsStateProvider";
import GearTable from "./components/organisms/GearTable";
import Logo from "./components/molecules/Logo";
import ItemInspector from "./components/organisms/ItemInspector";
import Container from "./components/atoms/Container";
import "./bootstrap";
import ApolloProvider from "./api/graphQL/contexts/ApolloProvider";

function App() {
  return (
    <Container align="center" element="main" width="page">
      <Logo />
      <ApolloProvider>
        <ItemsStateProvider>
          <Container flex="default">
            <GearTable />
            <ItemInspector />
          </Container>
          <Container mt="m" width="full">
            <AddItem />
          </Container>
        </ItemsStateProvider>
      </ApolloProvider>
    </Container>
  );
}

export default App;
