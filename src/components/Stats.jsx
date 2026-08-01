import pattern from "../assets/falling-triangles.svg";

const Stats = ({ characters, words, sentences }) => {
    return (
        <section className="cards">
            <article className="card purple">
                <img src={pattern} alt="" />
                <h2>{characters}</h2>
                <p>Total Characters</p>
            </article>

            <article className="card orange">
                <img src={pattern} alt="" />
                <h2>{words}</h2>
                <p>Word Count</p>
            </article>

            <article className="card coral">
                <img src={pattern} alt="" />
                <h2>{sentences}</h2>
                <p>Sentence Count</p>
            </article>
        </section>
    )
}

export { Stats }