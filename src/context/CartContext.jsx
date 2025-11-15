import { createContext, useContext, useEffect, useState, useMemo } from "react"
import { toast } from "react-toastify"

// 1) Crear el contexto
const CartContext = createContext()

// 2) Crear el proveedor
export const CartProvider = ({ children }) => {
    
    // Estado del carrito, se inicializa desde localStorage si hay datos guardados
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            const parsed = JSON.parse(storedCart)
            // Convertimos precio, cantidad y stock a número por seguridad
            return parsed.map(item => ({
                ...item,
                precio: Number(item.precio),
                cantidad: Number(item.cantidad),
                stock: Number(item.stock),
            }))
        }
        return []
    })

    // Función para agregar un producto al carrito
    // Solo se guardan los datos generales + la variante seleccionada
    const addToCart = (item, cantidad = 1) => {
        // Verificar si el item ya está en el carrito (por id de variante)
        const exists = cart.find(cartItem => cartItem.id === item.id)

        if (!exists) {
            if(cantidad <= item.stock) {
                // Construimos el item que se agregará al carrito
                const newCartItem = {
                    id: item.id,                    // id único de la variante
                    nombre: item.nombre,            // info general
                    tipo: item.tipo,                // info general
                    precio: Number(item.precio),    // precio
                    especificaciones: item.especificaciones, // especificaciones generales
                    color: item.color,              // variante seleccionada
                    stock: Number(item.stock),      // stock de la variante
                    imagen: item.imagen,            // imagen de la variante
                    cantidad: Number(cantidad)      // cantidad agregada
                }

                // Actualizamos el estado del carrito agregando el nuevo item
                setCart(prevCart => [...prevCart, newCartItem])

                toast("Agregado al Carrito")

                //console.log("Item agregado al carrito:\n", JSON.stringify(newCartItem, null, 2))

            } else {
                toast.error("No hay Stock suficiente")
            }
        }
    }

    // Función para actualizar la cantidad de un item en el carrito
    const updateQuantity = (item, cantidad) => {
        setCart(prevCart =>
            prevCart.map(cartItem => {
                if (cartItem.id === item.id) {   // buscamos el item por id
                    if (cantidad <= cartItem.stock) {  // verificamos stock
                        return { ...cartItem, cantidad } // actualizamos cantidad
                    } else {
                        toast.error("No hay Stock suficiente")
                        return cartItem // no hacemos cambios si excede stock
                    }
                }
                return cartItem // devolvemos los demás items igual
            })
        )
    }

    // Función para eliminar un item del carrito por su id
    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== id))
        toast("Eliminado del carrito")
    }

    // Cálculos optimizados con useMemo para evitar recalcular en cada render
    const subtotal = useMemo(() => cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0), [cart])
    const tax = useMemo(() => subtotal * 0.05, [subtotal]) // impuesto 5%
    const shipping = useMemo(() => (subtotal === 0 ? 0 : subtotal >= 90000 ? 0 : 1500), [subtotal]) // envío gratis >90k
    const total = useMemo(() => subtotal + tax + shipping, [subtotal, tax, shipping])

    // Guardar en localStorage cada vez que cambia el carrito para persistencia
    useEffect(() => { 
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // 3) Proveer el contexto con todas las funciones y valores del carrito
    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, subtotal, tax, shipping, total }}>
            {children}
        </CartContext.Provider>
    )
}

// 4) Hook custom para usar el contexto del carrito
export const useCartContext = () => useContext(CartContext)
