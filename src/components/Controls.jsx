const Controls = ({
    excludeSpaces,
    handleExcludeSpaces,
    limitCharacter,
    handleChangeInputLimit,
    limitValue,
    handleLimitValue,
    readingTime
}) => {
    return (
        <div className="options">

        <div className="control-left">

        <label>
            <input
                type="checkbox"
                checked={excludeSpaces}
                onChange={handleExcludeSpaces}
            />
            <span>Exclude Spaces</span>
        </label>

        <label>
            <input
                type="checkbox"
                checked={limitCharacter}
                onChange={handleChangeInputLimit}
            />
            <span>Set Character Limit</span>
        </label>

        {limitCharacter && (
            <input
                className="limit-input"
                type="number"
                value={limitValue}
                onChange={(e) => handleLimitValue(Number(e.target.value))}
            />
        )}

        </div>

            <span className="reading-time">
        Approx. reading time: &lt;{readingTime} minute
            </span>

        </div>
    )
}

export { Controls }