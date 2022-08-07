import React, { forwardRef } from "react";

const Checkbox = forwardRef((props, ref) => {
  const { ...inputProps } = props;

  return <input ref={ref} type="checkbox" {...inputProps} />;
});

export default Checkbox;
