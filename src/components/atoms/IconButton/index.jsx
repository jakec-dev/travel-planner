import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

const IconButton = forwardRef((props, ref) => {
  const { className, Icon, label, ...otherButtonProps } = props;
  const styles = classnames("iconButton", className);

  return (
    <button
      aria-label={label}
      className={styles}
      ref={ref}
      type="button"
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
};

IconButton.defaultProps = {
  className: undefined,
};

export default IconButton;
