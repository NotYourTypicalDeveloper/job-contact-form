import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { React, useContext } from "react";
import { FormDispatchContext } from "../../../lib/context/FormContext.js";

const TextAreaInput = ({
  inputLabel,
  inputName,
  inputValue,
  isInvalid,
  isRequired,
  placeholder,
}) => {
  const dispatch = useContext(FormDispatchContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      payload: { fieldName: name, newValue: value },
    });
  };

  const onBlur = (e) => {
    const { name } = e.target;
    dispatch({
      type: "UPDATE_ONBLUR",
      payload: { fieldName: name },
    });
  };
  return (
    <FormControl
      id={inputName}
      mb={5}
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
