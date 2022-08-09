import React from "react";
import EditField from ".";

export default {
  title: "EditField",
  component: EditField,
  argTypes: {
    handleCancel: { action: "handleCancel" },
    handleSave: { action: "handleSave" },
  },
};

function Template(args) {
  return <EditField {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  field: "name",
  item: { id: 1, name: "Item name", brand: "Item brand" },
};
