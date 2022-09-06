import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import TextField from "../../atoms/TextField";
import IconButton from "../../atoms/IconButton";
import Container from "../../atoms/Container";
import itemsPropType from "../../_settings/_propTypes";

function EditField(props) {
  const { errors, handleCancel, inputProps, field, item, register } = props;

  return (
    <Container flex="spread">
      <TextField
        errors={errors}
        defaultValue={item[field] || ""}
        name={field}
        register={register}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...inputProps}
      />
      <IconButton Icon={FaTimes} label="Cancel Edit" onClick={handleCancel} />
    </Container>
  );
}

EditField.propTypes = {
  errors: PropTypes.shape({
    message: PropTypes.string,
  }),
  field: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  inputProps: PropTypes.shape({
    min: PropTypes.number,
    step: PropTypes.number,
    type: PropTypes.string,
  }),
  item: itemsPropType.isRequired,
  register: PropTypes.func.isRequired,
};

EditField.defaultProps = {
  errors: undefined,
  inputProps: undefined,
};

export default EditField;
