import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import ContactForm from "../components/organisms/ContactForm";

export default function Home() {
  return (
    <section>
      <Heading>Please fill out this form </Heading>
      <ContactForm />
    </section>
  );
}
