
export const addVariant = (items) => {
    
    const newVariant = { id: "new-" + (items.length + 1), color: "", stock: 0, imagen: "" }
    items = [...items, newVariant]
    return items
    
}


export const removeVariant = (items, id) => {
    if(items.length > 1) {
        return items.filter(variant => variant.id !== id)
        
    }

    return items
}

export const updateVariant = (items, id, newItem) => {
    return items.map(item => {
        if(item.id === id) {
            return newItem
        } 
        return item
    }
    )
    
}