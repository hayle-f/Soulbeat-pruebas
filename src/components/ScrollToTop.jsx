
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostrar el botón cuando el scroll pasa 350px
    const handleScroll = () => setVisible(window.scrollY > 550);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll suave hacia arriba
          initial={{ opacity: 0, scale: 0.7 }}   // Inicio animación
          animate={{ opacity: 1, scale: 1 }}     // Animación al aparecer
          exit={{ opacity: 0, scale: 0.7 }}      // Animación al desaparecer
          transition={{ duration: 0.25 }}
          className="
            fixed bottom-10 right-4 z-50
            bg-[#fdfdfd] dark:bg-[#363636] 
            text-[#333333] dark:text-[#c9c9c9] 
            py-2 px-3 rounded-full border border-[#33333352]
            [box-shadow:2px_2px_10px_#00000048] 
            hover:[box-shadow:2px_2px_12px_#00000070]
            transition-all duration-200
            flex items-center justify-center
            hover:cursor-pointer
          "
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};