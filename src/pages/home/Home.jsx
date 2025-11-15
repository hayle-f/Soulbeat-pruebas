import Hero from "./Hero"
import Section1 from "./sections/Section1"
import Section2 from "./sections/Section2"
import Section3 from "./sections/Section3"

// Componente Home: monta las secciones principales de la página de inicio
const Home = () => {
  return (
    <>
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
    </>
  )
}

export default Home