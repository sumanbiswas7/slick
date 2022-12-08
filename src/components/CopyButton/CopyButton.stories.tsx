import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import ButtonDocs from "./ButtonDocs.mdx";
import { CopyButton as CopyBtnComp } from "./CopyButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Buttons",
  component: CopyBtnComp,
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CopyButton> = (args) => (
  <CopyBtnComp {...args} />
);

// export const CopyButton = Template.bind({});
