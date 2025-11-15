

const FaqItem = ({ id, question, answer, isFaqOpen, toggle }) => {
  return (
    <div className="faq-item mb-2">

      {/* Pregunta y flecha */}
      <button
        onClick={() => toggle(id)}
        className="flex justify-between items-center font-semibold p-[10px] gap-4 text-left w-full border-none cursor-pointer text-[0.9rem] sm:text-base xl:text-[1.3rem] text-[#141414] dark:text-[#c9c9c9]"
      >
        {question}
        <span
          className={`arrow w-0 h-0 border-l-4 border-r-4 border-transparent border-t-8 border-t-[#333333dd] text-[#333333dd] dark:border-t-[#c9c9c9] transition-transform duration-300 ease-in-out ${
            isFaqOpen ? "rotate-180" : ""
          }`}
        ></span>
      </button>

      {/* Si este FaqItem está abierto, se muestra su respuesta */}
      {isFaqOpen && (
        <div className="p-3 bg-[#3333330a] dark:bg-[#5151517e] mt-1 rounded-lg">
          <p className="p-1 text-sm leading-5 xl:text-[1rem] text-[#141414] dark:text-[#c9c9c9]">
            {answer.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      )}

    </div>
  );
};

export default FaqItem;
