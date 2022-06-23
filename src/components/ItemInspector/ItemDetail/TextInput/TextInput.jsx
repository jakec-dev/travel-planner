import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSave } from "react-icons/fa";
import { updateItem } from "../../../../api/itemsAPI";
import { useAppState } from "../../../../contexts/appState";

function TextInput({ field, item, setIsEditable }) {
  const { itemsActions } = useAppState();
  const [value, setValue] = useState(item[field]);

  const handleClick = async () => {
    const modifiedItem = { ...item, [field]: value };
    await updateItem(modifiedItem).then((resp) => {
      itemsActions.updateItem(modifiedItem);
      setIsEditable(false);
      console.log("updateItem resp: ", resp);
    });
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
