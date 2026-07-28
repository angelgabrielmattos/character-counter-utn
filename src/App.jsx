import { useState } from "react"
import { Header } from "./components/Header"

function App() {
  const [text, setText] = useState("Esto es un texto de prueba, puedes borrarlo, modificarlo o comprobar que la app esta funcionando correctamente.")
  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(50)

  const characteres = excludeSpaces ? text.replace(/\s/g, "").length : text.length

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/g).length

  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

  const handleChangeTextarea = (e) => {
    const value = e.target.value

    if (limitCharacter) {
      if (value.length <= limitValue) {
        setText(value)
      }
    } else {
      setText(value)
    }
  }

  const handleChangeInputLimit = () => {
    setLimitCharacter(!limitCharacter)
    const newText = text.slice(0, limitValue)
    setText(newText)
  }

  return (
    <main>
      <Header />
      <h2>Analyze your text <br /> 
        in real-time</h2>
        {/* <p>{text}</p> */}
        <textarea 
        placeholder="Escribe tu texto..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        ></textarea>
        <div>
          <label>
          <input 
            type="checkbox" 
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces
            (!excludeSpaces)}
          />
          Exclude Spaces
          </label>
          <label>
          <input 
            type="checkbox" 
            checked={limitCharacter}
            onChange={handleChangeInputLimit}
          />
          Set Character Limit
          </label>
          {
            limitCharacter && 
            <input type="number" 
            value={limitValue} 
            onChange={(e) => setLimitValue(e.target.value)}
            />
          }
        </div>
        <p>Total Characters: {characteres}</p>
        <p>Word Count: {words}</p>
        <p>Sentence Count: {sentences}</p>
    </main>
  )
}

export { App }
