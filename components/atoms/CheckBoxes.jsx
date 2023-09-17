import { React } from "react";
import { Checkbox, FormLabel, FormControl, Grid } from "@chakra-ui/react";

const CheckBoxes = ({
  checkboxGroupLabel,
  inputName,
  checkboxOptions,
  selectedValues,
  dispatch,
  isRequired,
}) => {
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
    <FormControl id={inputName} marginBottom="4" isRequired={isRequired}>
      <FormLabel>{checkboxGroupLabel}</FormLabel>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {checkboxElems}
      </Grid>
      {selectedValues}
    </FormControl>
  );
};

export default CheckBoxes;
