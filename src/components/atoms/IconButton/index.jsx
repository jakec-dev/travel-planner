import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

export const IconButtonType = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

const IconButton = forwardRef((props, ref) => {
  const { className, Icon, label, type, ...otherButtonProps } = props;
  const styles = classnames("iconButton", className);

  return (
    <button
      aria-label={label}
      className={styles}
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...otherButtonProps}
    >
      <Icon />
    </button>
  );
});

IconButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  type: PropTypes.oneOf(Object.values(IconButtonType)),
};

IconButton.defaultProps = {
  className: undefined,
  type: IconButtonType.BUTTON,
};

export default IconButton;
