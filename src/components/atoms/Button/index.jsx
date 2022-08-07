import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

export const ButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

const Button = forwardRef((props, ref) => {
  const { className, children, type, ...otherButtonProps } = props;
  const styles = classnames(".btn", className);

  return (
    <button
      className={styles}
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(ButtonType)),
};

Button.defaultProps = {
  className: undefined,
  type: ButtonType.BUTTON,
};

export default Button;
