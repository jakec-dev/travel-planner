import React from "react";
import Checkbox from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
};

function Template(args) {
  return <Checkbox {...args} />;
}

export const Default = Template.bind({});
