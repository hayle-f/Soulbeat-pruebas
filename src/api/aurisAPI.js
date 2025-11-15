import axios from "axios";

// Fn async => obtiene los auriculares desde la API
const fetchAuris = async () => {

    // URL base guardada en las variables de entorno
    const BASE_URL = import.meta.env.VITE_URL_PRODUCTS

    try {
        // Petición GET a la API
        const { data } = await axios.get(BASE_URL)
        return data
        
    } catch (error) {
        // Muestra el error en consola (solo para debug)
        console.error("Error al obtener los auriculares:", error.message);

        // --- Manejo de errores según el tipo de fallo ---
        if (error.response) {
            // El servidor respondió con un código fuera del rango
            if (error.response.status === 404) {
                throw new Error("No se encontraron productos (404)");
            } else if (error.response.status === 500) {
                throw new Error("Error interno del servidor (500)");
            }
        } else if (error.request) {
        // No hubo respuesta del servidor
        throw new Error("No se pudo conectar con el servidor");
        } else {
        // Otro tipo de error(configuración, red, etc.)
        throw new Error("Error inesperado al cargar los productos");
        }
    }
}

export default fetchAuris;