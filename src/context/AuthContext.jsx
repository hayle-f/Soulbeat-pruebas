import { createContext, useContext, useState, useEffect } from "react";

// 1) Crear el contexto
const AuthContext = createContext();

// 2) Crear el proveedor
export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {

        // Ver si esta log en localstorage
        const storedAuth = localStorage.getItem('isAuth');
        if (storedAuth) return JSON.parse(storedAuth);

        return false
    })

    const [user, setUser] = useState(() => {

        // Ver si hay user en localstorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) return JSON.parse(storedUser);

        return null
    })
    
    const logIn = (role) => {
        setIsAuth(true)
        setUser({role}) //lo mismo que: { role: role }
        /* console.log("usuario logueado como:", role) */
    }

    const logOut = () => {
        setIsAuth(false)
        setUser(null)
    }

    useEffect(() => {
        localStorage.setItem("isAuth", JSON.stringify(isAuth));    
        
    }, [isAuth])

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));    
        
    }, [user])
    

    return (
        <AuthContext.Provider value={{ isAuth, user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

// 3) Hook custom
export const useAuthContext = () => useContext(AuthContext);