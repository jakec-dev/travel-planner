import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSave, FaTimes } from "react-icons/fa";
import TextField from "../../atoms/TextField";
import IconButton from "../../atoms/IconButton";
import Container from "../../atoms/Container";

function EditField(props) {
  const { handleCancel, handleSave, field, item } = props;
  const [value, setValue] = useState(item[field]);
  return (
    <Container flex="spread">
      <TextField onChange={(e) => setValue(e.target.value)} value={value} />
      <IconButton
        Icon={FaSave}
        label="Save Edits"
        onClick={() => handleSave(field, value)}
      />
      <IconButton Icon={FaTimes} label="Cancel Edit" onClick={handleCancel} />
    </Container>
  );
}

EditField.propTypes = {
  field: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
  }).isRequired,
};

export default EditField;
