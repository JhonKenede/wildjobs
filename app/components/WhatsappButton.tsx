import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => (
  <a
    href="https://wa.me/34686058678" // <-- tu número de WhatsApp sin espacios ni signos
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
    aria-label="Abrir WhatsApp"
  >
    <FaWhatsapp className="text-2xl" />
  </a>
);
