import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

// TODO: add regex validation depending on inputType
const SingleLineInput = ({
  inputLabel,
  inputName,
  inputType,
  inputValue,
  isInvalid,
  isRequired,
  onChange,
  onBlur,
  autoFillStyle,
}) => {
  return (
    <FormControl
      id={inputName}
      marginBottom="4"
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      <FormLabel>{inputLabel}</FormLabel>
      <Input
        type={inputType}
        name={inputName}
        value={inputValue}
        sx={inputValue !== "" && autoFillStyle}
        errorBorderColor="red.300"
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormErrorMessage>required</FormErrorMessage>
    </FormControl>
  );
};

export default SingleLineInput;
