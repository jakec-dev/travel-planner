import React from "react";
import TextField from ".";

export default {
  title: "TextField",
  component: TextField,
};

function Template(args) {
  return <TextField {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Example label",
};
