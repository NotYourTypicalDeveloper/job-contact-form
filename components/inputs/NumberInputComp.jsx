import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { React, useContext } from "react";
import { FormDispatchContext } from "../../lib/context/FormContext.js";

const NumberInputComp = ({ inputName, inputLabel, inputValue, isRequired }) => {
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
    <FormControl id={inputName} mb={5} isRequired={isRequired}>
      <FormLabel>{inputLabel}</FormLabel>
      <NumberInput value={inputValue} step={5}>
        <NumberInputField
          name={inputName}
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
