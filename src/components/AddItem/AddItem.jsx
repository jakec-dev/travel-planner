import React, { useState } from "react";
import { addItem } from "../../api/itemsAPI";
import { validateNewItem } from "../../api/validation/itemsValidation";
import { useItemsState } from "../../contexts/itemsState";
import "./AddItem.css";

function AddItem() {
  const { itemsActions } = useItemsState();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, brand };
    validateNewItem(newItem);
    const createdItem = await addItem(newItem);
    itemsActions.addItem(createdItem);
    setName("");
    setBrand("");
  };

  return (
    <div className="paper">
      <h2>Add Item</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
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
