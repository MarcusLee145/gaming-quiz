import React, { useEffect } from "react";

export default function Options(props) {  

    useEffect(() => {   //Using useEffect to trigger the shuffle function on first render.
    props.shuffle(props.list);
    }, []);

    let optionsArray = [];
    optionsArray = props.list.map(option => <option>{option}</option>); //mapping each element in list array to an option element for the select dropdown.

    return (
        <div className="answers">
            <select name="question" className="answerOption" onClick={props.handleClick}>
                <option value="empty" name="question">--Choose--</option>
                {optionsArray}
            </select>
        </div>
    )
}