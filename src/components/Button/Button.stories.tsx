import React from "react";
import { ComponentStory } from "@storybook/react";
import { Button as ButtonComponent } from "./Button";
import ButtonDocs from "./ButtonDocs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Buttons",
  component: ButtonComponent,
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button.args = {
  label: "Settings",
};
Button.parameters = {
  docs: {
    page: ButtonDocs,
  },
};
