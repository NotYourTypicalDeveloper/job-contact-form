import React from "react";
import SingleLineInput from "../atoms/SingleLineInput.jsx";
import TextAreaInput from "../atoms/TextAreaInput.jsx";

const Page1 = ({ formState, dispatch }) => {
  return (
    <>
      {/* ------- Name -------- */}
      <SingleLineInput
        inputLabel="Name"
        inputName="sendername"
        inputType="text"
        inputValue={formState.values.sendername}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Company -------- */}
      <SingleLineInput
        inputLabel="Company"
        inputName="company"
        inputType="text"
        inputValue={formState.values.company}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- E-mail -------- */}
      <SingleLineInput
        inputLabel="Email"
        inputName="email"
        inputType="email"
        inputValue={formState.values.email}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Tel -------- */}
      <SingleLineInput
        inputLabel="Telephone"
        inputName="telephone"
        inputType="tel"
        inputValue={formState.values.telephone}
        dispatch={dispatch}
      />
      {/* ------- Message ------- */}
      <TextAreaInput
        inputLabel="Message"
        inputName="message"
        inputValue={formState.values.message}
        isRequired={true}
        dispatch={dispatch}
      />
    </>
  );
};

export default Page1;
