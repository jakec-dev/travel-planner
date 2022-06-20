import React, { useEffect, useState } from "react";
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
    fetch("https://jakecdev-travel-planner-server.herokuapp.com/item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
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

  useEffect(() => {
    fetch("https://jakecdev-travel-planner-server.herokuapp.com/items")
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data.items);
      });
  }, []);

  const [itemId, setItemId] = useState(0);
  const fetchItemTest = () => {
    fetch(`http://localhost:5000/item/${itemId}`)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  const [itemToDelete, setItemToDelete] = useState(0);
  const deleteItemTest = () => {
    fetch(`http://localhost:5000/item/${itemToDelete}`, { method: "DELETE" })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
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
      <div>
        <input onChange={(e) => setItemId(e.target.value)} />
        <button type="button" onClick={fetchItemTest}>
          Fetch item by ID (check console)
        </button>
      </div>
      <div>
        <input onChange={(e) => setItemToDelete(e.target.value)} />
        <button type="button" onClick={deleteItemTest}>
          Delete item by ID (check console)
        </button>
      </div>
    </main>
  );
}

export default App;
