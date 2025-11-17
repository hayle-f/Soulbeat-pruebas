import { createContext, useContext, useEffect, useState } from "react"
import { useAurisContext } from "./AurisContext"
import axios from "axios"
import { toast } from "react-toastify"

//1) Crear contexto
const AdminProductsContext = createContext()

//2) Crear el proveedor
export const AdminProductsProvider = ({children}) => {

     // URL base guardada en las variables de entorno
    const BASE_URL = import.meta.env.VITE_URL_PRODUCTS 
    const { setDataAuris } = useAurisContext()


    // EDITAR Producto
    const updateProduct = async (productId, productData) => {
        try {
            const { data } = await axios.put(`${BASE_URL}/${productId}`, productData)
            console.log(data)
            setDataAuris((prevData) => prevData.map((prod) => prod.id === productId ? {...prod, ...productData} : prod))

            toast("Producto editado")

        } catch (error) {
            console.error(`Error al editar el producto: ${error.message}`)
            toast.error("No se pudo editar el producto")
        }
    }

    // CREAR Producto
    const createProduct = async (productData) => {
        try {
            const { data } = await axios.post(`${BASE_URL}`, productData)
            console.log(data)
            setDataAuris((prevData) => {
            // 1) Buscar el último índice donde coincida el tipo
            const lastIndex = prevData.findLastIndex(
                (prod) => prod.tipo === data.tipo
            )

            // 2) Si no existe ningún producto del mismo tipo → insertar al inicio
            if (lastIndex === -1) {
                return [data, ...prevData]
            }

            // 3) Insertar después del último producto del mismo tipo
            return [
                ...prevData.slice(0, lastIndex + 1),
                data,
                ...prevData.slice(lastIndex + 1)
            ]
        })

            toast("Producto Creado")
            
        } catch (error) {
            console.error(`Error al crear el producto: ${error.message}`)
            toast.error("No se pudo crear el producto")
        }
    }

    // ELIMINAR Producto
    const deleteProduct = async (productId) => {
        try {
            const { data } = await axios.delete(`${BASE_URL}/${productId}`)
            console.log(data)
            setDataAuris((prevData) => prevData.filter((prod) => prod.id !== productId))

            toast("Producto eliminado")


        } catch (error) {
            console.error(`Error al eliminar el producto: ${error.message}`)
            toast.error("No se pudo eliminar el producto")
            
        }
    }


    /* Retorna el proveedor con los valores accesibles para toda la app */
    return (
        <AdminProductsContext.Provider value={{ updateProduct, createProduct, deleteProduct }}>
            {children}
        </AdminProductsContext.Provider>
    )
}

// 3) Hook custom para consumir el contexto de Auriculares
export const useAdminProductsContext = () => useContext(AdminProductsContext)

