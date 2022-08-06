import React from "react";
import PropTypes from "prop-types";
import Typography from "../../atoms/Typography";
import "./style.css";

function Logo({ variant }) {
  return (
    <Typography className="logo" variant={variant}>
      Travel Planner
    </Typography>
  );
}

Logo.propTypes = {
  variant: PropTypes.string,
};

Logo.defaultProps = {
  variant: "h1",
};

export default Logo;
