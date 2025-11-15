import NavbarMenu from "./NavbarMenu"
import { useThemeContext } from "../../context/ThemeContext";
import { useCartContext } from "../../context/CartContext";
import MenuUser from "./MenuUser";
import { useAuthContext } from "../../context/AuthContext";



const Navbar = () => {

    const { isAuth,  user, logIn, logOut  } = useAuthContext()
    

    //Contexto tema (light/dark)
    const { theme, toggleTheme } = useThemeContext();

    // Contexto Cart
    const { cart } = useCartContext();

    //enlaces menu user
    const linksUser = [
        { name: "Perfil", href: "#" },
        { name: "Favoritos", href: "#" },
        { name: "Carrito", href: "#" },
        
    ];

    return (
        <nav className="flex justify-between items-center p-[5px_20px] [box-shadow:0px_2px_15px_#0000001e] w-full bg-[#f0f0f0b6] dark:bg-[#212121] dark:[box-shadow:0px_2px_15px_#e6e6e6] xl:py-2 xl:px-[42px]">

            <img
                src="/imgs/aurislogo.png" 
                alt="Logo" 
                id="logo" 
                className="bg-[#000000c7] dark:bg-[#eeeeee] h-auto w-[40px] my-1 rounded-full [box-shadow:2px_2px_8px_#00000071] transition-transform duration-600 hover:[transform:rotateY(180deg)]"
            />

            {/* Componente NavbarMenu (desktop + mobile) */}
            {user?.role === "admin" ?
                <div></div>
            :
                <NavbarMenu />

            }

            <div className="flex gap-3 items-center">                
                <MenuUser />

                <i
                className={`${theme === 'light' ? 'bi bi-moon text-[#333333]' : 'bi bi-sun text-yellow-500'} cursor-pointer `}
                onClick={toggleTheme}
                >
                </i>
            </div>

        </nav>
    )
    }
    
export default Navbar