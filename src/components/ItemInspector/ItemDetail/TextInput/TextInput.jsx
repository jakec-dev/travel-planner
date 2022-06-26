import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSave } from "react-icons/fa";

function TextInput({ field, item, onSave }) {
  const [value, setValue] = useState(item[field]);
  return (
    <div className="itemDetail_Textfield">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <FaSave onClick={() => onSave(field, value)} />
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
  onSave: PropTypes.func.isRequired,
};

export default TextInput;
