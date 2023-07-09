import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";

const TextAreaInput = ({
  textALabel,
  textAName,
  textAValue,
  isInvalid,
  isRequired,
  onChange,
  onBlur,
  autoFillStyle,
}) => {
  return (
    <FormControl
      id={textAName}
      marginBottom="4"
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      <FormLabel>{textALabel}</FormLabel>
      <Textarea
        name={textAName}
        value={textAValue}
        onChange={onChange}
        onBlur={onBlur}
        resize="vertical"
        errorBorderColor="red.300"
        sx={textAValue !== "" && autoFillStyle}
      />
      <FormErrorMessage>required</FormErrorMessage>
    </FormControl>
  );
};

export default TextAreaInput;
