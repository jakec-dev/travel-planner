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
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="pageContainer">
      <Header />
      <button
        type="button"
        id="showAddItem"
        onClick={() => setShowAddItem(!showAddItem)}
      >
        {showAddItem ? "Close" : "Add Item"}
      </button>
      {showAddItem && <AddItem onAdd={addItem} />}
      {items.length > 0 && <GearTable items={items} onDelete={deleteItem} />}
    </div>
  );
}

export default App;
