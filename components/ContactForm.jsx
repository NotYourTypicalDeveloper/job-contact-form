import { React, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Stack,
  Radio,
  RadioGroup,
  FormErrorMessage,
  Text,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "../lib/api";
import SingleLineInput from "./atoms/SingleLineInput";
import TextAreaInput from "./atoms/TextAreaInput";
// import RadioButtons from "./atoms/RadioButtons";
// import DropdownMenu from "./atoms/DropdownMenu";

// Initial form values object
const initValues = {
  name: "",
  email: "",
  telephone: "",
  contract: "",
  // workstyle: "",
  message: "",
};

const initState = { values: initValues };
// Subject options array
// const contractOptions = ["Perm/Full-time", "Perm/Part-time", "Freelance"];

// styling
const autoFillStyle = {
  border: "1px solid transparent",
  textFillColor: "white",
  boxShadow: "0 0 0 1000px #1b1b1b inset",
  transition: "background-color 5000s ease-in-out 0s",
};

const ContactForm = () => {
  // Form state
  const [state, setState] = useState(initState);
  //If user clicks out of input
  const [touched, setTouched] = useState({});

  //for the success message pop-up
  const successMsg = useToast();

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("CURRENT NAME AND VALUE ", name, value);
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  // ON SUBMIT
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    // if succeeds ✅
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      successMsg({
        title: "Message sent! ✨",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      // if error ❌
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Container>
      {/* ====== Form starts here ====== */}
      {error && (
        <Text color="red.300" my={4}>
          ❌ {error} ❌
        </Text>
      )}
      <form>
        {/* ------- Name -------- */}
        <SingleLineInput
          inputLabel="Name"
          inputName="name"
          inputType="text"
          inputValue={values.name}
          isInvalid={touched.name && !values.name}
          isRequired={true}
          onChange={handleChange}
          onBlur={onBlur}
          autoFillStyle={autoFillStyle}
        />
        {/* ------- E-mail -------- */}
        <SingleLineInput
          inputLabel="Email"
          inputName="email"
          inputType="email"
          inputValue={values.email}
          isInvalid={touched.email && !values.email}
          isRequired={true}
          onChange={handleChange}
          onBlur={onBlur}
          autoFillStyle={autoFillStyle}
        />
        {/* ------- Tel -------- */}
        <SingleLineInput
          inputLabel="Telephone"
          inputName="telephone"
          inputType="tel"
          inputValue={values.telephone}
          isInvalid={false}
          isRequired={false}
          onChange={handleChange}
          onBlur={onBlur}
          autoFillStyle={autoFillStyle}
        />
        {/* ------- Contract type -------- */}
        <FormControl
          id="contract"
          marginBottom="4"
          isInvalid={touched.contract && !values.contract}
          isRequired
        >
          <FormLabel>contract</FormLabel>
          <RadioGroup
            name="contract"
            errorBorderColor="red.300"
            onBlur={onBlur}
          >
            <Stack color="#e1e0f0" direction="row">
              <Radio value="Perm/Full-time" size="sm" onChange={handleChange}>
                Perm/Full-time
              </Radio>
              <Radio value="Perm/Part-time" size="sm" onChange={handleChange}>
                Perm/Part-time
              </Radio>
              <Radio value="Freelance" size="sm" onChange={handleChange}>
                Freelance
              </Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* <RadioButtons
          radioLabel="Contract Type"
          radioName="contract"
          radioOptions={contractOptions}
          isInvalid={touched.contract && !values.contract}
          isRequired={true}
          onChange={handleChange}
          onBlur={onBlur}
        /> */}
        {/* ------- Work style ------- */}
        {/* <DropdownMenu
          ddOptions={["fully remote", "hybrid", "100%on-site"]}
          onSelect={handleChange}
          ddLabelTitle="Work style"
          ddName="work style"
        /> */}
        {/* ------- Message -------- */}
        {/* <FormControl
          id="message"
          marginBottom="4"
          isInvalid={touched.subject && !values.subject}
          isRequired
        >
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={values.message}
            sx={values.message !== "" && autoFillStyle}
            onChange={handleChange}
            onBlur={onBlur}
            resize="vertical"
            errorBorderColor="red.300"
            _autofill={autoFillStyle}
          />
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl> */}

        <TextAreaInput
          textALabel="Message"
          textAName="message"
          textAValue={values.message}
          isInvalid={touched.message && !values.message}
          isRequired={true}
          onChange={handleChange}
          onBlur={onBlur}
          autoFillStyle={autoFillStyle}
        />

        {/* ============== SUBMIT button ============== */}
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isLoading}
          onClick={onSubmit}
          isDisabled={
            !values.name || !values.email || !values.contract || !values.message
          }
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
