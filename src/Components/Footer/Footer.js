import React from "react";

const unselected = {
    backgroundColor: "#cbdce6"
    }

const Footer = ({ quiz, qcounter, handleClick, selected }) => (

     <div className="d-flex justify-content-between mb-4">
        <p className="text-success">Correct</p>
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

  export default Footer;