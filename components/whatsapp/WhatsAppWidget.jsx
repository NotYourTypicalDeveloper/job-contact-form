import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { CONTACT_MESSAGE_FIELDS } from "../../public/variables/fields.js";
import whatsapp_icon from "/public/assets/icons/whatsapp-icon.png";

const redirectUser = (newUrl) => {
  window.location.href = newUrl;
};

const WhatsAppWidget = ({ formStateValues }) => {
  const baseUrl = "https://api.whatsapp.com/send/";

  const handleClick = () => {
    const recipientPhone = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const prefix =
      "Hello, I have an exciting job opportunity for you. Details here: ";
    const message = Object.entries(formStateValues)
      .map(([key, value]) => {
        if (value) {
          return `${CONTACT_MESSAGE_FIELDS[key]}: ${
            Array.isArray(value) ? value.join(", ") : value
          }`;
        }
      })
      .join("\n");

    const whatsappLink = `${baseUrl}?phone=${recipientPhone}&text=${
      prefix + message
    }&type=phone_number&app_absent=0`;

    redirectUser(whatsappLink);
  };
  return (
    <Box
      onClick={handleClick}
      as="button"
      position="absolute"
      right="20px"
      bottom="20px"
      boxSize="40px"
    >
      <Image src={whatsapp_icon} alt="whatsapp" />
    </Box>
  );
};

export default WhatsAppWidget;
