import { useState } from "react"

const useOpen = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState); 

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(prev => !prev);  

    return { isOpen, open, close, toggle };
}

export default useOpen


// Función para abrir el modal, recordada por React con useCallback 
    // para no recrearla en cada render y evitar renders innecesarios en hijos
    /* const openModal = useCallback(() => {
        setOpen(true)
        }, []) */