import React from "react";
import { FaBluetooth } from "react-icons/fa";
import IconButton from ".";

export default {
  title: "IconButton",
  component: IconButton,
};

function Template(args) {
  return <IconButton {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  Icon: FaBluetooth,
  label: "Toggle Bluetooth",
};
