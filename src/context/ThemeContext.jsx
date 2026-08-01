import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
    )

    const handleDarkTheme = () => {
    setDark((prev) => {
    const newTheme = !prev

    if (newTheme) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.removeItem("theme")
    }

    return newTheme
    })
    }

    return (
    <ThemeContext.Provider
        value={{ dark, handleDarkTheme }}
    >
        {children}
    </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }