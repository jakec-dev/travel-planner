import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { deleteItem } from "../../../api/itemsAPI";
import { useAppState } from "../../../contexts/appState";

function Item({ item }) {
  const { itemsActions, selectionActions, selectedItems } = useAppState();

  const handleDelete = async () => {
    await deleteItem(item.id).then((resp) => {
      console.log("deleteItem resp: ", resp);
      itemsActions.deleteItem(item.id);
    });
  };

  const handleSelect = () => {
    selectionActions.toggleItem(item.id);
  };

  const isItemSelected = (itemId) => {
    const itemIndex = selectedItems.findIndex(
      (selectedItem) => selectedItem === itemId
    );
    return itemIndex >= 0;
  };

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
