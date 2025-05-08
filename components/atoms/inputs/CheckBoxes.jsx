import { Checkbox, FormControl, FormLabel, Grid } from "@chakra-ui/react";
import { React, useContext } from "react";
import { FormDispatchContext } from "../../../lib/context/FormContext.js";

const CheckBoxes = ({
  checkboxGroupLabel,
  inputName,
  checkboxOptions,
  selectedValues,
  isRequired,
}) => {
  const dispatch = useContext(FormDispatchContext);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch({
        type: "ADD_CHECKBOX_VALUE",
        payload: {
          fieldName: inputName,
          newValue: e.target.value,
        },
      });
    } else {
      dispatch({
        type: "REMOVE_CHECKBOX_VALUE",
        payload: {
          fieldName: inputName,
          newValue: e.target.value,
        },
      });
    }
  };
  const hasSelectedOptions = selectedValues.length > 0;

  // Populating the checkboxes_____
  const checkboxElems = checkboxOptions.map((option) => {
    let boxIsChecked = false;
    if (hasSelectedOptions && selectedValues.includes(option)) {
      boxIsChecked = true;
    }

    return (
      <Checkbox
        type="checkbox"
        size="md"
        key={`checkbox${option}`}
        value={option}
        isChecked={boxIsChecked}
        onChange={handleCheckboxChange}
      >
        {option}
      </Checkbox>
    );
  });

  return (
    <FormControl id={inputName} mb={5} isRequired={isRequired}>
      <FormLabel>{checkboxGroupLabel}</FormLabel>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={3}
      >
        {checkboxElems}
      </Grid>
    </FormControl>
  );
};

export default CheckBoxes;
