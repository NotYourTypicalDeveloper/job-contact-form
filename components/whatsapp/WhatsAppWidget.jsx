import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import whatsapp_icon from "/public/assets/icons/whatsapp-icon.png";

const WhatsAppWidget = ({ messageContent }) => {
  const phoneNumber = "+447448267718";
  const baseUrl = "https://api.whatsapp.com/send/";

  const whatsappLink = `${baseUrl}?phone=${phoneNumber}&text=${messageContent}&type=phone_number&app_absent=0`;

  return (
    <Box position="absolute" right="20px" bottom="20px" boxSize="40px">
      <a href={whatsappLink} target="_blank" rel="noreferrer noopener">
        <Image src={whatsapp_icon} alt="whatsapp" />
      </a>
    </Box>
  );
};

export default WhatsAppWidget;
