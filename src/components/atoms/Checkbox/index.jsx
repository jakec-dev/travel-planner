import React from "react";

function Checkbox(props) {
  const { ...inputProps } = props;

  return <input type="checkbox" {...inputProps} />;
}

export default Checkbox;
