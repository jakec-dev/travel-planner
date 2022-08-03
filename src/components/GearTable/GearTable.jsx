import React, { useEffect, useState } from "react";
import { getItems } from "../../api/itemsAPI";
import { useItemsState } from "../../contexts/itemsState";
import Item from "./Item";

function GearTable() {
  const { items, itemsActions, selectedItems, selectionActions } =
    useItemsState();
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [getItemsErrorMessage, setGetItemsErrorMessage] = useState("");

  const handleSelectAll = () => {
    if (isAllSelected) {
      selectionActions.clearAll();
    } else {
      selectionActions.selectAll(items);
    }
    setIsAllSelected((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      try {
        const itemsInDatabase = await getItems();
        itemsActions.setItems(itemsInDatabase);
      } catch (err) {
        setGetItemsErrorMessage(err.message);
      }
    })();
  }, []);

  useEffect(() => {
    setIsAllSelected(
      items.length !== 0 && items.length === selectedItems.length
    );
  }, [items, selectedItems]);

  return (
    <div className="paper">
      {getItemsErrorMessage ? (
        <p>{getItemsErrorMessage}</p>
      ) : (
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
      )}
    </div>
  );
}

export default GearTable;
