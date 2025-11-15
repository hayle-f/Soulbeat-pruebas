
const ModalFavs = ({ isFavsOpen, closeFavs, wishlist, removeFromWishlist }) => {


    return (
        <>
            {isFavsOpen && 
                <div className="fixed inset-0 bg-black/85 backdrop-blur-[2px] flex items-center justify-center z-50">
                    
                    <div className="relative bg-white dark:bg-[#363636] dark:text-[#c9c9c9] p-2 rounded shadow-md w-[75%] max-h-[80%] overflow-hidden flex flex-col items-center sm:p-4 sm:w-[60%] lg:w-[50%]">
                        
                        {/* Botón de cerrar */}
                        <i
                            className="bi bi-x-lg absolute top-3 right-3 cursor-pointer hover:text-xl"
                            onClick={closeFavs}
                        ></i>

                        {/* Título */}
                        <h2 className="text-xl font-bold my-4 text-center sm:text-2xl lg:text-4xl">Tus Favoritos</h2>


                        {/* Lista de favoritos */}
                        {wishlist.length === 0 ? (
                            <p className="text-center my-4 lg:text-2xl">No tienes productos en favoritos.</p>
                        ) : (
                            <div className="flex flex-col gap-2 overflow-y-auto w-full max-h-[60vh] sm:p-3 mt-2">
                                {wishlist.map((item) => {
                                
                                        const selectedVariant = item.items[0]
                                    
                                        return (
                                        <div 
                                            key={item.id} 
                                            className="flex flex-row px-2 py-1 items-center gap-2 border-b dark:border-[#424242] border-gray-200 sm:gap-4 sm:py-2 sm:px-3 rounded hover:[box-shadow:2px_2px_10px_#00000048] transition-all"
                                        >
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:h-24 md:w-24 lg:w-32 lg:h-32 flex-shrink-0 flex items-center justify-center">
                                                <img 
                                                src={selectedVariant.imagen} 
                                                alt={item.nombre} 
                                                className="w-full h-full object-contain rounded" 
                                                />
                                            </div>

                                            <div className="flex flex-col flex-grow">
                                                <h3 className="text-sm font-semibold sm:text-md md:text-xl lg:text-2xl">{item.nombre}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-200 sm:text-base lg:text-lg">${item.precio}</p>
                                            </div>
                                            <i 
                                                className="bi bi-trash text-red-600 text-xl hover:scale-110 transition-transform cursor-pointer "
                                                onClick={() => removeFromWishlist(item)}
                                            ></i>
                                        </div>
                                        )
                                    }
                                )}
                                
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    )
}

export default ModalFavs
