import React from "react";
import AddItem from "./components/organisms/AddItem";
import ItemsStateProvider from "./components/atoms/ItemsStateProvider";
import GearTable from "./components/organisms/GearTable";
import Logo from "./components/molecules/Logo";
import ItemInspector from "./components/organisms/ItemInspector";
import Container from "./components/atoms/Container";
import "./bootstrap";

function App() {
  return (
    <Container align="center" element="main" width="page">
      <Logo />
      <ItemsStateProvider>
        <Container flex="default">
          <GearTable />
          <ItemInspector />
        </Container>
        <Container mt="m" width="full">
          <AddItem />
        </Container>
      </ItemsStateProvider>
    </Container>
  );
}

export default App;
