import React from "react";
import { useAppState } from "../../contexts/appState";
import ItemDetail from "./ItemDetail";
import "./ItemInspector.css";

function ItemInspector() {
  const { selectedItems } = useAppState();
  return (
    <aside id="itemInspector">
      {selectedItems.length < 1 && <h2>Select an item</h2>}
      {selectedItems.length === 1 && <ItemDetail itemId={selectedItems[0]} />}
      {selectedItems.length > 1 && (
        <h2>{selectedItems.length} Items Selected</h2>
      )}
    </aside>
  );
}

export default ItemInspector;
