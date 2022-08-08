import React from "react";
import Button from "../components/atoms/Button";

export default {
  title: "Button",
  component: Button,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  label: "Button Text",
};
