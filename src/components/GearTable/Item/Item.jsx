import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function Item({ item, onDelete }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.brand}</td>
      <td>
        <FaTimes onClick={() => onDelete(item.id)} />
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
  onDelete: PropTypes.func.isRequired,
};

export default Item;
