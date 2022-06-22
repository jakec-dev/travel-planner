import React, { useState } from "react";
import { useAppState } from "../../contexts/appState";
import "./AddItem.css";

function AddItem() {
  const { items, itemsActions } = useAppState();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  const handleSubmit = async (newItem) => {
    const newItemWithId = { ...newItem, id: items.length };
    itemsActions.addItem(newItemWithId);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    handleSubmit({ name, brand });
    setName("");
    setBrand("");
  };

  return (
    <div className="paper">
      <h2>Add Item</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="itemName" className="textInput">
          Item name
          <input
            id="itemName"
            type="text"
            placeholder="Add item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="itemBrand" className="textInput">
          Brand
          <input
            id="itemBrand"
            type="text"
            placeholder="Add item brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
