import React from "react";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import EditField from "../../../../molecules/EditField";
import Typography from "../../../../atoms/Typography";
import IconButton from "../../../../atoms/IconButton";
import Container from "../../../../atoms/Container";
import "./style.css";
import itemsPropType from "../../../../_settings/_propTypes";

function ItemField(props) {
  const {
    dataTestId,
    editFields,
    errors,
    inputProps,
    item,
    field,
    register,
    resetField,
    setEditFields,
  } = props;
  const isEditMode = editFields.find((i) => i === field);
  const handleCancel = () => {
    setEditFields((prev) => prev.filter((i) => i !== field));
    resetField(field);
  };

  return isEditMode ? (
    <EditField
      errors={errors}
      field={field}
      handleCancel={handleCancel}
      inputProps={inputProps}
      item={item}
      register={register}
    />
  ) : (
    <Container flex="spread">
      <Typography data-testid={dataTestId}>
        <span className="itemField__label">{field}</span>: {item[field]}
      </Typography>
      <IconButton
        Icon={FaEdit}
        label={`Edit ${field}`}
        onClick={() => setEditFields((prev) => [...prev, field])}
      />
    </Container>
  );
}

ItemField.propTypes = {
  dataTestId: PropTypes.string,
  editFields: PropTypes.arrayOf(PropTypes.string).isRequired,
  errors: PropTypes.shape({
    message: PropTypes.string,
  }),
  field: PropTypes.string.isRequired,
  inputProps: PropTypes.shape({
    min: PropTypes.number,
    step: PropTypes.number,
    type: PropTypes.string,
  }),
  item: itemsPropType.isRequired,
  register: PropTypes.func.isRequired,
  resetField: PropTypes.func.isRequired,
  setEditFields: PropTypes.func.isRequired,
};

ItemField.defaultProps = {
  dataTestId: undefined,
  errors: undefined,
  inputProps: undefined,
};

export default ItemField;
