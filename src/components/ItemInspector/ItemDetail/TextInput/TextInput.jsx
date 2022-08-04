import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSave, FaTimes } from "react-icons/fa";

function TextInput({ field, item, handleSave, handleCancel }) {
  const [value, setValue] = useState(item[field]);
  return (
    <div className="itemDetail_Textfield">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        aria-label="Save Edits"
        onClick={() => handleSave(field, value)}
        className="unstyledButton"
      >
        <FaSave />
      </button>
      <button
        type="button"
        aria-label="Cancel Edit"
        onClick={handleCancel}
        className="unstyledButton"
      >
        <FaTimes />
      </button>
    </div>
  );
}

TextInput.propTypes = {
  field: PropTypes.string.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
  }).isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default TextInput;
