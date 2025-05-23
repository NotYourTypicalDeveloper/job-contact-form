import { Box, keyframes } from "@chakra-ui/react";
import Image from "next/image";
import { CONTACT_MESSAGE_FIELDS } from "../../public/variables/fields.js";
import whatsapp_icon from "/public/assets/icons/whatsapp-icon.png";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;
const pulseAnimation = `${pulse} 2s ease-in-out infinite`;

const redirectUser = (newUrl, newTab = true) => {
  if (newTab) {
    window.open(newUrl, "_blank");
  } else {
    window.location.href = newUrl;
  }
};

const WhatsAppWidget = ({ formStateValues }) => {
  const generateWhatsappURL = (prefix, recipientPhone) => {
    const baseUrl = "https://api.whatsapp.com/send/";

    const message = Object.entries(formStateValues)
      .map(([key, value]) => {
        if (
          (typeof value === "string" && value !== "") ||
          (Array.isArray(value) && value.length > 0)
        ) {
          return `${CONTACT_MESSAGE_FIELDS[key]}: ${
            Array.isArray(value) ? value.join(", ") : value
          }`;
        }
      })
      .join("\n");

    const encodedMsg = encodeURIComponent(prefix + message);
    const whatsappLink = `${baseUrl}?phone=${recipientPhone}&text=${encodedMsg}&type=phone_number&app_absent=0`;
    return whatsappLink;
  };

  const handleClick = () => {
    const whatsappLink = generateWhatsappURL(
      "Hello, I have an exciting job opportunity for you. Details here:\n",
      process.env.NEXT_PUBLIC_PHONE_NUMBER
    );
    redirectUser(whatsappLink);
  };
  return (
    <Box
      onClick={handleClick}
      as="button"
      borderRadius="50%"
      animation={pulseAnimation}
      bgColor="#54e956"
      boxShadow="1px 0px 15px 5px #7f8c81"
      boxSize="50px"
      position={{ base: "relative", md: "absolute" }}
      right={{ md: "1rem" }}
      bottom={{ md: "1rem" }}
    >
      <Image src={whatsapp_icon} alt="whatsapp" />
    </Box>
  );
};

export default WhatsAppWidget;
