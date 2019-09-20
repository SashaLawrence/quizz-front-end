import React from "react";

const unselected = {
    backgroundColor: "#cbdce6"
    }

const Footer = ({ quiz, qcounter, handleClick, selected, correctAnswer }) => {


    const checker = selected === correctAnswer;
    
    

    return (
     <div className="d-flex justify-content-between mb-4 mt-5">
       { selected === 0 ? null : <p className={ checker ? "text-success" : "text-danger" }>{ checker ? "Genius! Well done!" : "Oops! Incorrect" }</p>}
        { selected === 0 ? null :
            <button
                style={ unselected }
                type="button"
                className="btn btn-rounded rounded-pill"
                onClick={ handleClick }
                quiz={ quiz }
                qcounter={ qcounter }
                // test comment 
            >Next</button>
        }
    </div>
    )
};

export default Footer;