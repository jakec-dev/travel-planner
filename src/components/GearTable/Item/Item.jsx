import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { deleteItemById } from "../../../api/itemsAPI";
import { useItemsState } from "../../../contexts/itemsState";
import { validateNumber } from "../../../api/validation/dataValidation";

function Item({ item }) {
  const { itemsActions, selectionActions, selectedItems } = useItemsState();

  const handleDelete = async () => {
    const itemId = item.id;
    validateNumber(itemId);
    const deletedItemId = await deleteItemById(itemId);
    itemsActions.deleteItem(deletedItemId);
    selectionActions.deselectItem(deletedItemId);
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
          checked={isItemSelected}
          onChange={handleSelect}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.brand}</td>
      <td className="alignRight">
        <FaTimes onClick={handleDelete} />
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
