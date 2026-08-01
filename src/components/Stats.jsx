const Stats = ({ characters, words, sentences, readingTime }) => {
    return (
    <div>
        <p>Total Characters {characters}</p>
        <p>Word Count {words}</p>
        <p>Sentence Count {sentences}</p>
        <p>Approx. reading time: &lt;{readingTime}minute</p>
    </div>
    )
}

export { Stats }