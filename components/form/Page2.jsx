import { Flex } from "@chakra-ui/react";
import { React, useContext } from "react";
import { FormContext } from "../../lib/context/FormContext.js";
import CheckBoxes from "../inputs/CheckBoxes.jsx";
import RadioButtons from "../inputs/RadioButtons.jsx";
import RangeSliderBar from "../inputs/RangeSliderBar.jsx";
import SingleLineInput from "../inputs/SingleLineInput.jsx";
import TextAreaInput from "../inputs/TextAreaInput.jsx";

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

const Page2 = () => {
  const formState = useContext(FormContext);

  const { jobdescription, salary, location, seniority } = formState.values;
  const { isTouched } = formState;

  return (
    <Flex flexDir="column" justifyContent="space-evenly">
      {/* ------- Contract type -------- */}
      <RadioButtons
        radioLabel="Contract Type"
        inputName="contract"
        radioOptions={Contract_Options}
        isRequired={true}
      />
      {/* ------- Seniority level ------- */}
      <CheckBoxes
        checkboxGroupLabel="Seniority level"
        inputName="seniority"
        checkboxOptions={Seniority_Options}
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
      />
      {/* ------- Salary------- */}
      <RangeSliderBar
        inputLabel="Salary range (£)"
        inputName="salary"
        isInvalid={isTouched.salary}
        isRequired={true}
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
      />
    </Flex>
  );
};

export default Page2;
