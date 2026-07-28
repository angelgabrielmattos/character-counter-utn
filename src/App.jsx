import { useState } from "react"
import { Header } from "./components/Header"

const App = () => {
  const [text, setText] = useState("")

  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(300)
  const [showAll, setShowAll] = useState(false)

  const characteres = excludeSpaces ? text.replace(/\s/g, "").length : text.length

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/g).length

  const sentences = text.trim() === "" ? 0 : text.split(/[.!?]/).filter(sentence => sentence.trim() !== "").length

  const readingTime = Math.ceil (words / 180)

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

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúñ]/g, "")
  const total = cleanText.length

  const dictionaryLetters = {}

  cleanText.split("").forEach(letter => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
  })

  const letters = Object.entries(dictionaryLetters).map(dataLetter => {
    const letter = dataLetter[0]
    const amountLetter = dataLetter[1]

    const infoToRenderLetter = {
      letterName: letter,
      amount: amountLetter,
      percentage: (amountLetter / total ) * 100
    }

    return infoToRenderLetter
  })

  const sortLetters = letters.sort((a,b) => b.amount - a.amount)

  const visibleLetters = showAll ? sortLetters : sortLetters.slice(0, 5)
  
  return (
    <main>
      <Header />
      <h2>Analyze your text <br /> 
        in real-time.</h2>

        <textarea 
        placeholder="Escribe tu texto..."
        onChange={handleChangeTextarea}
        value={text}
        ></textarea>
        <div>
          <label>
          <input 
            type="checkbox" 
            checked={excludeSpaces}
            onChange={() => setExcludeSpaces(!excludeSpaces)}
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
        <p>Total Characters {characteres}</p>
        <p>Word Count {words}</p>
        <p>Sentence Count {sentences}</p>
        <p>Approx. reading time: &lt;{readingTime}minute</p>
        <section>
          <h2>Letter Density</h2>
          <button onClick={() => setShowAll(!showAll)}>{showAll ? "See less ▲" : "See more ▼"}</button>
          <article>
            {visibleLetters.map(letter => (
              <div key={letter.letterName}>
                <span>{letter.letterName.toUpperCase()}</span>
                <meter min="0" max="100" value={letter.percentage}></meter>
                <span>{letter.amount} ({letter.percentage.toFixed(1)}%)</span>
              </div>
            ))}
          </article>
        </section>
    </main>
  )
}

export { App }
