import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

const InputTypes = {
  CHECKBOX: "checkbox",
  TEXT: "text",
};

function Input(props) {
  const { checked, className, id, onChange, placeholder, testId, type, value } =
    props;
  const styles = classnames(type, className);

  return (
    <input
      checked={checked}
      className={styles}
      data-testid={testId}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  );
}

Input.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testId: PropTypes.string,
  type: PropTypes.oneOf(Object.values(InputTypes)),
  value: PropTypes.string,
};

Input.defaultProps = {
  checked: undefined,
  className: undefined,
  id: undefined,
  onChange: undefined,
  placeholder: undefined,
  testId: undefined,
  type: InputTypes.TEXT,
  value: undefined,
};

export default Input;
