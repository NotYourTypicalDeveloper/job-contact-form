import { Box } from "@chakra-ui/react";
import React from "react";

const AppContainer = ({ children }) => {
  return (
    <Box textAlign="center" fontSize="2xl" mx={0}>
      {children}
    </Box>
  );
};
export default AppContainer;
