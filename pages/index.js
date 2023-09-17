import React from "react";
import { EmailIcon } from "@chakra-ui/icons";
import ContactForm from "../components/organisms/ContactForm";
import Shape1 from "../components/atoms/Shape1.jsx";
import Shape2 from "../components/atoms/Shape2.jsx";

export default function Home() {
  return (
    <>
      <Shape1 w="5rem" h="5rem" pos="absolute" top="10vh" left="9vw" />
      <Shape1 w="6rem" h="7rem" pos="absolute" top="31vh" right="9vw" />
      <Shape2
        w="5rem"
        h="5rem"
        pos="absolute"
        bottom="3vh"
        left="6vw"
        boxShadow="-17px 5px 1px 1px rgb(56 53 53 / 100%)"
      />
      <EmailIcon
        transform="rotate(30deg)"
        pos="absolute"
        w={10}
        bottom="10vh"
        right="6vw"
      />
      <ContactForm />
    </>
  );
}
