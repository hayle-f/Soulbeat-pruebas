
const Section1 = () => {
  return (
    <section 
      id="section1" 
      className="min-h-[300px] flex flex-wrap items-center justify-center p-4 my-6 mx-4 [box-shadow:2px_2px_10px_#00000048] rounded-2xl dark:bg-[#363636] sm:my-8  sm:mx-5"
    >
      <div className="flex flex-col text-center  gap-4">
        <h2 className="text-[1.4rem] sm:text-3xl xl:text-[2.2rem] text-[#333333] dark:text-[#e2e2e2] font-bold">
          Siente cada latido
        </h2>
        <h3 className="text-[1rem] sm:text-xl xl:text-[1.5rem] text-[#333333dd] dark:text-[#c9c9c9] font-semibold">
          La música no solo se escucha, se siente. Con SoulBeat, cada nota y cada ritmo cobran vida en tu día a día.
        </h3>
        <p className="text-[0.8rem] sm:text-base xl:text-[1.3rem] text-[#141414] dark:text-[#c9c9c9]">
          Nuestros auriculares están diseñados para sumergirte en un sonido envolvente, permitiéndote desconectarte del mundo exterior y conectarte con tu música favorita. Ya sea que estés en casa, en el trabajo o en movimiento, SoulBeat te acompaña con una calidad de sonido excepcional que transforma cualquier momento en una experiencia única.
        </p>
      </div>
    </section>
  )
}

export default Section1