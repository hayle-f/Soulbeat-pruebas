import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useWishlist = () => {

    const [wishlist, setWishlist] = useState(() => {
        // Estado que guarda la lista de favoritos
        // Inicializa desde localStorage si ya hay algo guardado, sino empieza como array vacío
        const storedWishlist = localStorage.getItem('wishlist');
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });

    // Función para eliminar un item de la wishlist por su id
    const removeFromWishlist = (item) => {
        setWishlist(wishlist.filter(wishItem => wishItem.id !== item.id))
        toast.error("Eliminado de favoritos")
    }
        
    
    
    const addToWishlist = (item) => {
        // Primero verifica si ya existe para evitar duplicados
        if (!wishlist.some(wishItem => wishItem.id === item.id)) {
            setWishlist([...wishlist, item]);
        }
        toast.success("Agregado a favoritos")
    }

    // Cada vez que la wishlist cambie, guarda el array actualizado en localStorage para persisitencia
    // Convierte de array a texto JSON para almacenarlo
    useEffect(() => {
        /* console.log("Wishlist actualizada, guardando en localStorage:", wishlist);  */
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }, [wishlist])

    return { wishlist, addToWishlist, removeFromWishlist }
}

export default useWishlist