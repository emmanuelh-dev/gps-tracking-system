import React from "react";
import {IconBrandWhatsapp} from "@tabler/icons-react";
const WhatsappButton = () => {
  const phoneNumber = "8126060795";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-500 fixed bottom-10 right-0"  
    >
        <IconBrandWhatsapp className="mr-2" size={64} />
    </a>
  );
};

export default WhatsappButton;
