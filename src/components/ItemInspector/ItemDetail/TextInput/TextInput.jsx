import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSave, FaTimes } from "react-icons/fa";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";

function TextInput({ field, item, handleSave, handleCancel }) {
  const [value, setValue] = useState(item[field]);
  return (
    <div className="itemDetail_Textfield">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        ariaLabel="Save Edits"
        onClick={() => handleSave(field, value)}
        theme="unstyled"
      >
        <FaSave />
      </Button>
      <Button ariaLabel="Cancel Edit" onClick={handleCancel} theme="unstyled">
        <FaTimes />
      </Button>
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
