import { React, useReducer } from "react";
import { Container, Button, useToast } from "@chakra-ui/react";
import {
  FormContext,
  FormDispatchContext,
} from "../../lib/context/FormContext.js";
import { formReducer } from "../../lib/reducer/reducer.js";
import { initialState } from "../../lib/reducer/reducer.js";
import { sendContactForm } from "../../lib/api";

// Form Pages
import Page1 from "../molecules/Page1.jsx";
import Page2 from "../molecules/Page2.jsx";
import Page3 from "../molecules/Page3.jsx";

// FIXME: Fix onBlur, isInvalid

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
  const onSubmit = async () => {
    // Set isLoading to true
    dispatch({
      type: "TOGGLE_ISLOADING",
      payload: true,
    });

    try {
      // send contact form
      await sendContactForm(formState.values);
      // setTouched({});
      // dispatch({
      //   type: "RESET_FORM",
      // });

      // show success message
      successMsg({
        title: "Message sent! ✨",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      // TODO: add error handling
      console.log("error submitting form");
    }
  };

  return (
    <FormContext.Provider value={formState}>
      <FormDispatchContext.Provider value={dispatch}>
        <Container>
          {/* TODO: add error message  */}
          <form>
            <Page1 formState={formState} dispatch={dispatch} />
            <Page2 formState={formState} dispatch={dispatch} />
            <Page3 formState={formState} dispatch={dispatch} />

            {/* ============== SUBMIT button ============== */}
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={formState.isLoading}
              onClick={onSubmit}
              isDisabled={
                !formState.values.sendername ||
                !formState.values.company ||
                !formState.values.email ||
                !formState.values.message ||
                !formState.values.contract ||
                !formState.values.seniority ||
                !formState.values.jobdescription ||
                !formState.values.salary ||
                !formState.values.location ||
                !formState.values.workstyle ||
                !formState.values.message ||
                !formState.values.recruitmentprocess
              }
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
