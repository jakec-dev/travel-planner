import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

export const ButtonTheme = {
  ERROR: "error",
  INFO: "info",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  WARN: "warn",
};

const Button = forwardRef((props, ref) => {
  const {
    className,
    label,
    theme = "primary",
    type = "button",
    ...otherButtonProps
  } = props;
  const styles = classnames("btn", `btn__${theme}`, className);

  return (
    <button
      className={styles}
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
  label: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(ButtonTheme)),
  type: PropTypes.oneOf(Object.values(ButtonType)),
};

Button.defaultProps = {
  className: undefined,
  label: "",
  theme: ButtonType.PRIMARY,
  type: ButtonType.BUTTON,
};

export default Button;
