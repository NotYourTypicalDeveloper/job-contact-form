import React from "react";
import {
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
  FormErrorMessage,
} from "@chakra-ui/react";

const RadioButtons = ({
  radioLabel,
  radioName,
  radioOptions,
  isInvalid,
  isRequired,
  onChange,
  onBlur,
}) => {
  // Populating the radio buttons
  const radioButtonsElems = radioOptions.map((option) => {
    const handleRadioChange = (e) => {
      const selectedVal = e.target.value;
      console.log(selectedVal);
      onChange(selectedVal);
    };
    return (
      <Radio
        key={`${option}-radio-option`}
        value={option}
        _notLast={{ borderBottomWidth: "0.5px", borderBottomColor: "gray.100" }}
        onClick={handleRadioChange}
      >
        {option}
      </Radio>
    );
  });
  return (
    <FormControl
      id={radioName}
      marginBottom="4"
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      <FormLabel>{radioLabel}</FormLabel>
      <RadioGroup name={radioName} errorBorderColor="red.300" onBlur={onBlur}>
        <Stack color="#e1e0f0" direction="row">
          {radioButtonsElems}
        </Stack>
      </RadioGroup>
      <FormErrorMessage>required</FormErrorMessage>
    </FormControl>
  );
};

export default RadioButtons;
