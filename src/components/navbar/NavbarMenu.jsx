import { Link, useLocation } from "react-router-dom";
import useOpen from "../../hooks/useOpen";
import { motion, AnimatePresence } from "framer-motion";



const NavbarMenu = () => {

  const location = useLocation(); // Esto nos da la ruta actual, ej: "/products"

  //hook custom para manejar estado de menuMobile (open/close)  
  const { isOpen, close, toggle } = useOpen(false);

  //Array de enlaces de navegacion
  const links = [
    { name: "Home", to: "/" },
    { name: "Productos", to: "/products" },
    { name: "FAQs / Contacto", to: "/faqs" },
    { name: "Checkout", to: "/checkout" }
  ];

  return (
    <>
      <div className="relative flex justify-center sm:hidden">
        {/* Mobile icon: (solo visible en mobile)*/}
        <i
          className="bi bi-list cursor-pointer text-[#333333cf] dark:text-[#e6e6e6] block text-[1.5rem] hover:text-[1.7rem] hover:[text-shadow:_2px_2px_6px_#0000004d,_-2px_-2px_6px_#00000031] sm:hidden"
          /* Al hacer click se maneja el state open */
          onClick={toggle}
        ></i>

      {/* Menú mobile desplegable. Se renderiza solo si "open === true".
          AnimatePresence + motion.ul manejan la animación de entrada/salida */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="flex flex-col gap-2 absolute top-[30px] left-1/2 -translate-x-1/2 mt-2 bg-[#f8f8f8] dark:bg-[#2c2c2c] py-[10px] px-[30px] rounded-lg [box-shadow:0px_2px_15px_#0000001e] sm:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mapear el array de links y crear un li>a por cada una */}
            {links.map((link) => {
              const isActive = location.pathname === link.to; // Verifica si la ruta coincide

              return (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    onClick={close} //Cerrar el menu al hacer click en un enlace
                    className={`text-[#333333] dark:text-[#e6e6e6] no-underline transition-all duration-300 ease-linear cursor-pointer hover:underline hover:[text-shadow:_2px_2px_6px_#00000071,_-2px_-2px_6px_#0000004d]
                    ${isActive ? "font-bold text-[#000000] dark:text-white underline" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              )  
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>

      {/* Desktop menu: visible >576px */}
      <ul className="hidden list-none font-medium justify-between gap-x-10 sm:flex sm:gap-x-[30px]">
        {/* Mapeo de links -> li>a */}
        {links.map((link) => {
              const isActive = location.pathname === link.to; // Verifica si la ruta coincide

              return (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    onClick={close} //Cerrar el menu al hacer click en un enlace
                    className={`text-[#333333] dark:text-[#e6e6e6] no-underline transition-all duration-300 ease-linear cursor-pointer hover:underline hover:[text-shadow:_2px_2px_6px_#00000071,_-2px_-2px_6px_#0000004d]
                    ${isActive ? "font-bold text-[#000000] dark:text-white underline" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              )  
            })}
      </ul>
    </>
  );
};

export default NavbarMenu;
