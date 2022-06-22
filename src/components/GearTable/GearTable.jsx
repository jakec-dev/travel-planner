import React from "react";
import { useAppState } from "../../contexts/appState";
import Item from "./Item";

function GearTable() {
  const { items, selectedItems, selectionActions } = useAppState();

  const isAllSelected =
    items.length !== 0 && items.length === selectedItems.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      selectionActions.clearAll();
    } else {
      selectionActions.selectAll(items);
    }
  };

  return (
    <div className="paper">
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th>Name</th>
            <th>Brand</th>
            <th className="alignRight">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GearTable;
