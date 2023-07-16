import { React, useState, useEffect } from "react";
import {
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Stack,
  Grid,
} from "@chakra-ui/react";

const CheckBoxes = ({
  checkboxGroupLabel,
  checkBoxName,
  checkboxOptions,
  isInvalid,
  isRequired,
  onCheckChange,
  // onBlur
}) => {
  const [checkedValues, setCheckedValues] = useState([]);
  useEffect(() => {
    onCheckChange(checkBoxName, checkedValues);
  }, [onCheckChange, checkedValues]);

  const handleCheckboxChange = (e) => {
    e.target.checked
      ? setCheckedValues([...checkedValues, e.target.value])
      : setCheckedValues(
          [...checkedValues].filter((o) => o !== e.target.value)
        );
  };

  // Populating the checkboxes_____
  const checkboxElems = checkboxOptions.map((option) => {
    return (
      <Checkbox
        size="md"
        key={`checkbox${option}`}
        value={option}
        checked={checkedValues.includes(option)}
        onChange={handleCheckboxChange}
      >
        {option}
      </Checkbox>
    );
  });

  return (
    <Stack>
      <FormLabel>{checkboxGroupLabel}</FormLabel>
      <CheckboxGroup
        isInvalid={isInvalid}
        isRequired={isRequired}
        name="seniority"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          {checkboxElems}
        </Grid>
      </CheckboxGroup>
    </Stack>
  );
};

export default CheckBoxes;
