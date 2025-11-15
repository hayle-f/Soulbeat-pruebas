import { Routes, Route, Navigate } from "react-router-dom"
import Products from "../pages/products/Products"
import Home from "../pages/home/Home"
import Checkout from "../pages/checkout/Checkout"
import FaqsSubscription from "../pages/faqsSubscription/FaqsSubscription"
import AdminRoutes from "./AdminRoutes"
import { useAuthContext } from "../context/AuthContext"

const AppRoutes = () => {

    const { user } = useAuthContext()

    return (        
        <main className="flex-1">
            {(user?.role === 'admin') ?
                <AdminRoutes />
            :
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/Faqs' element={<FaqsSubscription />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/*' element={<Navigate to='/' replace />} />
                </Routes>
            }        
        </main>
    )
}

export default AppRoutes