import React from "react";
import ContactForm from "../components/organisms/ContactForm";
import Shape1 from "../components/atoms/graphics/Shape1.jsx";
import Shape2 from "../components/atoms/graphics/Shape2.jsx";

export default function Home() {
  return (
    <>
      <Shape1
        w={{ base: "3rem", md: "5rem" }}
        h={{ base: "3rem", md: "5rem" }}
        pos="absolute"
        top="10vh"
        left="9vw"
      />
      <Shape1
        w={{ base: "4rem", md: "6rem" }}
        h={{ base: "5rem", md: "7rem" }}
        pos="absolute"
        top="31vh"
        right={{ base: "9vw", lg: "15vw" }}
      />
      <Shape2
        w="5rem"
        h="5rem"
        pos="absolute"
        bottom={{ base: "3vh", lg: "9vh" }}
        left={{ base: "9vw", md: "7vh", lg: "6vw" }}
        boxShadow="-17px 5px 1px 1px rgb(56 53 53 / 100%)"
      />
      <ContactForm />
    </>
  );
}
