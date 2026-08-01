import { useContext, useState } from "react"
import { Header } from "./components/Header.jsx"
import { WriteArea } from "./components/WriteArea.jsx"
import { Controls } from "./components/Controls.jsx"
import { Stats } from "./components/Stats.jsx"
import { LetterDensity } from "./components/LetterDensity.jsx"
import { ThemeContext } from "./context/ThemeContext.jsx"

const App = () => {
  const [text, setText] = useState("")

  const [excludeSpaces, setExcludeSpaces] = useState(false)
  const [limitCharacter, setLimitCharacter] = useState(false)
  const [limitValue, setLimitValue] = useState(100)
  const [showAll, setShowAll] = useState(false)

  const { dark, handleDarkTheme } = useContext(ThemeContext)

  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces)
  }

  const handleLimitValue = (value) => {
  setLimitValue(value)
}

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

  const characters = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length

  const words =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const sentences =
    text.trim() === ""
      ? 0
      : text
          .split(/[.!?]/)
          .filter((sentence) => sentence.trim() !== "").length

  const readingTime = Math.ceil(words / 180)

  const cleanText = text.toLowerCase().replace(/[^a-záéíóúü]/g, "")
  const total = cleanText.length

  const dictionaryLetters = {}

  cleanText.split("").forEach((letter) => {
    dictionaryLetters[letter] = (dictionaryLetters[letter] || 0) + 1
  })

  const letters = Object.entries(dictionaryLetters).map(([letter, amount]) => ({
    letterName: letter,
    amount,
    percentage: (amount / total) * 100,
  }))

  const sortLetters = letters.sort((a, b) => b.amount - a.amount)

  const visibleLetters = showAll
    ? sortLetters
    : sortLetters.slice(0, 5)

  return (
    <main className={dark ? "dark-theme" : ""}>
      <div className="container">
        <Header
          dark={dark}
          handleDarkTheme={handleDarkTheme}
        />

        <h1>
          Analyze your text <br />
          in real-time.
        </h1>

        <WriteArea
          handleChangeTextarea={handleChangeTextarea}
          text={text}
        />

        <Controls
  excludeSpaces={excludeSpaces}
  handleExcludeSpaces={handleExcludeSpaces}
  limitCharacter={limitCharacter}
  handleChangeInputLimit={handleChangeInputLimit}
  limitValue={limitValue}
  handleLimitValue={handleLimitValue}
  readingTime={readingTime}
/>

        <Stats
          characters={characters}
          words={words}
          sentences={sentences}
          readingTime={readingTime}
        />

        {text && (
          <LetterDensity
            sortLetters={sortLetters}
            visibleLetters={visibleLetters}
            showAll={showAll}
            setShowAll={setShowAll}
          />
        )}
      </div>
    </main>
  )
}

export { App }