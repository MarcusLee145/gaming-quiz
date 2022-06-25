import React from "react";

export default function Intro(props) {
    return (
        <div className="intro">
            <h1 className="introHeading">Quiz of Gaming!</h1>
            <p className="para">This quiz is all about gaming!</p>
            <button className="start-button" onClick={props.startQuiz}>
                Start Quiz
            </button>
        </div>
    )
}