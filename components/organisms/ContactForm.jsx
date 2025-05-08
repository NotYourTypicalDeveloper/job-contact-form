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
import { sendContactForm } from "../../lib/api.js";
import {
  FormContext,
  FormDispatchContext,
} from "../../lib/context/FormContext.js";
import { formReducer, initialState } from "../../lib/reducer/formReducer.js";

// Form Pages
import Page1 from "../molecules/Page1.jsx";
import Page2 from "../molecules/Page2.jsx";
import Page3 from "../molecules/Page3.jsx";

const ContactForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const { currentStep, isLoading, values } = formState;

  // //for the success message pop-up
  const successMsg = useToast();

  // User clicks "Prev"
  const onPrevClick = (e) => {
    e.preventDefault();
    dispatch({ type: "MOVE_PREV_PAGE" });
  };
  // User clicks "Next"
  const onNextClick = (e) => {
    e.preventDefault();
    dispatch({ type: "MOVE_NEXT_PAGE" });
  };

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
          <Text> {formState.globalErrorMsg}</Text>

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
                w={
                  currentStep == 1
                    ? "33.3%"
                    : currentStep == 2
                    ? "66.6%"
                    : "100%"
                }
                h="100%"
                bgColor="#2c1ef1"
                borderRadius={4}
              ></Box>
            </Box>
            <Text fontWeight="extrabold" fontSize="small">
              {currentStep} / 3
            </Text>
          </Flex>
          <form style={{ padding: "2rem" }}>
            <Box my={{ base: 4, lg: 2 }}>
              {currentStep == 1 && <Page1 />}
              {currentStep == 2 && <Page2 />}

              {currentStep == 3 && <Page3 />}
            </Box>
            <Flex flexDir={{ base: "column", sm: "row" }} mb={5}>
              {currentStep !== 1 && (
                <Button
                  color="#5045f0"
                  borderColor="#5045f0"
                  variant="outline"
                  onClick={onPrevClick}
                  disabled={currentStep == 1}
                  mr={4}
                  _hover={{
                    bgColor: "#5045f0",
                    color: "white",
                  }}
                  _active={{ bgColor: "#717ae2" }}
                  w={{ base: "100%", sm: "50%", md: "20%" }}
                  mb={{ base: 3, lg: 0 }}
                >
                  Prev
                </Button>
              )}
              {currentStep !== 3 && (
                <Button
                  color="#5045f0"
                  borderColor="#5045f0"
                  variant="outline"
                  onClick={onNextClick}
                  disabled={currentStep == 3}
                  _hover={{
                    bgColor: "#5045f0",
                    color: "white",
                  }}
                  _active={{ bgColor: "#717ae2" }}
                  w={{ base: "100%", sm: "50%", md: "20%" }}
                >
                  Next
                </Button>
              )}
            </Flex>
            {/* ============== SUBMIT button ============== */}
            {currentStep === 3 && (
              <Button
                w={{ base: "100%", md: "30%" }}
                type="submit"
                colorScheme="messenger"
                isLoading={isLoading}
                onClick={onSubmit}
                isDisabled={
                  !values.sendername ||
                  !values.company ||
                  !values.email ||
                  !values.message ||
                  !values.contract ||
                  !values.seniority ||
                  !values.jobdescription ||
                  values.salary === "Move the slider" ||
                  !values.location ||
                  !values.workstyle ||
                  !values.message ||
                  !values.recruitmentprocess
                }
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
