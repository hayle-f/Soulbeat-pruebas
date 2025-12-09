import { useState } from "react";
import { getColorCode } from "../../utils/utils";
import { useNavigate } from "react-router-dom";


const AdminProductItem = ({ auricular }) => {
  /* console.log(auricular) */

  const navigate = useNavigate()

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
  ];

  
  return (
    <>
      {/* CARD */}
      <div className="border border-[#33333352] dark:bg-[#363636] rounded-2xl w-[250px] min-h-[350px] p-4 flex flex-col gap-2 justify-around items-center flex-grow [box-shadow:0px_4px_10px_#0000000c,_0px_-4px_15px_#00000022] dark:text-[#c9c9c9] sm:w-[265px] md:max-w-[320px] lg:w-[320px]">

      
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
              
              {/* Ícono de editar */}
                  <i 
                    className="bi bi-pencil text-gray-600 hover:scale-115 mx-1 text-xl cursor-pointer transition-transform dark:text-gray-300"
                    title="Editar producto"
                    onClick={() => navigate(`/admin/products/editar/${auricular.id}`)}
                  ></i>              
            </div>
            
        </div>
      </div>
    </>
  )
}

export default AdminProductItem