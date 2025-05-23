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
import { useContext } from "react";
import { FormDispatchContext } from "../../lib/context/FormContext.js";

const NumberInputComp = ({ inputName, inputLabel, inputValue, isRequired }) => {
  const dispatch = useContext(FormDispatchContext);

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
      <NumberInput
        value={inputValue}
        min={0}
        step={1}
        onChange={(valueNumber) => {
          dispatch({
            type: "UPDATE_FIELD",
            payload: { fieldName: inputName, newValue: valueNumber },
          });
        }}
      >
        <NumberInputField
          name={inputName}
          onBlur={onBlur}
          inputMode="numeric"
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
