import React from "react";
import { ComponentStory } from "@storybook/react";
import { ToggleSwitchV2 as ToggleSwComp } from "./ToggleSwtichV2";
import ToggleSwDocs from "./ToggleSwtichV2Docs.mdx";

export default {
  title: "Components/Switch",
  component: ToggleSwComp,
} as any;

const Template: ComponentStory<typeof ToggleSwComp> = (args) => (
  <ToggleSwComp {...args} />
);

export const ToggleSwitch2 = Template.bind({});
ToggleSwitch2.parameters = {
  docs: {
    page: ToggleSwDocs,
  },
};
