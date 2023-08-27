import { React, Dispatch } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormErrorMessage,
} from "@chakra-ui/react";

// TODO: add onBlur function
const RadioButtons = ({
  radioLabel,
  inputName,
  formState,
  radioOptions,
  isInvalid,
  isRequired,
  dispatch,
}) => {
  // Populating the radio buttons
  const radioButtonsElems = radioOptions.map((option) => {
    return (
      <Radio
        key={`radiooption${option}`}
        value={option}
        onChange={handleRadioChange}
      >
        {option}
      </Radio>
    );
  });
  function handleRadioChange(e) {
    const eTargetValue = e.target.value;
    dispatch({
      type: "UPDATE_FIELD",
      payload: { fieldName: inputName, newValue: eTargetValue },
    });
  }

  return (
    <>
      <FormControl
        id={inputName}
        marginBottom="4"
        isInvalid={isInvalid}
        isRequired={isRequired}
      >
        <FormLabel>{radioLabel}</FormLabel>
        <RadioGroup
          name={`${inputName}`}
          value={formState.values[inputName]}
          errorBorderColor="red.300"
          display="flex"
        >
          {radioButtonsElems}
        </RadioGroup>
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default RadioButtons;
