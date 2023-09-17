import React from "react";
import { Flex } from "@chakra-ui/react";
import RadioButtons from "../atoms/RadioButtons.jsx";
import CheckBoxes from "../atoms/CheckBoxes.jsx";
import TextAreaInput from "../atoms/TextAreaInput.jsx";
import RangeSliderBar from "../atoms/RangeSliderBar.jsx";
import SingleLineInput from "../atoms/SingleLineInput.jsx";

// array of options for "Contract", "Seniority"
const Contract_Options = ["Perm/Full-time", "Perm/Part-time", "Freelance"];
const Seniority_Options = [
  "Junior",
  "Mid-level",
  "Mid to Senior",
  "Senior",
  "Tech-Lead",
  "We're open and flexible",
];

const Page2 = ({ formState, dispatch }) => {
  const { jobdescription, salary, location, seniority } = formState.values;
  const { isTouched } = formState;

  return (
    <Flex flexDir="column" justifyContent="space-evenly">
      {/* ------- Contract type -------- */}
      <RadioButtons
        radioLabel="Contract Type"
        inputName="contract"
        formState={formState}
        radioOptions={Contract_Options}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Seniority level ------- */}
      <CheckBoxes
        checkboxGroupLabel="Seniority level"
        inputName="seniority"
        checkboxOptions={Seniority_Options}
        dispatch={dispatch}
        selectedValues={seniority}
        isRequired={true}
      />
      {/* ------- Job description------- */}
      <TextAreaInput
        inputLabel="Job Description"
        inputName="jobdescription"
        placeholder="Please include tasks, complete Tech stack and level required"
        inputValue={jobdescription}
        isInvalid={isTouched.jobdescription && jobdescription === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Salary------- */}
      <RangeSliderBar
        inputLabel="Salary range (£)"
        inputName="salary"
        isInvalid={isTouched.salary}
        isRequired={true}
        dispatch={dispatch}
        currValuesRange={salary}
      />
      {/* ------- Location ------- */}
      <SingleLineInput
        inputLabel="Location"
        inputName="location"
        inputType="text"
        inputValue={location}
        isInvalid={isTouched.location && location === ""}
        isRequired={true}
        dispatch={dispatch}
      />
    </Flex>
  );
};

export default Page2;
