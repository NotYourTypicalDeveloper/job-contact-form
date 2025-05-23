import { Box } from "@chakra-ui/react";

const Shape1 = (props) => {
  return (
    <Box
      borderRadius="30% 70% 70% 30% / 30% 33% 67% 70%"
      bgGradient="linear-gradient(45deg,#3023AE 0%,#FF0099 100%)"
      boxShadow="20px 9px 1px 1px rgb(56 53 53 / 100%)"
      {...props}
    />
  );
};

export default Shape1;
