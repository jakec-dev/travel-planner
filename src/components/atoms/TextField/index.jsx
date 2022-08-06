import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

function TextField(props) {
  const { className, id, label, labelProps, ...otherInputProps } = props;
  const inputStyles = classnames("input", className);
  const labelStyles = classnames("label", labelProps.className);

  return (
    <>
      {label ? (
        <label className={labelStyles} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input className={inputStyles} id={id} type="text" {...otherInputProps} />
    </>
  );
}

TextField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelProps: PropTypes.shape({
    className: PropTypes.string,
  }),
};

TextField.defaultProps = {
  className: undefined,
  id: undefined,
  label: "",
  labelProps: {
    className: undefined,
  },
};

export default TextField;
