import { ProgressBar } from "./ProgressBar"

const LetterDensity = ({ sortLetters }) => {
    return (
    <section>
        <h2>Letter Density</h2>
        <article>
        <ul>
            {
            sortLetters.slice(0, 5).map(letter => <ProgressBar key={letter.letterName} letter={letter} />)
            }
        </ul>
        </article>

        <details>
        <summary>See more</summary>
        <ul className="meter-list">
            {
            sortLetters.slice(5, sortLetters.length).map(letter => <ProgressBar key={letter.letterName} letter={letter} />)
            }
        </ul>
        </details>
    </section>
    )
}

export { LetterDensity }