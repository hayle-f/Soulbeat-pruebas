import { useThemeContext } from "../context/ThemeContext"
import { ToastContainer, Slide } from "react-toastify"

export const CustomToast = () => {

    const { theme } = useThemeContext();

    return (
        <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme={theme === "dark" ? "dark" : "light"}
            transition={Slide}
        />
    )
}
