import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hello, I'd like to make a reservation at ${siteConfig.name}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        animation: "pulse-gold 2s infinite",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-foreground" />
    </a>
  );
}
