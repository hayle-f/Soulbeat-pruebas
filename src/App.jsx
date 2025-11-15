import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { CustomToast } from "./components/CustomToast"
import AppRoutes from "./routes/AppRoutes"
import { CartProvider } from "./context/CartContext"
import { AurisProvider } from "./context/AurisContext"





function App() {

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-[#212121] transition-colors duration-300">
      <BrowserRouter> 
        <AurisProvider>
          <CartProvider> 
            <Navbar />
            <AppRoutes />
          </CartProvider>
        </AurisProvider>
        <Footer />
        <CustomToast />
      </BrowserRouter>
    </div>
  )
}

export default App
