import { useCartContext } from "../context/CartContext"
import CartItem from "./Cartitem";
import { Link } from "react-router-dom";

const Cart = ({ isCartOpen, closeCart }) => {

    // Contexto Cart
    const { cart } = useCartContext();
    
    return (
    <>
        {isCartOpen && 
        <div className="fixed inset-0 bg-black/85 backdrop-blur-[2px] flex items-center justify-center z-50">
            
            <div className="relative bg-white dark:bg-[#363636] dark:text-[#c9c9c9] p-2 rounded shadow-md w-[70%] max-h-[80%] flex flex-col items-center sm:p-4 sm:w-[60%] lg:w-[50%]">
                
                {/* Botón de cerrar */}
                <i
                    className="bi bi-x-lg absolute top-3 right-3 cursor-pointer hover:text-xl"
                    onClick={closeCart}
                ></i>

                {/* Título */}
                <h2 className="text-xl text-[#333333] dark:text-[#e2e2e2] font-bold my-4 text-center sm:text-2xl lg:text-4xl">Carrito</h2>

                {/* lista de productos del carrito */}
                {cart.length === 0 ? (
                    <div className="text-center py-4 text-[#333333dd] dark:text-[#c9c9c9]">
                    <i className="bi bi-cart h-16 w-16 mx-auto mb-4"></i>
                    <h3 className="mb-2">Tu carrito está vacío</h3>
                    <p className="mb-6">
                        Agrega productos para comenzar tu compra
                    </p>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto w-full px-1">
                        {cart.map((item) => (
                            <CartItem 
                            key={item.id} 
                            item={item}
                            />
                        ))}
                    </div>
                    
                )}
                
                {cart.length > 0 && (
                <Link 
                    to="/checkout" 
                    onClick={closeCart} 
                    disabled={cart.length === 0}
                    className="w-full mt-4 text-gray-600 dark:text-[#c9c9c9] tracking-wide font-medium bg-[#fdfdfd] dark:bg-[#363636] p-1 border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-lg text-center block"
                >
                    Ir al Checkout
                </Link>
                )}
            </div>
        </div>
        }
    </>
)
}

export default Cart


