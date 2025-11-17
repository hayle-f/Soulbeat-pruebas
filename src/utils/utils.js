
export const formatPrice = (value) => {
    // Si el valor es null, undefined o NaN (excepto 0), devuelve "$0,00"
    if (!value && value !== 0) return "$0,00"
    return Number(value).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })
}

// colorMap.js
export const colorMap = {
    blanco: "#FFFFFF",
    negro: "#000000",
    azul: "#1E90FF",
    beige: "#EFE7DA",
    verde: "#32CD32",
    violeta: "#8A2BE2",
    plateado: "#C0C0C0",
    rosa: "#FF69B4",
    rojo: "#FF0000",
    gris: "#808080",
    mint: "#98FF98",
    grafito: "#383838",
    lila: "#C8A2C8"
}

export const getColorCode = (color) => {
    if(!color) return "#ccc"
    const colorLower = color.toLowerCase()
    return colorMap[colorLower] || "#ccc"
}