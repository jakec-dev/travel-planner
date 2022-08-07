import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

export const TypographyVariant = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  BODY: "p",
};

const Typography = forwardRef((props, ref) => {
  const { className, children, variant, ...otherVariantProps } = props;
  const styles = classnames("typography", variant, className);
  const VariantComponent = variant;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <VariantComponent className={styles} ref={ref} {...otherVariantProps}>
      {children}
    </VariantComponent>
  );
});

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(TypographyVariant)),
};

Typography.defaultProps = {
  className: undefined,
  variant: TypographyVariant.BODY,
};

export default Typography;
