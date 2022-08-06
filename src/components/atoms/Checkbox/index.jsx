import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

function Checkbox(props) {
  const { className, ...inputProps } = props;
  const styles = classnames(className);

  return <input className={styles} type="checkbox" {...inputProps} />;
}

Checkbox.propTypes = {
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  className: undefined,
};

export default Checkbox;
