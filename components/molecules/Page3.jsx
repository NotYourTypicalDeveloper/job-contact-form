import { Flex } from "@chakra-ui/react";
import { React, useContext } from "react";
import { FormContext } from "../../lib/context/FormContext.js";

import NumberInputComp from "../atoms/inputs/NumberInputComp.jsx";
import RadioButtons from "../atoms/inputs/RadioButtons.jsx";
import TextAreaInput from "../atoms/inputs/TextAreaInput.jsx";

const WorkStyle_Options = [
  "fully remote",
  "hybrid",
  "100% on-site",
  "negotiable",
];

const Page3 = () => {
  const formState = useContext(FormContext);
  const { workinghours, companysculture, recruitmentprocess } =
    formState.values;

  console.log("working hours ==> ", typeof workinghours);
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
      />

      <RadioButtons
        radioLabel="Work style"
        inputName="workstyle"
        radioOptions={WorkStyle_Options}
        isRequired
      />
      {/* ------- Company's culture ------- */}
      <TextAreaInput
        inputLabel="Describe the company's culture"
        inputName="companysculture"
        inputValue={companysculture}
        placeholder="Company's values, benefits, pros and cons"
        isInvalid={isTouched.companysculture && companysculture === ""}
        isRequired={true}
      />
      {/* ------- Recruitment process ------- */}
      <TextAreaInput
        inputLabel="What is the recruitment process"
        inputName="recruitmentprocess"
        placeholder="Describe the steps and timeframe"
        inputValue={recruitmentprocess}
        isInvalid={isTouched.recruitmentprocess && recruitmentprocess === ""}
        isRequired={true}
      />
    </Flex>
  );
};

export default Page3;
