import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const NumberInputComp = ({
  inputName,
  inputLabel,
  inputValue,
  isRequired,
  dispatch,
}) => {
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
    <FormControl id={inputName} marginBottom={4} isRequired={isRequired}>
      <FormLabel>{inputLabel}</FormLabel>
      <NumberInput step={5}>
        <NumberInputField
          name={inputName}
          value={inputValue}
          onBlur={onBlur}
          onChange={handleChange}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormErrorMessage></FormErrorMessage>
    </FormControl>
  );
};

export default NumberInputComp;
