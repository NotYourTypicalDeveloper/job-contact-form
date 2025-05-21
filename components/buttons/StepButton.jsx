import { Button } from "@chakra-ui/react";

const StepButton = ({
  label,
  onClick,
  isDisabled = false,
  mr = 0,
  mb = { base: 3, lg: 0 },
  ...rest
}) => {
  return (
    <Button
      color="#5045f0"
      borderColor="#5045f0"
      variant="outline"
      onClick={onClick}
      disabled={isDisabled}
      mr={mr}
      mb={mb}
      _hover={{
        bgColor: "#5045f0",
        color: "white",
      }}
      _active={{ bgColor: "#717ae2" }}
      w={{ base: "100%", sm: "50%", md: "20%" }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default StepButton;
