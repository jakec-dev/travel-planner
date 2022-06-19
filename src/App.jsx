import React, { useState } from "react";
import AddItem from "./components/AddItem";
import GearTable from "./components/GearTable";
import Header from "./components/Header";
import ItemInspector from "./components/ItemInspector";

function App() {
  // const [showAddItem, setShowAddItem] = useState(false);
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
    setSelectedItems(
      items.map((item) => {
        if (item.id === modifiedItem.id) return modifiedItem;
        return item;
      })
    );
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
        />
        <ItemInspector selectedItems={selectedItems} onUpdate={updateItem} />
      </div>
      {/* <button
        type="button"
        className="showAddItem"
        onClick={() => setShowAddItem(!showAddItem)}
      >
        {showAddItem ? "Close" : "Add Item"}
  </button> */}
      <div className="addItem">
        <AddItem onAdd={addItem} />
      </div>
    </main>
  );
}

export default App;
