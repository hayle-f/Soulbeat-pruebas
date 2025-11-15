import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useAurisContext } from "../../context/AurisContext";
import { Bars } from "react-loader-spinner";
import ProductVariants from "./ProductVariants"


const AdminProductForm = ({ onSave, onCancel }) => {
    const navigate = useNavigate()
    const { dataAuris, isLoading } = useAurisContext()
    const { id } = useParams();
    const [form, setForm] = useState(null)

    // Inicializa el form cuando dataAuris está disponible
    useEffect(() => {
        if(!isLoading){
            const item = dataAuris.find(a => a.id === id)
            const savedForm = sessionStorage.getItem("product-" + id)
            if(savedForm) {
                setForm(JSON.parse(savedForm))
            } else if (item) {
                setForm(item) // Editar producto existente
            } else {
                setForm({ // Nuevo producto
                    id: crypto.randomUUID(),
                    nombre: "",
                    tipo: "",
                    precio: 0,
                    especificaciones: {
                        inalambrico: "",
                        resistenteAgua: "",
                        cancelacionRuido: "",
                        microfono: "",
                        duracionBateria: ""
                    },
                    items: [{ id: "", color: "", stock: 0, imagen: "" }]
                })
            }
        }
    }, [isLoading, dataAuris, id])

    if (isLoading || !form) return (
        <div className="w-full flex justify-center items-center py-20">
            <Bars 
                height="80"
                width="80"
                color="#7a1499e1"
                ariaLabel="bars-loading"
                visible={true}
            />
        </div>
    )

    // Handler único para actualizar form y guardar en sessionStorage
    const handleFormUpdate = (updatedPart) => {
        setForm(prevForm => {
            const updatedForm = { ...prevForm, ...updatedPart };
            sessionStorage.setItem("product-" + updatedForm.id, JSON.stringify(updatedForm));
            return updatedForm;
        });
    }

    // Handler para especificaciones
    const handleSpecChange = (key, value) => {
        handleFormUpdate({
            especificaciones: { ...form.especificaciones, [key]: value }
        });
        console.log("Cambio en especificación:", key);
    }

    const labels = [
        { key: "inalambrico", label: "Inalámbrico:" },
        { key: "resistenteAgua", label: "Resistente al agua:" },
        { key: "cancelacionRuido", label: "Cancelación de ruido:" },
        { key: "microfono", label: "Micrófono:" },
        { key: "duracionBateria", label: "Duración batería:" },
    ]

    return (
        <section className="items-center justify-center gap-3 p-4 my-8 mx-auto max-w-[90%] rounded-2xl dark:bg-[#363636] flex flex-col dark:text-[#c9c9c9] [box-shadow:0px_4px_10px_#0000000c,_0px_-4px_15px_#00000022]">
        
        <h2 className="text-[2rem] p-2 text-center sm:text-[2.2rem] xl:text-[2.5rem] text-[#333333] dark:text-[#e2e2e2] font-bold">
            {id ? "Editar Producto" : "Nuevo Producto"}
        </h2>

        <form className="p-4 sm:p-6 rounded-xl my-6 border w-full space-y-4 border-[#bdbdbd] dark:border-[#525252]">

            {/* Nombre */}
            <fieldset>
                <legend className="text-left text-sm text-[#424242e6] dark:text-[#c9c9c9d7] pb-1.5 px-3">Nombre</legend>
                <input 
                    type="text" 
                    value={form.nombre || ""}
                    onChange={e => handleFormUpdate({ nombre: e.target.value })}
                    className="p-2 w-full text-[#424242] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md dark:focus:shadow-md dark:focus:shadow-[#c9c9c960] transition-colors duration-200" />
            </fieldset>

            {/* Tipo */}
            <fieldset>
                <legend className="text-left text-sm text-[#424242e6] dark:text-[#c9c9c9d7] pb-1.5 px-3">Tipo</legend>
                <input 
                    type="text" 
                    value={form.tipo || ""}
                    onChange={e => handleFormUpdate({ tipo: e.target.value })} 
                    className="w-full p-2 text-[#424242] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md dark:focus:shadow-md dark:focus:shadow-[#c9c9c960] transition-colors duration-200" />
            </fieldset>

            {/* Precio */}
            <fieldset>
                <legend className="text-left text-sm text-[#424242e6] dark:text-[#c9c9c9d7] pb-1.5 px-3">Precio</legend>
                <input 
                    type="number" 
                    value={form.precio || 0}
                    onChange={e => handleFormUpdate({ precio: Number(e.target.value) })} 
                    className="w-full font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] p-2 text-[#424242ef] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md dark:focus:shadow-md dark:focus:shadow-[#c9c9c960] transition-colors duration-200" />
            </fieldset>

            {/* Especificaciones */}
            {form.especificaciones && labels.map(({ key, label }) => (
            <fieldset key={key}>
                <legend 
                    className="text-left text-sm text-[#424242e6] dark:text-[#c9c9c9d7] pb-1.5 px-3">
                        {label}
                </legend>
                <input 
                    type="text" 
                    value={form.especificaciones[key]}
                    onChange={e => handleSpecChange(key, e.target.value)}
                    className="w-full p-2 text-[#424242] dark:text-[#c9c9c9d7] bg-white dark:bg-[#2a2a2a] rounded-lg border border-[#d4d4d4] dark:border-[#525252] focus:outline-none focus:shadow-md dark:focus:shadow-md dark:focus:shadow-[#c9c9c960] transition-colors duration-200" />
            </fieldset>
            ))}

            {/* Variantes */}
            <ProductVariants 
                items={form.items}
                onChange={(newItems) => handleFormUpdate({ items: newItems })}
            />

            {/* Botones */}
            <div className="flex gap-2 justify-around mt-6">
                <button  
                    className="text-gray-600 dark:text-[#c9c9c9] text-[0.9rem] px-1.5 py-1 font-medium bg-[#fdfdfd] dark:bg-[#363636] border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:text-[0.95rem] hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer" 
                    onClick={() => navigate("/admin/products")}
                >
                    Cancelar
                </button>
                <button type="submit" 
                    className="text-gray-600 dark:text-[#c9c9c9] text-[0.9rem] px-1.5 py-1 font-medium bg-[#fdfdfd] dark:bg-[#363636] border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:text-[0.95rem] hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer"
                >
                    {id ? 'Guardar cambios' : 'Crear'}
                </button>
            </div>
        </form>

        {id && 
            <button type="submit" 
            className=" mt-3 text-red-600 dark:text-red-500 text-[0.9rem]  font-medium bg-[#fdfdfd] dark:bg-[#363636] p-2 border border-red-600 dark:border-red-500 rounded-md transition-all ease-linear duration-200 hover:text-[0.95rem] hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer"
            >
                Eliminar producto completo
            </button>
        }
        
    </section>
    )
}

export default AdminProductForm
