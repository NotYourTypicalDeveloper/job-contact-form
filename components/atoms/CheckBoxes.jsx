import { React } from "react";
import {
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Stack,
  Grid,
} from "@chakra-ui/react";

const CheckBoxes = ({
  checkboxGroupLabel,
  inputName,
  checkboxOptions,
  formState,
  // isInvalid,
  isRequired,
  dispatch,
  // onBlur
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

  // Populating the checkboxes_____
  const checkboxElems = checkboxOptions.map((option) => {
    return (
      <Checkbox
        type="checkbox"
        size="md"
        key={`checkbox${option}`}
        value={option}
        onChange={handleCheckboxChange}
      >
        {option}
      </Checkbox>
    );
  });

  return (
    <Stack>
      <FormLabel>{checkboxGroupLabel}</FormLabel>
      <CheckboxGroup isRequired={isRequired}>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          {checkboxElems}
        </Grid>
        {formState.values[inputName].toString()}
      </CheckboxGroup>
    </Stack>
  );
};

export default CheckBoxes;
