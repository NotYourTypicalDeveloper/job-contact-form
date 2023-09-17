import { React, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";

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

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  function validateEmail(email) {
    return emailRegex.test(email);
  }
  const regexTel = /^[0-9]+$/;
  function validatePhone(number) {
    return regexTel.test(number);
  }
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // if field is cleared, reset error message
    if (!value) {
      setErrorMsg("");
    }
    // if input is "telephone"
    if (type === "tel") {
      const isValidPhone = validatePhone(value);
      if (!isValidPhone) {
        setErrorMsg("please enter only numbers");
      } else {
        setErrorMsg("");
      }
    }

    dispatch({
      type: "UPDATE_FIELD",
      payload: { fieldName: name, newValue: value },
    });
  };

  const onBlur = (e) => {
    const { name, type, value } = e.target;
    if (type === "email") {
      const isValidEmail = validateEmail(value);

      if (!isValidEmail) {
        setErrorMsg("Email format is wrong, must include @, and a dot");
      } else {
        setErrorMsg("");
      }
    }

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
      <Input
        type={inputType}
        name={inputName}
        value={inputValue}
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
