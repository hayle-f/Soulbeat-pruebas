

const Subscription = () => {
    return (
        <section className="items-center justify-center gap-3 p-4 my-8 mx-auto max-w-[90%] [box-shadow:2px_2px_10px_#00000048] rounded-2xl xl:p-[30px] xl:max-w-[80%]
        dark:bg-[#363636] flex flex-col  items-center[box-shadow:0px_4px_10px_#0000000c,_0px_-4px_15px_#00000022] dark:text-[#c9c9c9]
        ">
            <h2 className="text-[2rem] p-2 text-center sm:text-[2.2rem] xl:text-[2.5rem] text-[#333333] dark:text-[#e2e2e2] font-bold">
                Suscribite
            </h2>
            <p className="text-[0.9rem] sm:text-base xl:text-[1.3rem] max-w-[90%] text-[#141414] dark:text-[#c9c9c9]">
                Suscribite y sé el primero en enterarte de nuestras ofertas exclusivas, promociones especiales y novedades de nuestros productos. <br /> No te pierdas nada y mantenete siempre actualizado.
            </p>

            <form 
                action="#" 
                method="POST" 
                /* className="bg-[#3333330a] dark:bg-[#3f3f3f] p-4 rounded-2xl mx-auto my-4 border border-[#33333352] dark:border-[#c9c9c960] sm:p-6 max-w-[95%] sm:max-w-[1000px]" */
                className="p-6 rounded-xl mx-auto my-8 border border-[#33333352] dark:border-[#c9c9c960] sm:p-8 w-full max-w-[95%] sm:max-w-[550px] space-y-5"
            >

                <fieldset className="mb-4">

                    <legend className="text-left text-sm text-[#424242e6] dark:text-[#c9c9c9d7] pb-1.5 px-3">Nombre:</legend>
                    
                    <input type="text" id="nombre" name="nombre" required className="w-full py-2 px-4 text-[#424242] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md dark:focus:shadow-md dark:focus:shadow-[#c9c9c960] transition-colors duration-200"  />
                </fieldset>

                <fieldset className="mb-5">

                    <legend className="text-left text-sm text-[#424242] dark:text-[#c9c9c9d7] pb-1.5 px-3">Apellido</legend>

                    <input type="text" id="apellido" name="apellido" required className="w-full py-2 px-4 text-[#424242] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md dark:focus:shadow-md dark:focus:shadow-[#c9c9c960] transition-colors duration-200" />
                </fieldset>

                <fieldset className="mb-4">

                    <legend className="text-left text-sm text-[#424242] dark:text-[#c9c9c9d7] pb-1.5 px-3">E-mail</legend>

                    <input type="email" id="email" name="email" required className="w-full py-2 px-4 text-[#424242] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md dark:focus:shadow-md dark:focus:shadow-[#c9c9c960] transition-colors duration-200"  />
                </fieldset>

                <button type="submit" className="w-full text-[#424242] dark:text-[#c9c9c9d7] tracking-wide text-base mt-3 bg-[#fdfdfd] dark:bg-[#3f3f3f] p-2 border border-[#33333352] dark:border-[#c9c9c960] rounded-lg transition-all ease-linear duration-200 hover:[box-shadow:2px_2px_8px_#00000048] hover:cursor-pointer md:text-lg">
                    Suscribirse
                </button>
            </form>
        </section>
    )
}

export default Subscription


