import React, { useState } from "react";
import { addItem } from "../../api/itemsAPI";
import { newItemSchema } from "../../api/validation/itemsSchema";
import { useItemsState } from "../../contexts/itemsState";
import "./AddItem.css";

function AddItem() {
  const { itemsActions } = useItemsState();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, brand: brand || undefined };
    try {
      await newItemSchema.validate(newItem);
      const createdItem = await addItem(newItem);
      itemsActions.addItem(createdItem);
      setName("");
      setBrand("");
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleNameChange = async (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
    const newItem = { name: nameValue, brand: brand || undefined };
    const isValid = await newItemSchema.isValid(newItem);
    setSubmitDisabled(!isValid);
  };

  const handleBrandChange = async (e) => {
    const brandValue = e.target.value;
    setBrand(brandValue);
    const newItem = { name, brand: brandValue };
    const isValid = await newItemSchema.isValid(newItem);
    setSubmitDisabled(!isValid);
  };

  return (
    <div className="paper">
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName" className="textInput">
          Item name
          <input
            id="itemName"
            placeholder="Add item name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor="itemBrand" className="textInput">
          Brand
          <input
            id="itemBrand"
            placeholder="Add item brand"
            type="text"
            value={brand}
            onChange={handleBrandChange}
          />
        </label>
        <button type="submit" disabled={submitDisabled}>
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;
