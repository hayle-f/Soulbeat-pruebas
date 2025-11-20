import { Bars } from "react-loader-spinner";
import { useAurisContext } from "../../context/AurisContext";
import AdminProductItem from "./AdminProductItem";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../components/ScrollToTop";


const AdminProducts = () => {

    //contexto auris
    const { dataAuris, isLoading } = useAurisContext();

    const navigate = useNavigate()


    return (
    <>
            <div className="products px-3 mx-auto xl:max-w-[2000px] text-center ">

                {/* Botones para añadir prod */}
                <div className="flex justify-center gap-3">
                    <button 
                        onClick={() => navigate("/admin/products/crear")}
                        className="mt-[60px] mb-10 text-gray-600 dark:text-[#c9c9c9] text-[0.9rem] tracking-wide font-medium bg-[#fdfdfd] dark:bg-[#363636] p-2 border border-gray-600 dark:border-[#c9c9c9] rounded-md transition-all ease-linear duration-200 hover:text-[0.95rem] hover:[box-shadow:2px_2px_10px_#00000048] hover:cursor-pointer"
                    >
                        Añadir nuevo producto
                    </button>
                </div>
                
                {/*  Galería de productos */}
                <div id="galeria" className="flex flex-wrap justify-center gap-[20px] mx-2 mb-[60px]  min-h-[200px]">
                    {isLoading ? (
                        // Mostrar spinner mientras carga
                        <div className="w-full flex justify-center items-center py-20">
                            <Bars 
                                height="80"
                                width="80"
                                color="#7a1499e1"
                                ariaLabel="bars-loading"
                                visible={true}
                            />
                        </div>
                    ) : (       
                        // Mapear auriculares y mostrar card        
                        dataAuris.map((auricular) => (
                        <AdminProductItem
                            key={auricular.id}
                            auricular={auricular}
                        />
                    ))
                    )}
                </div>
            </div>

            <ScrollToTop />    

        </>
    )
}

export default AdminProducts

