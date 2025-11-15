import { Routes, Route, Navigate } from "react-router-dom"
import AdminProducts from "../pages/admin/AdminProducts"
import AdminProductForm from "../pages/admin/AdminProductForm"

const AdminRoutes = () => {
    

    return (
        <Routes>
            <Route path='/admin/products' element={<AdminProducts />} />
            <Route path='/admin/products/crear' element={<AdminProductForm />} />
            <Route path='/admin/products/editar/:id' element={<AdminProductForm />} />
            <Route path='/*' element={<Navigate to='/admin/products' replace />} />
        </Routes>
    )
}

export default AdminRoutes