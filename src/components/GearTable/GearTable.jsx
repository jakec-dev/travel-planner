import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function GearTable({ items, onDelete }) {
  return items.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Item key={item.id} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  ) : null;
}

GearTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      brand: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GearTable;
