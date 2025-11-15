import { AnimatePresence, motion } from "framer-motion";
import useOpen from "../../hooks/useOpen";
import { useAuthContext } from "../../context/AuthContext";


const MenuUser = () => {
    
    const { isOpen, toggle } = useOpen(false);
    
    const { isAuth,  user, logIn, logOut  } = useAuthContext()

    return (
            <div className="relative">
                    {isAuth ? (
                        <div className="flex flex-col">
                            <button
                            onClick={logOut} // función del contexto
                            className="text-[#333333cf] dark:text-[#e6e6e6] text-sm bg-[#fdfdfd] dark:bg-[#363636] py-0.5 px-1 border border-gray-400 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer"
                            >
                            Logout
                            </button>
                            <span className="text-sm text-[#333333cf] dark:text-[#e6e6e6]">Role: {user.role}</span>
                        </div>
                    ) : (
                        <div>
                        <button
                            onClick={toggle} // estado local que abre el dropdown
                            className="text-[#333333cf] dark:text-[#e6e6e6] text-sm bg-[#fdfdfd] dark:bg-[#363636] py-0.5 px-1 border border-gray-400 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer"
                        >
                            Login
                        </button>

                        {isOpen && (
                            <AnimatePresence>
                                <motion.div className="absolute top-full mt-2 bg-[#f8f8f8] dark:bg-[#2c2c2c] [box-shadow:0px_2px_15px_#0000001e] 
                                flex flex-col left-1/2 -translate-x-1/2  rounded-lg "
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                >
                                    <div
                                        onClick={() => { 
                                            logIn("user") 
                                            toggle() 
                                        }}
                                        className="text-[#333333cf] dark:text-[#e6e6e6] py-2 px-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Usuario
                                    </div>
                                    <div
                                        onClick={() => { 
                                            logIn("admin") 
                                            toggle()
                                        }}
                                        className="text-[#333333cf] dark:text-[#e6e6e6] py-2 px-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        Admin
                                    </div>
                                </motion.div>
                                </AnimatePresence>
                        )}
                        </div>
                    )}
                    </div>
        
    )
}

export default MenuUser