import React, { useEffect, useState } from "react";
import { getItems } from "../../../api/itemsAPI";
import { useItemsState } from "../../atoms/ItemsStateProvider";
import Card from "../../atoms/Card";
import Checkbox from "../../atoms/Checkbox";
import ItemRow from "./ItemRow";
import "./style.css";

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
        if (itemsInDatabase) {
          itemsActions.setItems(itemsInDatabase);
        }
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
    <Card>
      {getItemsErrorMessage ? (
        <p>{getItemsErrorMessage}</p>
      ) : (
        <table className="gearTable">
          <thead>
            <tr>
              <th>
                <Checkbox checked={isAllSelected} onChange={handleSelectAll} />
              </th>
              <th>Name</th>
              <th>Brand</th>
              <th>Actions</th>
            </tr>
          </thead>
          {items && (
            <tbody>
              {items.map((item) => (
                <ItemRow key={item.id} item={item} />
              ))}
            </tbody>
          )}
        </table>
      )}
    </Card>
  );
}

export default GearTable;
