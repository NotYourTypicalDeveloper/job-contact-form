import React from "react";
import { Flex } from "@chakra-ui/react";
import TextAreaInput from "../atoms/TextAreaInput.jsx";
import NumberInputComp from "../atoms/NumberInputComp.jsx";
import RadioButtons from "../atoms/RadioButtons.jsx";

const WorkStyle_Options = [
  "fully remote",
  "hybrid",
  "100% on-site",
  "negotiable",
];

const Page3 = ({ formState, dispatch }) => {
  const { workinghours, companysculture, recruitmentprocess } =
    formState.values;

  const { isTouched } = formState;
  return (
    <Flex flexDir="column" justifyContent="space-evenly">
      {/* ------- Weekly work hours------- */}
      <NumberInputComp
        inputName="workinghours"
        inputLabel="Number of work hours / week"
        inputValue={workinghours}
        isInvalid={isTouched.workinghours && workinghours === ""}
        isRequired
        dispatch={dispatch}
      />
      <RadioButtons
        radioLabel="Work style"
        inputName="workstyle"
        formState={formState}
        radioOptions={WorkStyle_Options}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Company's culture ------- */}
      <TextAreaInput
        inputLabel="Describe the company's culture"
        inputName="companysculture"
        inputValue={companysculture}
        placeholder="Company's values, benefits, pros and cons"
        isInvalid={isTouched.companysculture && companysculture === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Recruitment process ------- */}
      <TextAreaInput
        inputLabel="What is the recruitment process"
        inputName="recruitmentprocess"
        placeholder="Describe the steps and timeframe"
        inputValue={recruitmentprocess}
        isInvalid={isTouched.recruitmentprocess && recruitmentprocess === ""}
        isRequired={true}
        dispatch={dispatch}
      />
    </Flex>
  );
};

export default Page3;
