import React from "react";
import { ComponentStory } from "@storybook/react";
import { CircleLoader as LoaderComponent } from "./CircleLoader";
import LoaderDocs from "./CircleLoaderDocs.mdx";

export default {
  title: "Components/Loaders",
  component: LoaderComponent,
} as any;

const Template: ComponentStory<typeof LoaderComponent> = (args) => (
  <LoaderComponent {...args} />
);

export const CircleLoader = Template.bind({});
CircleLoader.parameters = {
  docs: {
    page: LoaderDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
