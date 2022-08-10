import React from "react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

function Template(args) {
  return <Button {...args} />;
}

export const Error = Template.bind({});
Error.args = {
  color: "error",
  label: "Error",
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
  label: "Info",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Secondary",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warn",
  label: "Warning",
};
