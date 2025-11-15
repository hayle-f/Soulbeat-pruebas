
const Footer = () => {
  //array de redes
  const Redes = [
  {name: 'Instagram', link: 'https://www.instagram.com/', icon: 'bi bi-instagram'},
  {name: 'Facebook', link: 'https://www.facebook.com/', icon: 'bi bi-facebook'},
  {name: 'X', link: 'https://x.com/', icon: 'bi bi-x'}
]

  return (
    <footer className="bg-[#333333b3] dark:bg-[#363636] text-white flex justify-between items-center py-2 px-4 text-sm">
        <img 
          src="/imgs/aurislogo.png" 
          alt="logo" id="logofooter" 
          className="bg-[#000000c7] dark:bg-[#eeeeee] h-auto w-[30px] rounded-full [box-shadow:2px_2px_8px_#00000071] transition-transform duration-600 hover:[transform:rotateY(180deg)]" 
        />

        <p>
          &copy; 2024 SoulBeat <br /> 
          <small>Todos los derechos reservados</small>
        </p>

        <div>
          <ul className="flex gap-[10px] sm:gap-4">
            {/* mapear el array de redes y crear un li>a por cada una */}
            {Redes.map((red) => (
              <li key={red.name}>
                <a
                  href={red.link}
                  target="_blank" //abrir en nueva pestaña
                  rel="noopener noreferrer" //bp de seguridad
                  className="text-[1rem] no-underline hover:[text-shadow:_2px_2px_8px_#d7d7d7b1] hover:text-[1.1rem] sm:text-[1.1rem] sm:hover:text-[1.3rem]"
                >
                  <i className={`${red.icon} text-white`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
    </footer>
  )
}

export default Footer

