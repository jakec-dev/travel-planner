import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function GearTable({ items, onDelete, toggleCheckbox }) {
  return (
    <div className="paper">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Brand</th>
            <th className="alignRight">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDelete={onDelete}
              toggleCheckbox={() => toggleCheckbox(item)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

GearTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      brand: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
};

export default GearTable;
