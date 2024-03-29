import React from "react";
import AddItem from "./components/AddItem";
import { ItemsStateProvider } from "./contexts/itemsState";
import GearTable from "./components/GearTable";
import Header from "./components/Header";
import ItemInspector from "./components/ItemInspector";
import "@csstools/normalize.css";
import "./App.css";

function App() {
  return (
    <main className="pageContainer">
      <Header />
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
