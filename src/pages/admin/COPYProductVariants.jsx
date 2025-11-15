import { addVariant, removeVariant, updateVariant } from '../../utils/adminProductHelpers'

const ProductVariants = ({ items, onChange}) => {

    const handleVariantChange = (id, key, value) => {
        const currentItem = items.find(item => item.id === id)
        const updatedItem = { ...currentItem, [key]: value }
        const updatedItems = updateVariant(items, id, updatedItem)
        console.log("Cambio en variante:", key, "ID:", id)
        onChange(updatedItems)
    }

    return (
        <fieldset className="flex flex-col items-center gap-2 py-3 sm:px-5 border border-[#d4d4d4] dark:border-[#525252] rounded-lg bg-[#fdfdfd] dark:bg-[#2a2a2a]">
            <legend className="ml-3 px-2 sm:px-4 pb-3 text-[#141414] dark:text-[#c9c9c9]">Variantes</legend>

            {items.map((variant, index) => (
                <div
                    key={index}
                    className="flex flex-col px-2 py-1 items-center w-[90%] sm:flex-row gap-3 border-b border-[#d4d4d4] pb-4 md:max-w-[85%]"
                >
                    {/* Imagen + cámara */}
                    <div className="relative w-20 h-20 flex-shrink-0">
                    {variant.imagen ? (
                        <img
                        src={variant.imagen}
                        alt="Variante"
                        className="w-20 h-20 object-cover rounded-lg border border-[#d4d4d4] dark:border-[#525252]"
                        />
                    ) : (
                        <div className="w-20 h-20 flex items-center justify-center rounded-lg border border-[#d4d4d4] dark:border-[#525252] bg-white dark:bg-[#2a2a2a] text-sm text-gray-500">
                        Sin imagen
                        </div>
                    )}
                    <label
                        htmlFor={`file-input-${index}`}
                        className="absolute bottom-1 right-1 w-5 h-5 flex items-center justify-center bg-[#c9c9c99a] dark:bg-[#2a2a2a] rounded-full border border-[#c9c9c9d7] dark:border-[#525252] cursor-pointer hover:scale-105 transition-transform"
                        title="Cambiar imagen"
                    >
                        <i className="bi bi-camera text-gray-700 dark:text-[#c9c9c9d7] text-[0.8rem]" />
                    </label>
                    <input
                        id={`file-input-${index}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                        const file = e.target.files[0]
                        if (!file) return;
                        // Crear URL temporal para mostrar la imagen
                        handleVariantChange(variant.id, "imagen", URL.createObjectURL(file));
                        }}
                    />
                    </div>

                    {/* Color y Stock */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full items-center sm:justify-around">
                        <div className="flex flex-col">
                            <label className="text-sm text-[#424242] dark:text-[#c9c9c9d7]">
                                Color:
                            </label>
                            <input
                                type="text"
                                value={variant.color}
                                onChange={(e) => handleVariantChange(variant.id, "color", e.target.value)}
                                className="p-1 pl-3 text-sm sm:w-full text-[#424242] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md transition-all"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm text-[#424242] dark:text-[#c9c9c9d7]">
                                Stock:
                            </label>
                            <input
                                type="number"
                                min={0}
                                value={variant.stock}
                                onChange={(e) => handleVariantChange(variant.id, "stock", Number(e.target.value))}
                                className="p-1 pl-3 text-sm sm:w-full text-[#424242] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md transition-all"
                            />
                        </div>
                    </div>

                    {/* Trash */}
                    <i
                        className="bi bi-trash text-red-600 text-xl cursor-pointer hover:scale-110 transition-transform"
                        onClick={() => onChange(removeVariant(items, variant.id))}
                    ></i>
                </div>
                ))}


            <button 
                type='button'
                className="text-gray-600 dark:text-[#c9c9c9] text-[0.9rem] mb-2 mt-4 px-1.5 py-1 font-medium bg-[#fdfdfd] dark:bg-[#363636] border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:text-[0.95rem] hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer"
                onClick={() => onChange(addVariant(items))}
            >
                Agregar variante
            </button>

        </fieldset>
        
    )
}

export default ProductVariants