import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import TextInput from "./TextInput";
import { updateItem } from "../../../api/itemsAPI";
import { useItemsState } from "../../../contexts/itemsState";
import "./ItemDetail.css";
import { existingItemSchema } from "../../../api/validation/itemsSchema";

function ItemDetail({ itemId }) {
  const { items, itemsActions } = useItemsState();
  const item = items.find((i) => i.id === itemId);
  const [editName, setEditName] = useState(false);
  const [editBrand, setEditBrand] = useState(false);
  const [saveErrorMessage, setSaveErrorMessage] = useState("");

  const handleSave = (setEditField) => async (field, value) => {
    const modifiedItem = { ...item, [field]: value };
    try {
      existingItemSchema.validate(modifiedItem);
      const updatedItem = await updateItem(modifiedItem);
      itemsActions.updateItem(updatedItem);
      setEditField(false);
      setSaveErrorMessage("");
    } catch (err) {
      setSaveErrorMessage(err.message);
    }
  };

  const handleCancel = (setEditField) => () => {
    setEditField(false);
  };

  return (
    <>
      {editName ? (
        <TextInput
          field="name"
          item={item}
          handleSave={handleSave(setEditName)}
          handleCancel={handleCancel(setEditName)}
        />
      ) : (
        <div className="itemDetail_Header">
          <h2 data-testid="itemDetailName">{item.name}</h2>
          <button
            type="button"
            aria-label="Edit Name"
            onClick={() => setEditName(true)}
            className="unstyledButton"
          >
            <FaEdit />
          </button>
        </div>
      )}
      {editBrand ? (
        <TextInput
          field="brand"
          item={item}
          handleSave={handleSave(setEditBrand)}
          handleCancel={handleCancel(setEditBrand)}
        />
      ) : (
        <div className="itemDetail_Textfield">
          <p data-testid="itemDetailBrand">Brand: {item.brand}</p>
          <button
            type="button"
            aria-label="Edit Brand"
            onClick={() => setEditBrand(true)}
            className="unstyledButton"
          >
            <FaEdit />
          </button>
        </div>
      )}
      {saveErrorMessage && <p>{saveErrorMessage}</p>}
    </>
  );
}

ItemDetail.propTypes = {
  itemId: PropTypes.number.isRequired,
};

export default ItemDetail;
