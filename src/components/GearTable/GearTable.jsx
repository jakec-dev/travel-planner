import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

function GearTable({
  items,
  onDelete,
  selectedItems,
  setSelectedItems,
  toggleCheckbox,
}) {
  const isAllSelected =
    items.length === selectedItems.length && items.length !== 0;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items);
    }
  };

  const isChecked = (item) => {
    if (selectedItems.find((selectedItem) => selectedItem.id === item.id))
      return true;
    return false;
  };

  return (
    <div className="paper">
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={isAllSelected}
              />
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
              checked={isChecked(item)}
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
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string,
    })
  ).isRequired,
  setSelectedItems: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
};

export default GearTable;
