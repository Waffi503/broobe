import { createContext, useState } from "react";
import { login as loginPost } from "@/services/auth";

export const AuthContext = createContext();


export function AuthContextProvider({children}) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const isLogged = Boolean(token);
    const login = async (body) => {
        const token = await loginPost(body);
        setToken(token);
        localStorage.setItem('token', token);
        return token;
    }

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    }


    const contextValue = {
        token,
        login,
        logout,
        isLogged
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
