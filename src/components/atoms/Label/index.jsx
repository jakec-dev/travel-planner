import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

function Label(props) {
  const { children, className, htmlFor, id } = props;
  const styles = classnames("label", className);

  return (
    <label className={styles} htmlFor={htmlFor} id={id}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Label.defaultProps = {
  className: undefined,
  id: undefined,
};

export default Label;
