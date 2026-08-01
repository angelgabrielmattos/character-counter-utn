import { useState } from "react"
import logo from "../assets/logoo.png";

const Header = ({ dark, handleDarkTheme }) => {
    return (
    <header>
    <div>
        <img src={logo} alt="Logo" />
        <h1>Character Counter</h1>
    </div>
    <button onClick={() => handleDarkTheme(!dark)}>☀</button>
    </header>
    )
}

export { Header } 