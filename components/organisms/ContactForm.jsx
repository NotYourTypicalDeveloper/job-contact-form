import { React, useState, useReducer } from "react";
import { Container, Button, Text, useToast } from "@chakra-ui/react";
import {
  FormContext,
  FormDispatchContext,
} from "../../lib/context/FormContext.js";
import { formReducer } from "../../lib/reducer/reducer.js";
import { initialState } from "../../lib/reducer/reducer.js";
import { sendContactForm } from "../../lib/api";
// Import components
import SingleLineInput from "../atoms/SingleLineInput";
import TextAreaInput from "../atoms/TextAreaInput";
import RadioButtons from "../atoms/RadioButtons";
import CheckBoxes from "../atoms/CheckBoxes";
import DropdownMenu from "../atoms/DropdownMenu.jsx";

// FIXME: Fix onBlur, isInvalid

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

const WorkStyle_Options = [
  "fully remote",
  "hybrid",
  "100% on-site",
  "negotiable",
];

// styling
export const autoFillStyle = {
  border: "1px solid transparent",
  textFillColor: "white",
  boxShadow: "0 0 0 1000px #1b1b1b inset",
  transition: "background-color 5000s ease-in-out 0s",
};

const ContactForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  //If user clicks out of input TODO: add this to the reducer
  // const [touched, setTouched] = useState({});

  //for the success message pop-up
  const successMsg = useToast();

  // const onBlur = ({ target }) =>
  //   setTouched((prev) => ({ ...prev, [target.name]: true }));

  // ON SUBMIT
  const onSubmit = async (data) => {
    // Set isLoading to true
    dispatch({
      type: "TOGGLE_ISLOADING",
      payload: true,
    });

    try {
      // send contact form
      await sendContactForm(data);
      // setTouched({});
      dispatch({
        type: "RESET_FORM",
      });

      // show success message
      successMsg({
        title: "Message sent! ✨",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      // if error ❌
      // setState((prev) => ({
      //   ...prev,
      //   isLoading: false,
      //   error: error.message,
      // }));
      console.log("error submitting form");
    }
  };

  return (
    <FormContext.Provider value={formState}>
      <FormDispatchContext.Provider value={dispatch}>
        <Container>
          {/* ====== Form starts here ====== */}
          {/* {error && (
            <Text color="red.300" my={4}>
              ❌ {error} ❌
            </Text>
          )} */}
          <form>
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
              inputValue={formState.values.jobdescription}
              isRequired={true}
              dispatch={dispatch}
            />
            {/* ------- Location ------- */}
            <SingleLineInput
              inputLabel="Location"
              inputName="location"
              inputType="text"
              inputValue={formState.values.location}
              dispatch={dispatch}
            />

            {/* ------- Work style ------- */}
            <DropdownMenu
              ddOptions={WorkStyle_Options}
              ddLabel="Work style"
              inputName="work style"
              dispatch={dispatch}
              formState={formState}
              isRequired={true}
            />
            {/* ------- Company's culture ------- */}
            <TextAreaInput
              inputLabel="Describe the company's culture"
              inputName="companysculture"
              inputValue={formState.values.companysculture}
              isRequired={true}
              dispatch={dispatch}
            />
            {/* ------- Recruitment process ------- */}
            <TextAreaInput
              inputLabel="What is the recruitment process"
              inputName="recruitmentprocess"
              inputValue={formState.values.recruitmentprocess}
              isRequired={true}
              dispatch={dispatch}
            />

            {/* ============== SUBMIT button ============== */}
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={formState.isLoading}
              onClick={() => onSubmit(formState.values)}
              // isDisabled={
              //   !values.name ||
              //   !values.email ||
              //   !values.contract ||
              //   !values.message
              // }
            >
              Submit
            </Button>
          </form>
        </Container>
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
};

export default ContactForm;
