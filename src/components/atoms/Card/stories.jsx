import React from "react";
import Card from ".";

export default {
  title: "Card",
  component: Card,
};

function Template(args) {
  return <Card {...args}>Content</Card>;
}

export const Default = Template.bind({});
