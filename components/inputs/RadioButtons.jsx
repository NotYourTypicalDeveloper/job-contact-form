import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import {
  FormContext,
  FormDispatchContext,
} from "../../lib/context/FormContext.js";

const RadioButtons = ({
  radioLabel,
  inputName,
  radioOptions,
  isInvalid,
  isRequired,
}) => {
  const dispatch = useContext(FormDispatchContext);
  const formState = useContext(FormContext);

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
