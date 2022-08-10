import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

export const ButtonColor = {
  ERROR: "error",
  INFO: "info",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  WARN: "warn",
};

const Button = forwardRef((props, ref) => {
  const { className, color, label, onClick, type, ...otherButtonProps } = props;
  const styles = classnames("btn", `btn__${color}`, className);

  return (
    <button
      className={styles}
      onClick={onClick}
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...otherButtonProps}
    >
      {label}
    </button>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ButtonColor)),
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(Object.values(ButtonType)),
};

Button.defaultProps = {
  className: "",
  label: "",
  onClick: () => {},
  color: ButtonColor.PRIMARY,
  type: ButtonType.BUTTON,
};

export default Button;
