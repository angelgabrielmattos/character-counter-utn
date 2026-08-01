import { useState } from "react"
import logo from "../assets/logoo.png";

const Header = ({ dark, handleDarkTheme }) => {
    return (
        <header className="topbar">
            <div className="logo">
            <img src={logo} alt="Logo" />
            <span>Character Counter</span>
            </div>

        <button
        className="theme-btn"
        onClick={() => handleDarkTheme(!dark)}
        >
        {dark ? "☀" : "☾"}
        </button>
        </header>
    )
}

export { Header }