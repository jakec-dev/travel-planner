import React from "react";
import Typography from ".";

export default {
  title: "Typography",
  component: Typography,
};

function Template(args) {
  return <Typography {...args}>Example text</Typography>;
}

export const Body = Template.bind({});
Body.args = {
  variant: "p",
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: "h2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: "h3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: "h4",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: "h5",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  variant: "h6",
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  color: "primary",
};
