import { useCartContext } from "../context/CartContext"
import { useState } from "react"
import { getColorCode } from "../utils/utils"

const CardProduct = ({ auricular, wishlist, removeFromWishlist, addToWishlist }) => {

  // contexto Cart
  const { cart, addToCart, removeFromCart, updateQuantity } = useCartContext();

  const [selectedItem, setSelectedItem] = useState({
      ...auricular,
      ...auricular.items[0]
    })

  const labels = [
    { key: "inalambrico", label: "Inalámbrico:" },
    { key: "resistenteAgua", label: "Resistente al agua:" },
    { key: "cancelacionRuido", label: "Cancelación de ruido:" },
    { key: "microfono", label: "Micrófono:" },
    { key: "duracionBateria", label: "Duración batería:" },
  ]

  // Verificar si el auricular está en la lista de favoritos
  const isFav = wishlist.some(item => item.id === auricular.id);

  // Verificar si el auricular está en el carrito
  const isInCart = cart.some(item => item.id === selectedItem.id);

  /* console.log("CardProduct - auricular:", auricular, "selectedItem:", selectedItem);   */
  
  return (
    <>
      {/* CARD */}
      <div className="border border-[#33333352] dark:bg-[#363636] rounded-2xl w-[250px] min-h-[350px] p-4 flex flex-col gap-2 justify-around items-center flex-grow [box-shadow:0px_4px_10px_#0000000c,_0px_-4px_15px_#00000022] dark:text-[#c9c9c9] sm:w-[265px] md:max-w-[320px] lg:w-[320px]">

        <i 
          onClick={() => 
            isFav ? removeFromWishlist(auricular) 
            : addToWishlist(auricular)
          }
          
          className={`${isFav ? 'bi bi-heart-fill text-red-600' : 'bi bi-heart text-red-800'} text-xl p-0.5 cursor-pointer self-end hover:scale-115 transition-transform dark:text-red-500`}
          title={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
        </i>
      
        <img 
          src={selectedItem.imagen} 
          alt={selectedItem.nombre} 
          className="max-w-[100%] h-[200px] sm:h-[240px] object-contain" 
        />

        {/* Info */}
        <div className="flex flex-col gap-3 min-w-[100%]">
            <h3 className="text-lg font-bold dark:text-[#e2e2e2]">{selectedItem.nombre}</h3>

        {/* Selector de color con circulitos */}
        <div className="flex flex-col gap-1 items-center mb-1">
          <div className="flex gap-2 mt-1">
            {auricular.items.map((item) => {
              const colorCode = getColorCode(item.color) 
              const isSelected = selectedItem?.id === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedItem({...auricular, ...item})}
                  className={`w-5 h-5 rounded-full border-1 transition-all hover:cursor-pointer ${
                    isSelected
                      ? "border-black dark:border-white scale-115"
                      : "border-[#e2e2e2]"
                  }`}
                  style={{ backgroundColor: colorCode }}
                  title={item.color}
                />
              );
            })}
          </div>
        </div>

            {/* Especificaciones */}
            <table className="w-full">
                <tbody>
                  {
                    labels.map(({ key, label }) => (
                      <tr key={key}>
                        <th className="text-left text-[0.9rem] font-medium text-[#333333dd] dark:text-gray-300">{label}</th>
                        <td className="text-[0.9rem] font-semibold text-[#333333] dark:text-gray-200">{selectedItem.especificaciones[key]}</td>
                      </tr>
                    ))
                  }
                </tbody>
            </table>
            <p className="text-[1.2rem] font-semibold rounded-lg mt-1 text-[#333333da] dark:text-gray-200 bg-[#3333330a] dark:bg-[#424242] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">${selectedItem.precio}</p>
            
            <div className="flex flex-row justify-between w-full">
              
              {/* Ícono de carrito (izquierda) */}
              <div>
                {!isInCart && (
                  <i 
                    className="bi bi-cart-plus text-gray-600 hover:scale-115 mx-1 text-xl cursor-pointer transition-transform dark:text-gray-300"
                    title="Agregar al carrito"
                    onClick={() => addToCart(selectedItem, 1)}
                  ></i>
                )}
              </div>

              {/* Ícono de eliminar (derecha) */}
              <div>
                {isInCart && (
                  <i
                    onClick={() => removeFromCart(selectedItem.id)}
                    className="bi bi-trash text-gray-600 text-lg hover:text-gray-800 dark:text-[#c9c9c9] dark:hover:text-[#c9c9c9] hover:scale-110 transition-transform cursor-pointer"
                    title="Eliminar del carrito"
                  ></i>
                )}
              </div>

            </div>
            
        </div>
      </div>
    </>
  )
}

export default CardProduct
