import { React } from "react";
import {
  Select,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const DropdownMenu = ({
  ddLabel,
  inputName,
  ddOptions,
  dispatch,
  isRequired,
}) => {
  // Populating the sorting options
  const dropdownOptionsElems = ddOptions.map((option) => {
    return (
      <option key={`option-${option}`} value={option}>
        {option}
      </option>
    );
  });

  function handleChange(e) {
    const eTargetValue = e.target.value;
    dispatch({
      type: "UPDATE_FIELD",
      payload: { fieldName: inputName, newValue: eTargetValue },
    });
  }

  return (
    <>
      <FormControl id={inputName} marginBottom="4" isRequired={isRequired}>
        <FormLabel>{ddLabel}</FormLabel>
        <Select onChange={handleChange}>{dropdownOptionsElems}</Select>
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default DropdownMenu;
