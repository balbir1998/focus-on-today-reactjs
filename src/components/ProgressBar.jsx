import Sun_svg from "../assets/Sun.svg";
import Group3_svg from "../assets/Group 3.svg";

const ProgressBar = ({ completedGoalsCount, allGoalsLength, error }) => {
    const allQuotes = [
        'Raise the bar by completing your goals!',
        'Well begun is half done!',
        'Just a step away, keep going!',
        'Whoa! You just completed all the goals, time for chill :D'
    ];
    return (
        <>
            <h2>
                Today
                <span>
                    <img src={Sun_svg} className="sun-icon" alt="image" />
                    <img src={Group3_svg} className="face" alt="" />
                </span>
            </h2>

            <p className="progress-label">{allQuotes[completedGoalsCount]}</p>
            <div className="progress-bar">
                <div
                    className="progress-value"
                    style={{ width: `${(completedGoalsCount / allGoalsLength) * 100}%` }}
                >
                    <span>{completedGoalsCount}/{allGoalsLength} Completed</span>
                </div>
                <p className={`error-label ${error ? "show-error" : ""}`}>
                    Please set all the {allGoalsLength} goals!
                </p>
            </div>
        </>
    )
}

export default ProgressBar;