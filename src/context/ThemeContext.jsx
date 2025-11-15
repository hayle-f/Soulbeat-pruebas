import { createContext, useContext, useState, useEffect } from "react";

// 1) Crear el contexto
const ThemeContext = createContext();

// 2) Crear el proveedor
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Ver si hay un tema guardado en localStorage
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) return storedTheme;

        /* Si no hay, usar la preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light'; */
        
        return 'light'; // valor por defecto
    });

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    // Actualizar DOM y guardar en localStorage cuando cambie el tema
    useEffect(() => {
        const html = document.documentElement;

        if (theme === "dark") {
            html.classList.add("dark");     // agrega la clase
        } else {
            html.classList.remove("dark");  // la quita
        }

        localStorage.setItem("theme", theme);
        }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// 3) Hook custom
export const useThemeContext = () => useContext(ThemeContext);
