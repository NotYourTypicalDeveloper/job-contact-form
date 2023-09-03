import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import ContactForm from "../components/organisms/ContactForm";

export default function Home() {
  return (
    <section>
      <Heading>Contact Form - job prop </Heading>
      <ContactForm />
    </section>
  );
}
