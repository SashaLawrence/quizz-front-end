import React from "react";
import Answer from'../Answer/Answer';



let Answers = ( { answers, handleClick, selected, correctAnswer  } ) =>(


    <div className="col-xs-6">
        { answers.map((answer) =>
                <Answer 
                key={ answer.id }
                id={ answer.id }
                value={ answer.answer }
                correct= { answer.correct }
                handleClick ={() => handleClick(answer.id) }
                selected = { selected }
                
                />
        )}
    </div>
    
)

export default Answers; 