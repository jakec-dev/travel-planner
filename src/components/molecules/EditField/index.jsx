import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import TextField from "../../atoms/TextField";
import IconButton from "../../atoms/IconButton";
import Container from "../../atoms/Container";

function EditField(props) {
  const { errorMessage, handleCancel, field, item, register } = props;

  return (
    <Container flex="spread">
      <TextField
        errorMessage={errorMessage}
        defaultValue={item[field]}
        name={field}
        register={register}
      />
      <IconButton Icon={FaTimes} label="Cancel Edit" onClick={handleCancel} />
    </Container>
  );
}

EditField.propTypes = {
  errorMessage: PropTypes.string,
  field: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string,
  }).isRequired,
  register: PropTypes.func.isRequired,
};

EditField.defaultProps = {
  errorMessage: undefined,
};

export default EditField;
