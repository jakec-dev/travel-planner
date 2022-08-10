import React from "react";
import Container from ".";

export default {
  title: "Container",
  component: Container,
};

function Template(args) {
  return (
    <>
      <Container {...args}>
        <div>Container 1 Content</div>
        <div>Container 1 More content</div>
        <div>Container 1 Even more content</div>
      </Container>
      <Container {...args}>
        <div>Container 2 Content</div>
        <div>Container 2 More content</div>
        <div>Container 2 Even more content</div>
        <div>Container 2 Bonus content</div>
      </Container>
    </>
  );
}

export const Default = Template.bind({});
Default.args = {};

export const FlexSpread = Template.bind({});
FlexSpread.args = {
  flex: "spread",
};

export const Margins = Template.bind({});
Margins.args = {
  ma: "m",
};

export const Padding = Template.bind({});
Padding.args = {
  pa: "m",
};

export const PageWidth = Template.bind({});
PageWidth.args = {
  flex: "spread",
  width: "page",
};
