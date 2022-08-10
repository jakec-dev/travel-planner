import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.css";

const TextField = forwardRef((props, ref) => {
  const {
    className,
    errorMessage,
    id,
    label,
    labelProps,
    name,
    register,
    ...otherInputProps
  } = props;
  const inputStyles = classnames("textField__input", className);
  const labelStyles = classnames("textField__label", labelProps.className);

  return (
    <>
      {label ? (
        <label className={labelStyles} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className={inputStyles}
        id={id}
        ref={ref}
        type="text"
        {...register(name)}
        {...otherInputProps}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
});

TextField.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  labelProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  className: undefined,
  errorMessage: undefined,
  id: undefined,
  label: undefined,
  labelProps: {
    className: undefined,
  },
};

export default TextField;
