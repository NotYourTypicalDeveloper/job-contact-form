import { React } from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";

const TextAreaInput = ({
  inputLabel,
  inputName,
  inputValue,
  isInvalid,
  isRequired,
  dispatch,
  onBlur,
  placeholder,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      payload: { fieldName: name, newValue: value },
    });
  };
  return (
    <FormControl
      id={inputName}
      marginBottom="4"
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      <FormLabel>{inputLabel}</FormLabel>
      <Textarea
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        onBlur={onBlur}
        resize="vertical"
        errorBorderColor="red.300"
        placeholder={placeholder}
      />
      <FormErrorMessage>required</FormErrorMessage>
    </FormControl>
  );
};

export default TextAreaInput;
