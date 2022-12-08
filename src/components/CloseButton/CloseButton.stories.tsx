import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CloseButton as CloseBtnComp } from "./CloseButton";
import CloseBtnDocs from "./CloseButtonDocs.mdx";

export default {
  title: "Components/Buttons",
  component: CloseBtnComp,
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CloseBtnComp> = (args) => (
  <CloseBtnComp {...args} />
);

export const CloseButton = Template.bind({});
CloseButton.args = {
  background: "black",
};

CloseButton.parameters = {
  docs: {
    page: CloseBtnDocs,
  },
};
