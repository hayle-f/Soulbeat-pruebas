import AuricularSlider from "../../../components/AuricularSlider";

const Section2 = () => {
  return (
    <section 
      id="section2"
      className="min-h-[300px] flex flex-col sm:flex-row items-center justify-center p-4 my-6 mx-4 [box-shadow:2px_2px_10px_#00000048] rounded-2xl dark:bg-[#363636] sm:my-8 sm:mx-5"
    >
      {/* Texto */}
      <div id="textos" className="flex flex-col text-center gap-2 w-full sm:max-w-[45%] p-2">
        <h2 className="text-[1.4rem] sm:text-3xl xl:text-[2.2rem] text-[#333333] dark:text-[#e2e2e2] font-bold">
          Perfectos para cualquier ocasión
        </h2>
        <h3 className="text-[1rem] sm:text-xl xl:text-[1.5rem] text-[#333333dd] dark:text-[#c9c9c9] font-semibold">
          Para cada momento, hay un SoulBeat ideal
        </h3>
        <p className="text-[0.8rem] sm:text-base xl:text-[1.3rem] text-[#141414] dark:text-[#c9c9c9]">
          Desde llamadas importantes en la oficina hasta tus entrenamientos más intensos, nuestros auriculares te brindan la versatilidad que necesitas. Con opciones que se ajustan a cada estilo de vida, ya sea para disfrutar de una videollamada clara y fluida, o para sumergirte en tu juego favorito con la máxima inmersión sonora, SoulBeat está hecho para ti
        </p>
      </div>

      {/* Imagen 3D */}
      <div className="p-[10px] flex justify-center items-center w-full max-w-[400px] sm:max-w-[50%] aspect-[1/1]">
        {/* Componente de la animacion slider del auricular */}
        <AuricularSlider
        /* Array de imag(props) que se pasan */
        images={[
          { src: "imgs/auri-fucsia.png", alt: "Auricular fucsia" },
          { src: "imgs/sleve_11.png", alt: "Auricular gris" },
          { src: "imgs/QCY_10.png", alt: "Auricular rosa" },
        ]}
      />
      </div>
    </section>
  );
};

export default Section2;
