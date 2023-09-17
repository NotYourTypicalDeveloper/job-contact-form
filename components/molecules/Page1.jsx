import React from "react";
import SingleLineInput from "../atoms/SingleLineInput.jsx";
import TextAreaInput from "../atoms/TextAreaInput.jsx";

const Page1 = ({ formState, dispatch }) => {
  const { sendername, company, email, telephone, message } = formState.values;
  return (
    <>
      {/* ------- Name -------- */}
      <SingleLineInput
        inputLabel="Name"
        inputName="sendername"
        inputType="text"
        inputValue={sendername}
        isInvalid={formState.isTouched.sendername && sendername === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Company -------- */}
      <SingleLineInput
        inputLabel="Company"
        inputName="company"
        inputType="text"
        inputValue={company}
        isInvalid={formState.isTouched.company && company === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- E-mail -------- */}
      <SingleLineInput
        inputLabel="Email"
        inputName="email"
        inputType="email"
        inputValue={email}
        isInvalid={formState.isTouched.email && email === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Tel -------- */}
      <SingleLineInput
        inputLabel="Telephone"
        inputName="telephone"
        inputType="tel"
        inputValue={telephone}
        isInvalid={formState.isTouched.telephone && telephone === ""}
        isRequired={true}
        dispatch={dispatch}
      />
      {/* ------- Message ------- */}
      <TextAreaInput
        inputLabel="Message"
        inputName="message"
        inputValue={message}
        isInvalid={formState.isTouched.message && message === ""}
        isRequired={true}
        dispatch={dispatch}
      />
    </>
  );
};

export default Page1;
