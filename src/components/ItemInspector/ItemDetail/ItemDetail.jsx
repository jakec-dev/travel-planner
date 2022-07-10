import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import TextInput from "./TextInput";
import { updateItem } from "../../../api/itemsAPI";
import { useItemsState } from "../../../contexts/itemsState";
import "./ItemDetail.css";

function ItemDetail({ itemId }) {
  const { items, itemsActions } = useItemsState();
  const item = items.find((i) => i.id === itemId);
  const [editName, setEditName] = useState(false);
  const [editBrand, setEditBrand] = useState(false);

  const handleSave = (setEditField) => async (field, value) => {
    const modifiedItem = { ...item, [field]: value };
    await updateItem(modifiedItem).then(() => {
      itemsActions.updateItem(modifiedItem);
      setEditField(false);
    });
  };

  return (
    <>
      {editName ? (
        <TextInput field="name" item={item} onSave={handleSave(setEditName)} />
      ) : (
        <div className="itemDetail_Header">
          <h2>{item.name}</h2>
          <FaEdit onClick={() => setEditName(true)} />
        </div>
      )}
      {editBrand ? (
        <TextInput
          field="brand"
          item={item}
          onSave={handleSave(setEditBrand)}
        />
      ) : (
        <div className="itemDetail_Textfield">
          <p>Brand: {item.brand}</p>
          <FaEdit onClick={() => setEditBrand(true)} />
        </div>
      )}
    </>
  );
}

ItemDetail.propTypes = {
  itemId: PropTypes.number.isRequired,
};

export default ItemDetail;
