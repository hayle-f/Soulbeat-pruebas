import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Recibe por props un array de imágenes: [{src:"...", alt:"..."}, ...]
const AuricularSlider = ({ images }) => { 
  // State para llevar el índice actual de la imagen
  const [index, setIndex] = useState(0);

  /* useEffect: crea un intervalo que cambia el índice de la imagen cada X segs
  setIndex incrementa el índice de forma circular para que el slider vuelva al inicio
  La función de limpieza clearInterval evita que el temporizador siga corriendo al desmontar el componente
  Se reinicia si cambia la cantidad de imágenes (images.length) */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative w-full flex justify-center items-center">
      {/* AnimatePresence: permite animaciones al montar/desmontar */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src} // cambia cada ciclo
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-[80%] sm:max-w-[90%] xl:max-w-[70%] object-contain relative"
          initial={{ opacity: 0, x: 50 }}    // entra desde la derecha
          animate={{ opacity: 1, x: 0 }}     // posición final
          exit={{ opacity: 0, x: -50 }}      // sale hacia la izquierda
          transition={{ duration: 0.9, ease: "linear" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default AuricularSlider


