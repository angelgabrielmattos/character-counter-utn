import { createContext, useState } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem("theme")) === "dark" ? true : false)

    const handleDarkTheme = () => {
    setDark(!dark)
    if (!dark) {
        localStorage.setItem("theme", JSON.stringify("dark"))
    } else {
        localStorage.removeItem("theme")
    }
    } 

    return (
    <ThemeContext.Provider value={{ dark, handleDarkTheme }}>
        {children}
    </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }