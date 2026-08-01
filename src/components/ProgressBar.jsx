const ProgressBar = ({ letter }) => {
    return (
        <li className="density-item">
            <span>{letter.letterName.toUpperCase()}</span>

        <div className="bar">
        <div
            className="fill"
            style={{ width: `${letter.percentage}%` }}
        />
        </div>

            <span>
                {letter.amount} ({letter.percentage.toFixed(1)}%)
            </span>
        </li>
    )
}

export { ProgressBar }