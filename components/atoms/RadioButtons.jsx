import { React, useState } from "react";
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
  const [currentCheckedVal, setCurrentCheckedVal] = useState("");

  // Populating the radio buttons
  const radioButtonsElems = radioOptions.map((option) => {
    return (
      <Radio
        key={`radiooption${option}`}
        value={option}
        onClick={(option) => {
          setCurrentCheckedVal(option);
        }}
      >
        {option}
      </Radio>
    );
  });

  const radioNameGlobal = radioName;
  const handleRadioChange = (currentCheckedVal) => {
    setCurrentCheckedVal(currentCheckedVal);
    onChange({
      target: {
        value: currentCheckedVal,
        name: `${radioNameGlobal}`,
      },
    });
  };

  return (
    <>
      <FormControl
        id={radioName}
        marginBottom="4"
        isInvalid={isInvalid}
        isRequired={isRequired}
      >
        <FormLabel>{radioLabel}</FormLabel>
        <RadioGroup
          name={`${radioName}`}
          value={currentCheckedVal}
          errorBorderColor="red.300"
          onBlur={(currentCheckedVal) =>
            onBlur({
              target: { value: currentCheckedVal, name: `${radioName}` },
            })
          }
          onChange={handleRadioChange}
        >
          <Stack color="#e1e0f0" direction="row">
            {radioButtonsElems}
          </Stack>
        </RadioGroup>
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default RadioButtons;
