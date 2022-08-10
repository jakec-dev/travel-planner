import React from "react";
import Logo from ".";

export default {
  title: "Logo",
  component: Logo,
};

function Template(args) {
  return <Logo {...args} />;
}

export const Default = Template.bind({});

export const Variant = Template.bind({});
Variant.args = {
  variant: "h2",
};
