import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

export const ButtonTheme = {
  DEFAULT: "default",
  UNSTYLED: "unstyled",
};

function Button(props) {
  const { className, children, disabled, theme, type, ...otherButtonProps } =
    props;
  const styles = classnames("button", theme, { disabled }, className);

  return (
    <button
      className={styles}
      disabled={disabled}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.oneOf(Object.values(ButtonTheme)),
  type: PropTypes.oneOf(Object.values(ButtonType)),
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  theme: ButtonTheme.DEFAULT,
  type: ButtonType.BUTTON,
};

export default Button;
