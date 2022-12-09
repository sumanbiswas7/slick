import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputV2 as InputComponent } from "./InputV2";
import InputDocs from "./InputV2Docs.mdx";
import { MdOutlineAccountCircle } from "react-icons/md";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Inputs",
  component: InputComponent,
} as any;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Input2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Input2.args = {
  inputStyle: { maxWidth: 500 },
  wrapperStyle: { marginTop: 30 },
  placeholder: "Your name",
  icon: <MdOutlineAccountCircle color="#CED4DA" style={{ marginTop: 3 }} />,
};

Input2.parameters = {
  docs: {
    page: InputDocs,
  },
};
