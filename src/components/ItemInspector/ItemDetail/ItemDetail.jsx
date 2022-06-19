import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import TextInput from "./TextInput";
import "./ItemDetail.css";

function ItemDetail({ item, onUpdate }) {
  const [editName, setEditName] = useState(false);
  const [editBrand, setEditBrand] = useState(false);
  return (
    <>
      {editName ? (
        <TextInput
          item={item}
          field="name"
          onSave={onUpdate}
          setIsEditable={setEditName}
        />
      ) : (
        <div className="itemDetail_Header">
          <h2>{item.name}</h2>
          <FaEdit onClick={() => setEditName(true)} />
        </div>
      )}
      {editBrand ? (
        <TextInput
          item={item}
          field="brand"
          onSave={onUpdate}
          setIsEditable={setEditBrand}
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
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ItemDetail;
