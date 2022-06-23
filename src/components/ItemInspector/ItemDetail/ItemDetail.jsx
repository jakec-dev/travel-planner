import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import TextInput from "./TextInput";
import { useAppState } from "../../../contexts/appState";
import "./ItemDetail.css";

function ItemDetail({ itemId }) {
  const { items } = useAppState();
  const item = items.find((i) => i.id === itemId);
  const [editName, setEditName] = useState(false);
  const [editBrand, setEditBrand] = useState(false);
  return (
    <>
      {editName ? (
        <TextInput item={item} field="name" setIsEditable={setEditName} />
      ) : (
        <div className="itemDetail_Header">
          <h2>{item.name}</h2>
          <FaEdit onClick={() => setEditName(true)} />
        </div>
      )}
      {editBrand ? (
        <TextInput item={item} field="brand" setIsEditable={setEditBrand} />
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
