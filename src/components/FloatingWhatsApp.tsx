import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/8801568551389?text=Hi%20TynecXio%2C%20I%20want%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] group"
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 hover:bg-green-600 transition-all duration-300 animate-pulse">
        <MessageCircle size={28} />
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        Chat with us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
