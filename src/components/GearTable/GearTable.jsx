import React, { useEffect, useMemo } from "react";
import { getItems } from "../../api/itemsAPI";
import { useItemsState } from "../../contexts/itemsState";
import Item from "./Item";

function GearTable() {
  const { items, itemsActions, selectedItems, selectionActions } =
    useItemsState();

  const isAllSelected = useMemo(
    () => items.length !== 0 && items.length === selectedItems.length,
    [items, selectedItems]
  );

  const handleSelectAll = () => {
    if (isAllSelected) {
      selectionActions.clearAll();
    } else {
      selectionActions.selectAll(items);
    }
  };

  useEffect(() => {
    (async () => {
      const itemsInDatabase = await getItems();
      itemsActions.setItems(itemsInDatabase);
    })();
  }, []);

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
            <Item key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GearTable;
