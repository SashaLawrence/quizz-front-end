import React from "react";
import Countdown from 'react-countdown-now';


const font_color = {
    color: '#e5ebeb',
};

const line_design = {
    borderTop: "1px solid #e5ebeb",
    marginTop: "0px",
    marginBottom: "2em"
};

const renderer = ({ seconds, milliseconds, completed }) => {
    
    if (completed) {
        // Render a completed state
        return <span>Done!</span>;
    } else {
        // Render a countdown
        return <span>{ seconds }:{ milliseconds }</span>;
    }
};

const Question = ({ question, counter, timesUp, selected }) => (

    // map over the quiz array
    // Send GET request for first item (eg. question id 1)

    <div style={ font_color } className="mt-5 mb-4">
        <div className="d-flex justify-content-between">
            <h5>{ counter }/20</h5>
            <h5>
                {
                    selected ? null :
                        <Countdown
                            date={ Date.now() + 10000 }
                            renderer={ renderer }
                            onComplete={ timesUp }
                        />
                }
                
            </h5>

        </div>
        <hr style={ line_design }></hr>
        <p>{ question }</p>
    </div>
)

export default Question;