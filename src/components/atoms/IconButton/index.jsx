import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

function IconButton(props) {
  const { className, Icon, label, ...otherButtonProps } = props;
  const styles = classnames("btn__icon", className);

  return (
    <button
      aria-label={label}
      className={styles}
      type="button"
      {...otherButtonProps}
    >
      <Icon />
    </button>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

IconButton.defaultProps = {
  className: undefined,
};

export default IconButton;
