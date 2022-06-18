import React, { useState } from "react";
import AddItem from "./components/AddItem";
import GearTable from "./components/GearTable";
import Header from "./components/Header";

function App() {
  const [showAddItem, setShowAddItem] = useState(false);

  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, ...item };
    setItems([...items, newItem]);
    setShowAddItem(false);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <button type="button" onClick={() => setShowAddItem(!showAddItem)}>
        {showAddItem ? "Close" : "Add"}
      </button>
      {showAddItem && <AddItem onAdd={addItem} />}
      {items.length > 0 && <GearTable items={items} onDelete={deleteItem} />}
    </>
  );
}

export default App;
