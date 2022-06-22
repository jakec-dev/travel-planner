import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSave } from "react-icons/fa";
import { useAppState } from "../../../../contexts/appState";

function TextInput({ field, item, setIsEditable }) {
  const { itemsActions } = useAppState();
  const [value, setValue] = useState(item[field]);

  const handleClick = () => {
    itemsActions.updateItem({ ...item, [field]: value });
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
  setIsEditable: PropTypes.func.isRequired,
};

export default TextInput;
