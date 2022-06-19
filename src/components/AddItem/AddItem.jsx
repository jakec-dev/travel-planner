import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AddItem.css";

function AddItem({ onAdd }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    onAdd({ name, brand });
    setName("");
    setBrand("");
  };

  return (
    <div className="paper">
      <h2>Add Item</h2>
      <form onSubmit={(e) => onSubmit(e)} style={{ marginBottom: "24px" }}>
        <div className="textInput">
          <label htmlFor="itemName">
            Item name
            <input
              id="itemName"
              type="text"
              placeholder="Add item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="textInput">
          <label htmlFor="itemBrand">
            Brand
            <input
              id="itemBrand"
              type="text"
              placeholder="Add item brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

AddItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddItem;
