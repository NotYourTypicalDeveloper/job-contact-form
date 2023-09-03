import { React } from "react";
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

const RangeSliderBar = ({
  inputName,
  inputLabel,
  isRequired,
  dispatch,
  currValuesRange,
}) => {
  function handleSliderChangeEnd(newValues) {
    const valuesRange = `£${newValues[0]} - £${newValues[1]}`;
    dispatch({
      type: "UPDATE_FIELD",
      payload: {
        fieldName: inputName,
        newValue: valuesRange,
      },
    });
  }

  return (
    <Box maxW="sm">
      <FormControl id={inputName} marginBottom="4" isRequired={isRequired}>
        <Flex alignItems="baseline">
          <FormLabel>{inputLabel}</FormLabel>
          <Text fontSize="sm" color="#828def">
            {currValuesRange}
          </Text>
        </Flex>

        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[55000, 80000]}
          min={40000} // Set the minimum value
          max={150000} //
          onChangeEnd={handleSliderChangeEnd}
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
