import CartItem from "../../components/Cartitem";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/utils";

const Checkout = () => {

   // Contexto Cart
      const { cart, subtotal, tax, shipping, total } = useCartContext();

    return (
    <div className="min-h-screen">
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-[#333333dd] dark:text-[#c9c9c9]">
          <Link to="/products" className="mb-4 inline-block">
            <i className="bi bi-arrow-left mr-2 h-4 w-4"></i> Continuar comprando
          </Link>
          <h1 className="text-3xl font-bold text-center mt-2 text-[#333333] dark:text-[#e2e2e2]">Checkout</h1>
        </div>

        {/* 🔹 Layout principal: carrito + resumen del pedido */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg [box-shadow:2px_2px_10px_#00000048] p-6 dark:bg-[#363636]">
              
              {/* Si el carrito está vacío */}
              {cart.length === 0 ? (
                <div className="text-center py-12 text-[#333333dd] dark:text-[#c9c9c9]">
                  <i className="bi bi-cart h-16 w-16 mx-auto mb-4"></i>
                  <h3 className="mb-2">Tu carrito está vacío</h3>
                  <p className=" mb-6">
                    Agrega productos para comenzar tu compra
                  </p>
                  <Link to="/products" className="text-gray-600 dark:text-[#c9c9c9] tracking-wide font-medium bg-[#fdfdfd] dark:bg-[#363636] p-2 border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-lg">
                    Explorar productos
                  </Link>
                </div>
              ) : (
                // Si hay productos, se renderiza un <CartItem> por cada uno
                <div>
                  {cart.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#363636] text-gray-600 dark:text-[#c9c9c9] rounded-lg [box-shadow:2px_2px_10px_#00000048] p-6 sticky top-8 lg:p-4">
              <h2 className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">Resumen del Pedido</h2>

              <div className="space-y-4 mb-6 text-[#333333dd] dark:text-[#c9c9c9]">
                {/* subtotal */}
                <div className="flex justify-between">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl">Subtotal</span>
                  <span className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-sm sm:text-base md:text-lg lg:text-xl">{formatPrice(subtotal)}</span>
                </div>

                {/* envio */}
                <div className="flex justify-between">
                  <span className=" text-sm sm:text-base md:text-lg lg:text-xl">Envío</span>

                  {subtotal === 0 && (
                    <span className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-sm sm:text-base md:text-lg lg:text-xl">
                      $ 0,00
                    </span>
                  )}

                  {subtotal > 0 && shipping === 0 && (
                    <span className="text-green-600 dark:text-green-200 text-sm sm:text-base md:text-lg lg:text-xl">
                      ¡Gratis!
                    </span>
                  )}

                  {subtotal > 0 && shipping > 0 && (
                    <span className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-sm sm:text-base md:text-lg lg:text-xl">
                      {formatPrice(shipping)}
                    </span>
                  )}
                </div>

                {/* IVA */}
                <div className="flex justify-between">
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl">
                    IVA (5%)
                  </span>
                  <span className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-sm sm:text-base md:text-lg lg:text-xl">
                    {formatPrice(tax)}
                  </span>
                </div>

                {subtotal >= 90000 && (
                  <div className="bg-green-50 dark:bg-[#363636] border border-green-200 rounded-lg p-1 text-center text-sm sm:text-base md:text-lg lg:text-xl sm:p-3">
                    <p className="text-green-700 dark:text-green-200 text-sm">
                      ✓ Envío gratis en compras superiores a <span className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">$90000</span>
                    </p>
                  </div>
                )}

                {shipping > 0 && subtotal < 88500 && (
                  <div className="bg-blue-50 dark:bg-[#363636] border border-blue-200 rounded-lg p-1 text-center text-sm sm:text-base md:text-lg lg:text-xl sm:p-3">
                    <p className="text-blue-700 dark:text-blue-200 text-sm ">
                      Agrega <span className="font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">{formatPrice(90000 - subtotal)}</span> más para envío gratis
                    </p>
                  </div>
                )}

                <hr className="my-4 border-gray-200" />

                {/* Total */}
                <div className="flex justify-between text-[#333333] dark:text-[#e2e2e2]">
                  <span>Total</span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">{formatPrice(total)}</span>
                </div>
              </div>

              {cart.length > 0 && (
                <button 
                  className="w-full text-gray-600 dark:text-[#c9c9c9] tracking-wide font-medium bg-[#fdfdfd] dark:bg-[#363636] p-2 border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer text-sm sm:text-base md:text-lg"
                >
                  Proceder al Pago
                </button>
              )}
              

              {/* Iconos de seguridad y métodos de pago */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-[10px] sm:text-sm md:text-[10px]">
                <div className="flex justify-center gap-2 text-sm text-[#333333dd] dark:text-[#c9c9c9]">
                  <i className="bi bi-lock h-4 w-4"></i>
                  <span>Pago seguro y encriptado</span>
                </div>
                <div className="mt-4 flex text-center gap-2 justify-center text-[#141414] dark:text-[#c9c9c9]">
                  
                  <img src="imgs/payments/visa.svg" alt="Visa" className="h-8 inline" />
                  <img src="imgs/payments/mastercard.svg" alt="Mastercard" className="h-8 inline" />
                  <img src="imgs/payments/paypal.svg" alt="PayPal" className="h-8 inline" />
                  <img src="imgs/payments/mercadopago.svg" alt="Mercado Pago" className="h-8 inline" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Adicional */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-white dark:bg-[#363636] rounded-lg [box-shadow:2px_2px_10px_#00000048] p-6 text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="mb-2 text-[#333333] dark:text-[#e2e2e2] text-base sm:text-lg">Envío Rápido</h3>
            <p className="text-[#141414] dark:text-[#c9c9c9] text-sm">
              Entrega en 24-48 horas en todo el país
            </p>
          </div>
          <div className="bg-white dark:bg-[#363636] rounded-lg [box-shadow:2px_2px_10px_#00000048] p-6 text-center">
            <div className="text-3xl mb-2">↩️</div>
            <h3 className="mb-2 text-[#333333] dark:text-[#e2e2e2] text-base sm:text-lg">Devoluciones Gratis</h3>
            <p className="text-[#141414] dark:text-[#c9c9c9] text-sm">
              30 días para devoluciones sin costo adicional
            </p>
          </div>
          <div className="bg-white dark:bg-[#363636] rounded-lg [box-shadow:2px_2px_10px_#00000048] p-6 text-center">
            <div className="text-3xl mb-2">🎧</div>
            <h3 className="mb-2 text-[#333333] dark:text-[#e2e2e2] text-base sm:text-lg">Garantía Extendida</h3>
            <p className="text-[#141414] dark:text-[#c9c9c9] text-sm">
              2 años de garantía oficial del fabricante
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Checkout;
