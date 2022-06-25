import React, { useEffect } from "react";
import Intro from "./components/Intro";
import Questions from "./components/Questions";
import answerOptions from "./components/answerOptions";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
    const [quiz, setQuiz] = React.useState(false);
    const [questionData, setQuestionData] = React.useState({});
    const [answerOption, setAnswerOption] = React.useState(answerOptions);
    const [toggleAnswers, setToggleAnswers] = React.useState(false);

    useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=50&category=15")  //fetching data from API
        .then(response => response.json())
        .then(data => setQuestionData(data.results))}, quiz)

    function handleClick() {
        setToggleAnswers(prevState => !prevState);  //changing ToggleAnswers once button is clicked to use in conditional rendering
    }

    const answerOptionsArray = answerOption.map(option => { //mapping a new question for each object in answerOption
        return [
            <Questions 
                key={option.id}
                data={questionData}
                toggleAnswers={toggleAnswers}
            />
        ]
    });

    function startQuiz() {
        setQuiz(prevState => !prevState); //This state toggles the quiz
    }
    function reloadQuiz() {
        setToggleAnswers(prevAnswer => !prevAnswer); //resets the quiz
        startQuiz();
    }

    return (
        <div>
            {quiz === false &&  //Using conditional rendering to determine what gets returned.
                <Intro 
                    startQuiz={startQuiz}
                />
            }
            {quiz &&
                <div>
                    <Header />
                    {answerOptionsArray}
                    <div className="buttons">
                        <button type="button"  onClick={handleClick} className="answersButton">Check Answers!</button>
                        <button type="button" className="reloadButton" onClick={reloadQuiz}>Reload Quiz!</button>
                    </div>
                    <Footer 
                        category={questionData[0].category}
                    />
                </div>}
        </div>
    )
}