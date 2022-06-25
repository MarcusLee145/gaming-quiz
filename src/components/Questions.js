import React from "react";
import Options from "./Options";

export default function Questions(props) {

    const randomNumber = Math.ceil(Math.random() * 50); //From 50 options
    const [answers, setAnswers] = React.useState({
        question: props.data[randomNumber].question.replace(/&quot;|&eacute;|&#039;|&uacute;/g, ""),    //Using Replace to remove ASCII codes that appear on the page
        correctAnswer: props.data[randomNumber].correct_answer.replace(/&#039;|&quot;|&amp;|&Aacute;|&reg;/g, ""),
        incorrectAnswers: props.data[randomNumber].incorrect_answers,
    });
    const [value, setValue] = React.useState(" ");

    let msg = "";

    const list = [answers.correctAnswer];   //Creating an array "list" to combine all possible options
    const [o1, o2, o3] = answers.incorrectAnswers;
    list.push(o1, o2, o3);

    function shuffle(array) {   //shuffles the list array to randomise correct answers position in the dropdown
        let i = array.length;
        const randomIndex = Math.floor(Math.random() * i);
        while(i != 0) {
            i--;

            [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
        }
        return array;
    }

    function handleClick(event) {   //retrieveing the selected value
        setValue(event.target.value);
    }

    function markUp() {     
        if(value === answers.correctAnswer) {
            msg = <h2 className="option"><span className="result">Correct!</span> Selected Answer: <span className="marks">{value}</span> Correct Answer: <span className="marks">{answers.correctAnswer}</span></h2>
            return msg;          
        }
        else if (value === "empty") {
            msg =<h2 className="option"><span className="result">Please Choose a value!</span> Selected Answer: <span className="marks">{value}</span> Correct Answer: <span className="marks">{answers.correctAnswer}</span></h2>
            return msg;
        }
        else {
            msg = <h2 className="option"><span className="result">Incorrect!</span> Selected Answer: <span className="marks">{value}</span> Correct Answer: <span className="marks">{answers.correctAnswer}</span></h2>
            return msg;
        }
    }
    markUp();

    return (
            <form>
                <div className="section">  
                    <h2 className="question">{answers.question}</h2> 
                    <Options 
                        list={list}
                        handleClick={handleClick}
                        shuffle={shuffle}
                    />
                    {props.toggleAnswers &&
                     msg}
                </div>
            </form>
    )
}