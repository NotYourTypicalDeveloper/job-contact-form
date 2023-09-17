import React from "react";
import { Box } from "@chakra-ui/react";

const AppContainer = ({ children }) => {
  return (
    <Box textAlign="center" fontSize="2xl" mx={0}>
      {children}
    </Box>
  );
};
export default AppContainer;
