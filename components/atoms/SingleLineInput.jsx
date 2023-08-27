import { React } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { autoFillStyle } from "../organisms/ContactForm.jsx";

// TODO: add regex validation depending on inputType
const SingleLineInput = ({
  inputLabel,
  inputName,
  inputType,
  inputValue,
  isInvalid,
  isRequired,
  onBlur,
  dispatch,
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
      <Input
        type={inputType}
        name={inputName}
        value={inputValue}
        sx={autoFillStyle}
        errorBorderColor="red.300"
        onChange={handleChange}
        onBlur={onBlur}
      />
      <FormErrorMessage>required</FormErrorMessage>
    </FormControl>
  );
};

export default SingleLineInput;
