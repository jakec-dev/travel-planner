import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSave } from "react-icons/fa";

function TextInput({ field, onSave, item, setIsEditable }) {
  const [value, setValue] = useState(item[field]);

  const handleClick = () => {
    onSave({ ...item, [field]: value });
    setIsEditable(false);
  };

  return (
    <div className="itemDetail_Textfield">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <FaSave onClick={handleClick} />
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
  setIsEditable: PropTypes.func.isRequired,
};

export default TextInput;
