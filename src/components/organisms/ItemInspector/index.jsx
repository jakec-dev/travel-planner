import React from "react";
import Container from "../../atoms/Container";
import { useItemsState } from "../../../state/contexts/ItemsStateProvider";
import ItemDetail from "./ItemDetail";

function ItemInspector() {
  const { selectedItems } = useItemsState();
  return (
    <Container element="aside" pa="m">
      {selectedItems.length < 1 && <h2>Select an item</h2>}
      {selectedItems.length === 1 && <ItemDetail itemId={selectedItems[0]} />}
      {selectedItems.length > 1 && (
        <h2>{selectedItems.length} Items Selected</h2>
      )}
    </Container>
  );
}

export default ItemInspector;
