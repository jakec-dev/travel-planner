import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { deleteItemById } from "../../../api/itemsAPI";
import { useItemsState } from "../../../contexts/itemsState";

function Item({ item }) {
  const { itemsActions, selectionActions, selectedItems } = useItemsState();
  const [deleteErrorMessage, setDeleteErrorMessage] = useState("");

  const handleDelete = async () => {
    try {
      const itemId = item.id;
      const deletedItemId = await deleteItemById(itemId);
      itemsActions.deleteItem(deletedItemId);
      selectionActions.deselectItem(deletedItemId);
    } catch (err) {
      setDeleteErrorMessage(err.message);
    }
  };

  const handleSelect = () => {
    selectionActions.toggleItem(item.id);
  };

  const isItemSelected = useMemo(
    () =>
      selectedItems.findIndex((selectedItem) => selectedItem === item.id) >= 0,
    [selectedItems]
  );

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={handleSelect}
          checked={isItemSelected}
          data-testid={`selItem${item.id}`}
        />
      </td>
      <td>{item.name}</td>
      <td data-testid="itemBrand">{item.brand}</td>
      <td className="alignRight">
        <button
          type="button"
          aria-label={`Delete Item ${item.id}`}
          className="unstyledButton"
          onClick={handleDelete}
        >
          <FaTimes />
        </button>
        {deleteErrorMessage && <p>{deleteErrorMessage}</p>}
      </td>
    </tr>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
  }).isRequired,
};

export default Item;
