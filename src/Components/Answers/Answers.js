import React from "react";
import Answer from "../Answer";

let Answers = ({ answers, handleClick, selected, timeout }) => (
    <div className="col-xs-6">
        { answers.map((answer) =>
            <Answer
                key={ answer.id }
                id={ answer.id }
                value={ answer.answer }
                correct={ answer.correct }
                handleClick={ () => handleClick(answer.id) }
                selected={ selected }
                timeout={ timeout }
            />
        ) }
    </div>
);

export default Answers; 