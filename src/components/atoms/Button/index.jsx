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
  const {
    ariaLabel,
    className,
    children,
    disabled,
    onClick,
    testId,
    theme,
    type,
  } = props;
  const styles = classnames("button", theme, { disabled }, className);

  return (
    <button
      aria-label={ariaLabel}
      className={styles}
      data-testid={testId}
      disabled={disabled}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  testId: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(ButtonTheme)),
  type: PropTypes.oneOf(Object.values(ButtonType)),
};

Button.defaultProps = {
  ariaLabel: undefined,
  className: undefined,
  disabled: false,
  onClick: undefined,
  testId: undefined,
  theme: ButtonTheme.DEFAULT,
  type: ButtonType.BUTTON,
};

export default Button;
