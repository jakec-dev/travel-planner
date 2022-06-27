import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { deleteItem } from "../../../api/itemsAPI";
import { useItemsState } from "../../../contexts/itemsState";

function Item({ item }) {
  const { itemsActions, selectionActions, selectedItems } = useItemsState();

  const handleDelete = async () => {
    await deleteItem(item.id).then((resp) => {
      console.log("deleteItem resp: ", resp);
      itemsActions.deleteItem(item.id);
      selectionActions.toggleItem(item.id);
    });
  };

  const handleSelect = () => {
    selectionActions.toggleItem(item.id);
  };

  const isItemSelected = useCallback(
    (itemId) => {
      const itemIndex = selectedItems.findIndex(
        (selectedItem) => selectedItem === itemId
      );
      return itemIndex >= 0;
    },
    [selectedItems]
  );

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isItemSelected(item.id)}
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
