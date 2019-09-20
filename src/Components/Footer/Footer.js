import React from "react";

const unselected = {
    backgroundColor: "#cbdce6"
    }

const Footer = ({ quiz, qcounter, handleClick }) => (

     <div className="d-flex justify-content-between mb-4">
        <p className="text-success">Correct</p>
        <button
            style={ unselected }
            type="button"
            className="btn btn-rounded rounded-pill"
            onClick={ handleClick }
            quiz={ quiz }
            qcounter={ qcounter }
        >Next</button>
    </div>

)

  export default Footer;