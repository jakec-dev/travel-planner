import React, { useState } from "react";
import AddItem from "./components/AddItem";
import GearTable from "./components/GearTable";
import Header from "./components/Header";
import ItemInspector from "./components/ItemInspector";
import "@csstools/normalize.css";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (item) => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, ...item };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((o) => o.id !== id));
  };

  const updateItem = (modifiedItem) => {
    setItems(
      items.map((item) => {
        if (item.id === modifiedItem.id) return modifiedItem;
        return item;
      })
    );
    setSelectedItems([modifiedItem]);
  };

  const toggleItemSelect = (item) => {
    const index = selectedItems.findIndex((o) => o.id === item.id);
    if (index === -1) {
      setSelectedItems([...selectedItems, item]);
      return;
    }
    setSelectedItems(selectedItems.filter((o) => o.id !== item.id));
  };

  return (
    <main className="pageContainer">
      <Header />
      <div className="gearTableAndInspector">
        <GearTable
          items={items}
          onDelete={deleteItem}
          toggleCheckbox={toggleItemSelect}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
        <ItemInspector selectedItems={selectedItems} onUpdate={updateItem} />
      </div>
      <div className="addItem">
        <AddItem onAdd={addItem} />
      </div>
    </main>
  );
}

export default App;
