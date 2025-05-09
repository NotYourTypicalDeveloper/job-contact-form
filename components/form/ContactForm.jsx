import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { React, useReducer } from "react";
import { sendContactForm } from "../../lib/api/sendContactForm.js";
import {
  FormContext,
  FormDispatchContext,
} from "../../lib/context/FormContext.js";
import { formReducer, initialState } from "../../lib/reducer/formReducer.js";

import StepButton from "../buttons/StepButton.jsx";
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx";

const ContactForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const { currentStep, isLoading, values, globalErrorMsg } = formState;
  const successMsg = useToast();

  const LAST_STEP = 3;

  const renderCurrentPage = () => {
    switch (currentStep) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      default:
        return null;
    }
  };

  // for Prev and Next button
  const goToStep = (e, type) => {
    e.preventDefault();
    dispatch({ type });
  };

  const isSubmitDisabled = [
    "sendername",
    "company",
    "email",
    "message",
    "contract",
    "seniority",
    "jobdescription",
    "location",
    "workstyle",
    "recruitmentprocess",
  ].some((key) => !values[key] || values[key] === "Move the slider");

  // Submit form
  const onSubmit = async () => {
    dispatch({
      type: "TOGGLE_ISLOADING",
      payload: true,
    });

    try {
      // send contact form
      await sendContactForm(formState.values);
      dispatch({
        type: "TOGGLE_ISLOADING",
        payload: false,
      });
      // show success message
      successMsg({
        title: "Message sent! ✨",
        status: "success",
        duration: 5000,
        position: "top",
      });
      dispatch({
        type: "RESET_FORM",
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_FORM_ERROR",
        payload: `Oops something went wrong! ${error}`,
      });
      console.log("error submitting form");
    }
  };

  return (
    <FormContext.Provider value={formState}>
      <FormDispatchContext.Provider value={dispatch}>
        <Container maxW="container.md" pt={5}>
          <Heading
            as="h1"
            bgGradient="linear(to-l, #7928CA, #41d7ee)"
            bgClip="text"
            mb={8}
          >
            JOB CONTACT FORM
          </Heading>
          {globalErrorMsg && <Text> {globalErrorMsg}</Text>}

          {/* ============== Progress bar ============== */}
          <Flex justifyContent="center" alignItems="center">
            <Box
              h={3}
              w="60%"
              bgColor="#717ae2"
              borderRadius={4}
              mr={2}
              zIndex={1}
            >
              <Box
                w={`${(currentStep / LAST_STEP) * 100}%`}
                h="100%"
                bgColor="#2c1ef1"
                borderRadius={4}
              ></Box>
            </Box>
            <Text fontWeight="extrabold" fontSize="small">
              {currentStep} / {LAST_STEP}
            </Text>
          </Flex>
          {/* ============== Form ============== */}
          <form style={{ padding: "2rem" }}>
            <Box my={{ base: 4, lg: 2 }}>{renderCurrentPage()}</Box>
            <Flex flexDir={{ base: "column", sm: "row" }} mb={5}>
              {currentStep !== 1 && (
                <StepButton
                  label="Prev"
                  onClick={(e) => goToStep(e, "MOVE_PREV_PAGE")}
                  isDisabled={currentStep === 1}
                  mr={4}
                />
              )}
              {currentStep !== LAST_STEP && (
                <StepButton
                  label="Next"
                  onClick={(e) => goToStep(e, "MOVE_NEXT_PAGE")}
                  isDisabled={currentStep === LAST_STEP}
                />
              )}
            </Flex>
            {/* ============== SUBMIT button ============== */}
            {currentStep === LAST_STEP && (
              <Button
                w={{ base: "100%", md: "30%" }}
                type="submit"
                colorScheme="messenger"
                isLoading={isLoading}
                onClick={onSubmit}
                isDisabled={isSubmitDisabled}
              >
                Submit
              </Button>
            )}
          </form>
        </Container>
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
};

export default ContactForm;
