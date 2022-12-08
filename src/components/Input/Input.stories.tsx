import React from "react";
import { ComponentStory } from "@storybook/react";
import { Input as InputComponent } from "./Input";
import InputDocs from "./InputDocs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Inputs",
  component: InputComponent,
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Input = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Input.args = {
  style: { maxWidth: 500 },
  label: "Name",
  required: true,
  placeholder: "Your name",
};

Input.parameters = {
  docs: {
    page: InputDocs,
  },
};
