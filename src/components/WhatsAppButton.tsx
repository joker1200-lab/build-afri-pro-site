import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/255788222899?text=Hello%20Multitech%20Engineering!%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full animate-pulse" />
    </motion.a>
  );
};

export default WhatsAppButton;
