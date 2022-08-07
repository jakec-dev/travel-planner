import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

const Card = forwardRef((props, ref) => {
  const { children, className, ...otherDivProps } = props;
  const styles = classnames("card", className);
  return (
    <div className={styles} ref={ref} {...otherDivProps}>
      {children}
    </div>
  );
});

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: undefined,
};

export default Card;
