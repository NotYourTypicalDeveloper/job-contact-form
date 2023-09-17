import React from "react";
import SingleLineInput from "../atoms/SingleLineInput.jsx";
import TextAreaInput from "../atoms/TextAreaInput.jsx";

const Page1 = ({ formState, dispatch }) => {
  const { sendername, company, email, telephone, message } = formState.values;
  const { isTouched } = formState;

  return (
    <>
      {/* ------- Name -------- */}
      <SingleLineInput
        inputLabel="Name"
        inputName="sendername"
        inputType="text"
        inputValue={sendername}
        isInvalid={isTouched.sendername && sendername === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Company -------- */}
      <SingleLineInput
        inputLabel="Company"
        inputName="company"
        inputType="text"
        inputValue={company}
        isInvalid={isTouched.company && company === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- E-mail -------- */}
      <SingleLineInput
        inputLabel="Email"
        inputName="email"
        inputType="email"
        inputValue={email}
        isInvalid={isTouched.email && email === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Tel -------- */}
      <SingleLineInput
        inputLabel="Telephone"
        inputName="telephone"
        inputType="tel"
        inputValue={telephone}
        isInvalid={isTouched.telephone && telephone === ""}
        isRequired={true}
        dispatch={dispatch}
        formState={formState}
      />
      {/* ------- Message ------- */}
      <TextAreaInput
        inputLabel="Message"
        inputName="message"
        inputValue={message}
        isInvalid={isTouched.message && message === ""}
        isRequired={true}
        dispatch={dispatch}
      />
    </>
  );
};

export default Page1;
