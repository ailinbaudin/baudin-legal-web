
import React from "react";
import { MessageSquare } from "lucide-react";

const WhatsappButton: React.FC = () => {
  const phoneNumber = "5491138979208";
  const whatsappMessage = "Hola, quiero hacer una consulta";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-legalGold hover:bg-legalGold/90 text-black p-3 rounded-full shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-legalGold"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};

export default WhatsappButton;
