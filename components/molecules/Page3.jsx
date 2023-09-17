import React from "react";
import DropdownMenu from "../atoms/DropdownMenu.jsx";
import TextAreaInput from "../atoms/TextAreaInput.jsx";
import NumberInputComp from "../atoms/NumberInputComp.jsx";

const WorkStyle_Options = [
  "fully remote",
  "hybrid",
  "100% on-site",
  "negotiable",
];

const Page3 = ({ formState, dispatch }) => {
  const { workinghours, companysculture, recruitmentprocess } =
    formState.values;
  return (
    <>
      {/* ------- Weekly work hours------- */}
      <NumberInputComp
        inputName="workinghours"
        inputLabel="Number of work hours / week"
        inputValue={workinghours}
        isInvalid={formState.isTouched.workinghours && workinghours === ""}
        isRequired
        dispatch={dispatch}
      />
      {/* ------- Work style ------- */}
      <DropdownMenu
        ddOptions={WorkStyle_Options}
        ddLabel="Work style"
        inputName="workstyle"
        dispatch={dispatch}
        formState={formState}
        isRequired={true}
      />
      {/* ------- Company's culture ------- */}
      <TextAreaInput
        inputLabel="Describe the company's culture"
        inputName="companysculture"
        inputValue={companysculture}
        placeholder="Company's values, benefits, pros and cons"
        isInvalid={
          formState.isTouched.companysculture && companysculture === ""
        }
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Recruitment process ------- */}
      <TextAreaInput
        inputLabel="What is the recruitment process"
        inputName="recruitmentprocess"
        placeholder="Describe the steps and timeframe"
        inputValue={recruitmentprocess}
        isInvalid={
          formState.isTouched.recruitmentprocess && recruitmentprocess === ""
        }
        isRequired={true}
        dispatch={dispatch}
      />
    </>
  );
};

export default Page3;
