import { useState } from "react";
import { dataFaqs } from "../../utils/dataFaqs";
import FaqItem from "./FaqItem";

const Faqs = () => {
  // Estado para guardar la FAQ que está abierta (por id)
    const [openFaq, setOpenFaq] = useState(null);

    // Función para abrir/cerrar FAQ
    const handleToggle = (id) => {
        // Si ya está abierta, la cerramos, si no, la abrimos
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <section className="items-center justify-center gap-3 p-4 my-8 mx-auto max-w-[90%] [box-shadow:2px_2px_10px_#00000048] rounded-2xl xl:p-[30px] xl:max-w-[80%]
        dark:bg-[#363636] flex flex-col  items-center[box-shadow:0px_4px_10px_#0000000c,_0px_-4px_15px_#00000022] dark:text-[#c9c9c9]
        ">
            <h1 className="text-[2rem] p-2 text-center sm:text-[2.2rem] xl:text-[2.5rem] text-[#333333] dark:text-[#e2e2e2] font-bold">
                Preguntas Frecuentes
            </h1>

            <div className="grid xl:grid-cols-2 gap-y-3 gap-x-[8%] my-3 w-full">
                {dataFaqs.map((faq) => (
                <FaqItem
                    key={faq.id}
                    id={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isFaqOpen={openFaq === faq.id}        // Le pasamos el estado (openFaq)
                    toggle={handleToggle}           
                />
                ))}
            </div>
        </section>
    );
};

export default Faqs;
