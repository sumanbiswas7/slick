import React from "react";
import { ComponentStory } from "@storybook/react";
import { CircleLoaderV2 as LoaderComponent } from "./CircleLoaderV2";
import LoaderDocs from "./CircleLoaderDocsV2.mdx";

export default {
  title: "Components/Loaders",
  component: LoaderComponent,
} as any;

const Template: ComponentStory<typeof LoaderComponent> = (args) => (
  <LoaderComponent {...args} />
);

export const CircleLoader2 = Template.bind({});
CircleLoader2.parameters = {
  docs: {
    page: LoaderDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
