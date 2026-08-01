const WriteArea = ({ handleChangeTextarea, text }) => {

const handleChange = (e) => {
        
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`

        handleChangeTextarea(e);
    }

    return (
        <div className="textarea-box">
            <textarea
            placeholder="Start typing here… (or paste your text)"
            value={text}
            onChange={handleChange}
        />
        </div>
    )
}

export { WriteArea }