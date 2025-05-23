import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FormDispatchContext } from "../../../lib/context/FormContext.js";

const DropdownMenu = ({ ddLabel, inputName, ddOptions, isRequired }) => {
  const dispatch = useContext(FormDispatchContext);

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
      <FormControl id={inputName} mb={5} isRequired={isRequired}>
        <FormLabel>{ddLabel}</FormLabel>
        <Select onChange={handleChange} placeholder="Select option">
          {dropdownOptionsElems}
        </Select>
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default DropdownMenu;
