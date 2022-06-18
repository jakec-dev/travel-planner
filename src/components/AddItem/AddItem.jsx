import React, { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
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
      <div>
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
      <input type="submit" value="Add Item" />
    </form>
  );
}

AddItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddItem;
