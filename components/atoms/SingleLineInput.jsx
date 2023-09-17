import { React, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
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
  dispatch,
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "tel") {
      const regex = new RegExp("^[0-9]+$");
      if (!regex.test(value)) {
        setErrorMsg("please enter only numbers");
      }
    }
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
      marginBottom={4}
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
        borderColor={errorMsg ? "#6668f0" : "initial"}
      />

      <FormErrorMessage>required</FormErrorMessage>
      {errorMsg && inputValue && (
        <Text
          color="#6668f0"
          mt={2}
          fontSize="sm"
          lineHeight="normal"
          textAlign="left"
        >
          {errorMsg}
        </Text>
      )}
    </FormControl>
  );
};

export default SingleLineInput;
