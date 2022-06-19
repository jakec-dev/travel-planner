import React from "react";
import PropTypes from "prop-types";
import ItemDetail from "./ItemDetail";
import "./ItemInspector.css";

function ItemInspector({ selectedItems, onUpdate }) {
  return (
    <aside id="itemInspector">
      {selectedItems.length < 1 && <h2>Select an item</h2>}
      {selectedItems.length === 1 && (
        <ItemDetail item={selectedItems[0]} onUpdate={onUpdate} />
      )}
      {selectedItems.length > 1 && (
        <h2>{selectedItems.length} Items Selected</h2>
      )}
    </aside>
  );
}

ItemInspector.propTypes = {
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ItemInspector;
