import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSave, FaTimes } from "react-icons/fa";
import TextField from "../../atoms/TextField";
import IconButton from "../../atoms/IconButton";
import Container from "../../atoms/Container";

function EditField(props) {
  const { field, item, handleSave, handleCancel } = props;
  const [value, setValue] = useState(item[field]);
  return (
    <Container flex="spread">
      <TextField value={value} onChange={(e) => setValue(e.target.value)} />
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
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
  }).isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default EditField;
