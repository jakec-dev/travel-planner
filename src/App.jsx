import React from "react";
import AddItem from "./components/molecules/AddItem";
import { ItemsStateProvider } from "./contexts/itemsState";
import GearTable from "./components/GearTable";
import Logo from "./components/molecules/Logo";
import ItemInspector from "./components/ItemInspector";
import "./bootstrap";

function App() {
  return (
    <main className="pageContainer">
      <Logo />
      <ItemsStateProvider>
        <div className="gearTableAndInspector">
          <GearTable />
          <ItemInspector />
        </div>
        <div className="addItem">
          <AddItem />
        </div>
      </ItemsStateProvider>
    </main>
  );
}

export default App;
