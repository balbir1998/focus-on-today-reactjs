import GoalContainer from './GoalContainer';
import ProgressBar from './ProgressBar';
import Header from './Header';
import { useEffect, useState } from 'react';

const Main = () => {
    const [allGoals, setAllGoals] = useState({
        first: {
            name: "",
            isCompleted: false
        },
        second: {
            name: "",
            isCompleted: false
        },
        third: {
            name: "",
            isCompleted: false
        }
    });

    const [allInputs, setAllInputs] = useState({
        first: "",
        second: "",
        third: ""
    });

    const [error, setError] = useState(false);
    const isAllInputsFilled = Object.values(allInputs).every(input => input);
    const completedGoalsCount = Object.values(allGoals).filter(goal => goal.isCompleted).length;

    function handleFocus(e) {
        if (error) {
            setError(false);
        }
    }

    function handleChange(e) {
        const { id, value } = e.target;
        setAllInputs(prevState => ({ ...prevState, [id]: value }));

        setAllGoals(prevState => ({
            ...prevState, [id]: {
                ...prevState[id],
                name: value
            }
        }));
    }

    function handleClick(e) {
        const { id } = e.target;
        const isAllGoalsAdded = Object.values(allGoals).every(goal => goal.name);
        if (isAllGoalsAdded) {
            setAllGoals(prevState => ({
                ...prevState, [id]: {
                    ...prevState[id],
                    isCompleted: !prevState[id].isCompleted
                }
            }));
        } else {
            setError(true);
        }
    }

    useEffect(() => {
        if (!isAllInputsFilled) {
            setAllGoals(prevState => {
                const allGoals = { ...prevState };
                Object.keys(allGoals).forEach(goal => allGoals[goal].isCompleted = false);
                return allGoals;
            });
        }
    }, [isAllInputsFilled]);

    return (
        <>
            <main>
                <Header />
                <div className="container">
                    <ProgressBar
                        error={error}
                        completedGoalsCount={completedGoalsCount}
                        allGoalsLength={Object.keys(allGoals).length}
                    />

                    {
                        Object.keys(allGoals).map((goal) => {
                            return <GoalContainer
                                key={goal}
                                id={goal}
                                handleFocus={handleFocus}
                                handleChange={handleChange}
                                inputVal={allInputs[goal]}
                                handleClick={handleClick}
                                isCompleted={allGoals[goal].isCompleted}
                            />
                        })
                    }

                    <p className="quote">“Move one step ahead, today!”</p>
                    <p className="made-with">Made with ❤️ by Balbir Singh</p>
                </div>
            </main>
        </>
    )
}

export default Main