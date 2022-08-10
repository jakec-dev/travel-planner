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
  M: "m",
  NONE: "none",
};

const ContainerWidth = {
  FULL: "full",
  PAGE: "page",
};

const Container = forwardRef((props, ref) => {
  const {
    align,
    children,
    className,
    element,
    flex,
    ma,
    mb,
    ml,
    mr,
    mt,
    pa,
    pb,
    pl,
    pr,
    pt,
    width,
  } = props;
  const ElementComponent = element;
  const styles = classnames(
    { [`container__align--${align}`]: align },
    { container__flex: flex },
    { [`container__flex--${flex}`]: flex },
    { [`container__ma--${ma}`]: ma },
    { [`container__mb--${mb}`]: mb },
    { [`container__ml--${ml}`]: ml },
    { [`container__mr--${mr}`]: mr },
    { [`container__mt--${mt}`]: mt },
    { [`container__pa--${pa}`]: pa },
    { [`container__pb--${pb}`]: pb },
    { [`container__pl--${pl}`]: pl },
    { [`container__pr--${pr}`]: pr },
    { [`container__pt--${pt}`]: pt },
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
  ma: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  mb: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  ml: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  mr: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  mt: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  pa: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  pb: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  pl: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  pr: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  pt: PropTypes.oneOf(Object.values(ContainerSpacingSizes)),
  width: PropTypes.oneOf(Object.values(ContainerWidth)),
};

Container.defaultProps = {
  align: undefined,
  className: undefined,
  element: ContainerElements.DIV,
  flex: undefined,
  ma: undefined,
  mb: undefined,
  ml: undefined,
  mr: undefined,
  mt: undefined,
  pa: undefined,
  pb: undefined,
  pl: undefined,
  pr: undefined,
  pt: undefined,
  width: ContainerWidth.FULL,
};

export default Container;
