import { React, useContext } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FormDispatchContext } from "../../../lib/context/FormContext.js";

const RangeSliderBar = ({
  inputName,
  inputLabel,
  isRequired,
  currValuesRange,
}) => {
  const dispatch = useContext(FormDispatchContext);

  function handleSliderChange(newValues) {
    const valuesRange = `£${newValues[0]} - £${newValues[1]}`;
    dispatch({
      type: "UPDATE_FIELD",
      payload: {
        fieldName: inputName,
        newValue: valuesRange,
      },
    });
  }

  const onBlur = () => {
    dispatch({
      type: "UPDATE_ONBLUR",
      payload: { fieldName: inputName },
    });
  };

  return (
    <Box maxW="sm">
      <FormControl id={inputName} mb={5} isRequired={isRequired}>
        <Flex alignItems="baseline">
          <FormLabel>{inputLabel}</FormLabel>
          <Text fontSize="sm" color="#828def">
            {currValuesRange}
          </Text>
        </Flex>

        <RangeSlider
          name={inputName}
          aria-label={["min", "max"]}
          defaultValue={[55000, 80000]}
          min={40000} // Set the minimum value
          max={150000}
          onChange={handleSliderChange}
          onBlur={onBlur}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <FormErrorMessage>required</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default RangeSliderBar;
