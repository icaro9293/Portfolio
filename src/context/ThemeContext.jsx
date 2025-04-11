import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkMode')) || false)

    useEffect(() => {
        const root = document.documentElement

        darkMode ? root.classList.add('dark') : root.classList.remove('dark')
        //localStorage suporta apenas string.
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode])

    const toggleDarkMode = () => {
        return setDarkMode((prev) => !prev)
    }

    return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}

//função para facilitar a chamada do darkMode, ao invés de chamar e importar manualmente useContext(themeContext), apenas chama a função useTheme
export const useTheme = () => {
    return useContext(ThemeContext)
}