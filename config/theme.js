import { extendTheme } from "@chakra-ui/react";

const customTheme = {
  // Override Chakra UI components and styles here
  styles: {
    global: {
      // Custom global styles go here
      html: {
        backgroundColor: "blue",
        height: "100%",
      },
      "#__next": {
        height: "100%",
      },
      body: {
        backgroundColor: "#1b1919",
        color: "lightGrey",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      input: {
        _autofill: {
          border: "1px solid transparent",
          textFillColor: "#c6c6c6",
          boxShadow: "0 0 0px 1000px #232323 inset",
          transition: "background-color 5000s ease-in-out 0s",
        },
      },
    },
  },
  // Define your custom or dark theme configuration here
  colors: {
    // Customize your color palette here
  },
};

export default extendTheme(customTheme);
