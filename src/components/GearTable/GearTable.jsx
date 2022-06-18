import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function GearTable({ items, onDelete }) {
  return items.length > 0 ? (
    <div className="paper centerBlock">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th className="alignRight">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Item key={item.id} item={item} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
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
