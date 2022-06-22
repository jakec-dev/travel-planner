import React from "react";
import { FaSync } from "react-icons/fa";
import AddItem from "./components/AddItem";
import { AppStateProvider } from "./contexts/appState";
import GearTable from "./components/GearTable";
import Header from "./components/Header";
import ItemInspector from "./components/ItemInspector";
import "@csstools/normalize.css";
import "./App.css";

// const serverURL = "http://localhost:5000";
// const serverURL = "https://jakecdev-travel-planner-server.herokuapp.com";

function App() {
  // const deleteItem = async (id) => {
  //   const data = await fetch(`${serverURL}/item/${id}`, {
  //     method: "DELETE",
  //   }).then((resp) => resp.json());
  // };

  // const updateItem = async (modifiedItem) => {
  //   const data = await fetch(`${serverURL}/item`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(modifiedItem),
  //   }).then((resp) => resp.json());
  // };

  // const toggleItemSelect = async (item) => {
  //   const data = await fetch(`${serverURL}/item/${item.id}`).then((resp) =>
  //     resp.json()
  //   );
  // };

  // const syncFromServer = async () => {
  //   const data = await fetch(`${serverURL}/items`).then((resp) => resp.json());
  // };

  // useEffect(() => {
  //   syncFromServer();
  // }, []);

  return (
    <AppStateProvider>
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
    </AppStateProvider>
  );
}

export default App;
