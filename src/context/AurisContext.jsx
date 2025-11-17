import { toast } from "react-toastify"
import fetchAuris from "../api/aurisAPI"
import { createContext, useContext, useEffect, useState } from "react"

//1) Crear contexto
const AurisContext = createContext()

//2) Crear el proveedor
export const AurisProvider = ({children}) => {

    const [dataAuris, setDataAuris] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        //fn async para obtener los datos de la api()
        const loadAuris = async () => {
            try{
                const data = await fetchAuris()
                console.log("dataAuris api:", data)

                setDataAuris(data)

            } catch (error) {
                // Mostrar toast de error si falla la carga
                toast.error(`Error al cargar los auriculares Intenta más tarde: ${error.message}`)
            } finally {
                setIsLoading(false)
            }
        }
        
        loadAuris()

    }, [])


    /* Retorna el proveedor con los valores accesibles para toda la app */
    return (
        <AurisContext.Provider value={{dataAuris, setDataAuris, isLoading }}>
            {children}
        </AurisContext.Provider>
    )
}

// 3) Hook custom para consumir el contexto de Auriculares
export const useAurisContext = () => useContext(AurisContext);



