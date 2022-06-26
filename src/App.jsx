import React from "react";
import { FaSync } from "react-icons/fa";
import AddItem from "./components/AddItem";
import { ItemsStateProvider } from "./contexts/itemsState";
import GearTable from "./components/GearTable";
import Header from "./components/Header";
import ItemInspector from "./components/ItemInspector";
import "@csstools/normalize.css";
import "./App.css";

function App() {
  return (
    <ItemsStateProvider>
      <main className="pageContainer">
        <Header />
        <div className="gearTableAndInspector">
          <GearTable />
          <ItemInspector />
        </div>
        <div className="addItem">
          <AddItem />
        </div>
        <div className="addItem">
          <FaSync />
        </div>
      </main>
    </ItemsStateProvider>
  );
}

export default App;
