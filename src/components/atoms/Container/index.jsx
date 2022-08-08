import React, { forwardRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./style.css";

const ContainerAlignment = {
  CENTER: "center",
};

const ContainerElements = {
  ARTICLE: "article",
  ASIDE: "aside",
  DETAILS: "details",
  DIV: "div",
  FIGCAPTION: "figcaption",
  FIGURE: "figure",
  FOOTER: "footer",
  HEADER: "header",
  MAIN: "main",
  NAV: "nav",
  SECTION: "section",
  SPAN: "span",
  SUMMARY: "summary",
};

const ContainerFlex = {
  DEFAULT: "default",
  SPREAD: "spread",
};

const ContainerSpacingSizes = {
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
};

const ContainerWidth = {
  FULL: "full",
  PAGE: "page",
};

const Container = forwardRef((props, ref) => {
  const { align, children, className, element, flex, mt, pa, width } = props;
  const ElementComponent = element;
  const styles = classnames(
    { [`container__align--${align}`]: align },
    { container__flex: flex },
    { [`container__flex--${flex}`]: flex },
    { [`container__mt--${mt}`]: mt },
    { [`container__pa--${pa}`]: pa },
    { [`container__width--${width}`]: width },
    className
  );
  return (
    <ElementComponent className={styles} ref={ref}>
      {children}
    </ElementComponent>
  );
});

Container.propTypes = {
  align: PropTypes.oneOf(Object.values(ContainerAlignment)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  element: PropTypes.oneOf(Object.values(ContainerElements)),
  flex: PropTypes.oneOf(Object.values(ContainerFlex)),
  mt: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  pa: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  width: PropTypes.oneOf(Object.values(ContainerWidth)),
};

Container.defaultProps = {
  align: undefined,
  className: undefined,
  element: ContainerElements.DIV,
  flex: undefined,
  mt: undefined,
  pa: undefined,
  width: ContainerWidth.FULL,
};

export default Container;
