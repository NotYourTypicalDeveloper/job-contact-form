import { React } from "react";
import { Box } from "@chakra-ui/react";

const Shape2 = (props) => {
  return (
    <Box
      borderRadius="30% 70% 37% 63% / 58% 31% 69% 42%"
      bgGradient="linear-gradient(45deg,#786fc6 0%,#64a793 100%)"
      {...props}
    />
  );
};

export default Shape2;
