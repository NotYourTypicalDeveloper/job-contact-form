import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FormContext } from "../../lib/context/FormContext.js";
import SingleLineInput from "../inputs/SingleLineInput.jsx";
import TextAreaInput from "../inputs/TextAreaInput.jsx";

const Page1 = () => {
  const formState = useContext(FormContext);
  const { sendername, company, email, telephone, message } = formState.values;
  const { isTouched } = formState;

  return (
    <Flex flexDir="column" justifyContent="space-evenly">
      {/* ------- Name -------- */}
      <SingleLineInput
        inputLabel="Name"
        inputName="sendername"
        inputType="text"
        inputValue={sendername}
        isInvalid={isTouched.sendername && sendername === ""}
        isRequired={true}
      />
      {/* ------- Company -------- */}
      <SingleLineInput
        inputLabel="Company"
        inputName="company"
        inputType="text"
        inputValue={company}
        isInvalid={isTouched.company && company === ""}
        isRequired={true}
      />
      {/* ------- E-mail -------- */}
      <SingleLineInput
        inputLabel="Email"
        inputName="email"
        inputType="email"
        inputValue={email}
        isInvalid={isTouched.email && email === ""}
        isRequired={true}
      />
      {/* ------- Tel -------- */}
      <SingleLineInput
        inputLabel="Telephone"
        inputName="telephone"
        inputType="tel"
        inputValue={telephone}
        isInvalid={isTouched.telephone && telephone === ""}
        isRequired={true}
      />
      {/* ------- Message ------- */}
      <TextAreaInput
        inputLabel="Message"
        inputName="message"
        inputValue={message}
        isInvalid={isTouched.message && message === ""}
        isRequired={true}
      />
    </Flex>
  );
};

export default Page1;
