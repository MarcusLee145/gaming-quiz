import React from "react";

export default function Footer(props) {

    return (
        <footer>
            <p>Quiz icon created by <a className="link" href="https://www.flaticon.com/free-icon/trivial_3400510?term=quiz&page=1&position=57&page=1&position=57&related_id=3400510&origin=tag" title="quiz icon" target="_blank">Freepik - Flaticon</a></p>
            <p className="category">Quiz Category ({props.category})</p>
            <p className="footerP">Programmed by <a className="link" href="https://www.linkedin.com/in/marcus-lee145/" title="linkedin" target="_blank">Marcus Lee</a> - 2022</p>
        </footer>
    )
}