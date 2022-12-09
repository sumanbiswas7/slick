import { addons } from "@storybook/addons";
import defaultTheme from "./theme";
import favicon from "./public/storybook.png";

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: defaultTheme,
});
