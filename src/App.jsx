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
    fetch("https://jakecdev-travel-planner-server.herokuapp.com/item", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setItems([...items, newItem]);
        console.log(data);
      });
  };

  const deleteItem = (id) => {
    fetch(`https://jakecdev-travel-planner-server.herokuapp.com/item/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setItems(items.filter((item) => item.id !== id));
        setSelectedItems(selectedItems.filter((o) => o.id !== id));
        console.log(data);
      });
  };

  const updateItem = (modifiedItem) => {
    fetch(`https://jakecdev-travel-planner-server.herokuapp.com`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedItem),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setItems(
          items.map((item) => {
            if (item.id === modifiedItem.id) return modifiedItem;
            return item;
          })
        );
        setSelectedItems([modifiedItem]);
        console.log(data.items);
      });
  };

  const toggleItemSelect = (item) => {
    fetch(
      `https://jakecdev-travel-planner-server.herokuapp.com/item/${item.id}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        const index = selectedItems.findIndex((o) => o.id === data.id);
        if (index === -1) {
          setSelectedItems([...selectedItems, data]);
          return;
        }
        setSelectedItems(selectedItems.filter((o) => o.id !== data.id));
        console.log(data);
      });
  };

  useEffect(() => {
    fetch("https://jakecdev-travel-planner-server.herokuapp.com/items")
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data.items);
      });
  }, []);

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
