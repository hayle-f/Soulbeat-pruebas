import AuricularSlider from "../../../components/AuricularSlider";

const Section3 = () => {
  return (
    <section
      id="section3"
      className="min-h-[300px] flex flex-col sm:flex-row items-center justify-center p-4 my-6 mx-4 [box-shadow:2px_2px_10px_#00000048] rounded-2xl dark:bg-[#363636] sm:my-8 sm:mx-5"
    >
      {/* Imagen 3D */}
      <div className="p-[10px] flex justify-center items-center w-full max-w-[400px] sm:max-w-[50%] aspect-[1/1]">
        {/* Componente de la animacion slider del auricular */}
        <AuricularSlider
        /* Array de imag(props) que se pasan */
        images={[
          { src: "imgs/soundcore_10.png", alt: "Auricular azul" },
          { src: "imgs/Aiwa_BT-301-2.png", alt: "Auricular blanco" },
          { src: "imgs/Soul_Neox_Bt250.png", alt: "Auricular violeta" },
        ]}
      />
      </div>

      {/* Texto */}
      <div id="textos" className="flex flex-col text-center gap-2 w-full sm:max-w-[45%] p-2">
        <h2 className="text-[1.4rem] sm:text-3xl xl:text-[2.2rem] text-[#333333] dark:text-[#e2e2e2] font-bold">
          Diseño que se adapta a ti
        </h2>
        <h3 className="text-[1rem] sm:text-xl xl:text-[1.5rem] text-[#333333dd] dark:text-[#c9c9c9] font-semibold">
          Comodidad y estilo en un solo lugar
        </h3>
        <p className="text-[0.8rem] sm:text-base xl:text-[1.3rem] text-[#141414] dark:text-[#c9c9c9]">
          Además de una calidad de sonido incomparable, nuestros auriculares están diseñados pensando en tu comodidad. Elige entre una amplia variedad de estilos y colores que reflejan tu personalidad, con modelos ergonómicos que se ajustan perfectamente a tus oídos para largas sesiones sin molestias.
        </p>
      </div>
    </section>
  )
}

export default Section3


