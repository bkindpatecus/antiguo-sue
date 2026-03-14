import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/56987900077?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Antiguo%20Sue%C3%B1o"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-[#fff]" />
    </a>
  );
};

export default WhatsAppButton;
