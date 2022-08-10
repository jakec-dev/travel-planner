import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { deleteItemById } from "../../../../api/itemsAPI";
import { useItemsState } from "../../../../state/contexts/ItemsStateProvider";
import Checkbox from "../../../atoms/Checkbox";
import IconButton from "../../../atoms/IconButton";

function ItemRow(props) {
  const { item } = props;
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
        <Checkbox
          checked={isItemSelected}
          data-testid={`selItem${item.id}`}
          onChange={handleSelect}
        />
      </td>
      <td>{item.name}</td>
      <td data-testid="itemBrand">{item.brand}</td>
      <td>
        <IconButton
          Icon={FaTimes}
          label={`Delete Item ${item.id}`}
          onClick={handleDelete}
        />
        {deleteErrorMessage && <p>{deleteErrorMessage}</p>}
      </td>
    </tr>
  );
}

ItemRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
  }).isRequired,
};

export default ItemRow;
