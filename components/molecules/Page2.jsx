import React from "react";
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
  return (
    <>
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
        selectedValues={formState.values.seniority}
        isRequired={false}
      />
      {/* ------- Job description------- */}
      <TextAreaInput
        inputLabel="Job Description"
        inputName="jobdescription"
        placeholder="Please include tasks, complete Tech stack and level required"
        inputValue={formState.values.jobdescription}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Salary------- */}
      <RangeSliderBar
        inputLabel="Salary range (£)"
        inputName="salary"
        isRequired={true}
        dispatch={dispatch}
        currValuesRange={formState.values.salary}
      />
      {/* ------- Location ------- */}
      <SingleLineInput
        inputLabel="Location"
        inputName="location"
        inputType="text"
        inputValue={formState.values.location}
        dispatch={dispatch}
      />
    </>
  );
};

export default Page2;
