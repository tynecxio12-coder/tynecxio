import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/8801568551389?text=Hi%20TynecXio%2C%20I%20want%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
