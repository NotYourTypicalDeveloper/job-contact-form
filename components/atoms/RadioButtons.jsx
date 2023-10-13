import { React } from "react";
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
        mr={2}
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
        mb={5}
        isInvalid={isInvalid}
        isRequired={isRequired}
      >
        <FormLabel>{radioLabel}</FormLabel>
        <RadioGroup
          name={`${inputName}`}
          value={formState.values[inputName]}
          errorBorderColor="red.300"
          // display="flex"
          // flexDir={{ base: "column", lg: "row" }}
          display="grid"
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={3}
        >
          {radioButtonsElems}
        </RadioGroup>
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default RadioButtons;
