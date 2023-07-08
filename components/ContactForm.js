import { React, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  Stack,
  Radio,
  RadioGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import { sendContactForm } from "../lib/api";

const initValues = {
  name: "",
  email: "",
  telephone: "",
  topic: "",
  message: "",
};

const initState = { values: initValues };

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

  const { values, isLoading } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    await sendContactForm(values);
  };

  return (
    <Container>
      {/* ====== Form starts here ====== */}
      <form>
        {/* ------- Name -------- */}
        <FormControl
          id="name"
          marginBottom="4"
          isInvalid={touched.name && !values.name}
          isRequired
        >
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={values.name}
            sx={values.name !== "" && autoFillStyle}
            errorBorderColor="red.300"
            onChange={handleChange}
            onBlur={onBlur}
            _autofill={autoFillStyle}
          />
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* ------- E-mail -------- */}
        <FormControl
          id="email"
          marginBottom="4"
          isInvalid={touched.email && !values.email}
          isRequired
        >
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={values.email}
            sx={values.email !== "" && autoFillStyle}
            onChange={handleChange}
            errorBorderColor="red.300"
            onBlur={onBlur}
            _autofill={autoFillStyle}
          />
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* ------- Tel -------- */}

        <FormControl
          id="telephone"
          marginBottom="4"
          isInvalid={touched.telephone && !values.telephone}
          isRequired
        >
          <FormLabel>Telephone</FormLabel>
          <Input
            type="tel"
            name="telephone"
            value={values.telephone}
            sx={values.telephone !== "" && autoFillStyle}
            onChange={handleChange}
            onBlur={onBlur}
            errorBorderColor="red.300"
            _autofill={autoFillStyle}
          />
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* ------- Topic -------- */}
        <FormControl
          id="topic"
          marginBottom="4"
          isInvalid={touched.topic && !values.topic}
          isRequired
        >
          <FormLabel>Topic</FormLabel>
          <RadioGroup name="topic" errorBorderColor="red.300" onBlur={onBlur}>
            <Stack color="#e1e0f0" direction="row">
              <Radio
                value="recruitment"
                checked="recruitment"
                size="sm"
                onChange={handleChange}
              >
                Recruitment
              </Radio>
              <Radio
                value="other"
                checked="other"
                size="sm"
                onChange={handleChange}
              >
                Other
              </Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>required</FormErrorMessage>
        </FormControl>

        {/* ------- Message -------- */}
        <FormControl
          id="message"
          marginBottom="4"
          isInvalid={touched.topic && !values.topic}
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
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isLoading}
          onClick={onSubmit}
          isDisabled={
            !values.name ||
            !values.email ||
            !values.telephone ||
            !values.topic ||
            !values.message
          }
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
