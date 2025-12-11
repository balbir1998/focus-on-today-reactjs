const GoalContainer = ({ isCompleted, inputVal, id, handleChange, handleClick, handleFocus }) => {
    return (
        <div className={`goal-container ${isCompleted ? "completed" : ""}`}>
            <div className="custom-checkbox" id={id} onClick={handleClick}></div>
            <input
                type="text"
                id={id}
                className="goal-input"
                placeholder="Add new goal..."
                onChange={handleChange}
                value={inputVal}
                onFocus={handleFocus}
                readOnly={isCompleted}
            />
        </div>
    )
}

export default GoalContainer