import { ProgressBar } from "./ProgressBar";

const LetterDensity = ({
    visibleLetters,
    sortLetters,
    showAll,
    setShowAll,
}) => {
    return (
        <section className="density">
            <h3>Letter Density</h3>

            {visibleLetters.map((letter) => (
        <ProgressBar
            key={letter.letterName}
            letter={letter}
        />
        ))}

            {sortLetters.length > 5 && (
        <a
            href="#"
            onClick={(e) => {
            e.preventDefault();
            setShowAll(!showAll);
        }}
        >
            {showAll ? "See less ↑" : "See more ↓"}
        </a>
        )}
    </section>
    )
}

export { LetterDensity }