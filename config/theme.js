import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  // Override Chakra UI components and styles here
  styles: {
    global: {
      // Custom global styles go here
      body: {
        backgroundColor: "#1b1919",
        color: "lightGrey",
      },
    },
  },
  // Define your custom or dark theme configuration here
  colors: {
    // Customize your color palette here
  },
};

export default extendTheme(customTheme);
