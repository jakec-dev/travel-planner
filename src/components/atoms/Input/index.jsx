import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

const InputTypes = {
  CHECKBOX: "checkbox",
  TEXT: "text",
};

function Input(props) {
  const { checked, className, onChange, placeholder, type } = props;
  const styles = classnames(type, className);

  return (
    <input
      checked={checked}
      className={styles}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

Input.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(Object.values(InputTypes)),
};

Input.defaultProps = {
  checked: undefined,
  className: undefined,
  onChange: undefined,
  placeholder: undefined,
  type: InputTypes.TEXT,
};

export default Input;
