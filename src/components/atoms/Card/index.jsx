import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

function Card(props) {
  const { children, className } = props;
  const styles = classnames("card", className);
  return <div className={styles}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: undefined,
};

export default Card;
