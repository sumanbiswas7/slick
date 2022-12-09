import React from "react";
import { ComponentStory } from "@storybook/react";
import { ToggleSwitch as ToggleSwComp } from "./ToggleSwtich";
import ToggleSwDocs from "./ToggleSwtichDocs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Switch",
  component: ToggleSwComp,
} as any;

const Template: ComponentStory<typeof ToggleSwComp> = (args) => (
  <ToggleSwComp {...args} />
);

export const ToggleSwitch = Template.bind({});
ToggleSwitch.parameters = {
  docs: {
    page: ToggleSwDocs,
  },
};

ToggleSwitch.args = {
  wrapperStyle: { margin: 10 },
};
