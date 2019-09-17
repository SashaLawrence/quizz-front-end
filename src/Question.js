import React from "react";

const font_color = {
    color: '#e5ebeb',
    }

const line_design = {
    borderTop: "1px solid #e5ebeb",
    marginTop: "0px",
    marginBottom: "2em"

}

const Question = () => (

    <div style={ font_color } className="mt-5 mb-4">
        <div className="d-flex justify-content-between">
            <h5>1/20</h5>
            <h5>03:00</h5>
        
        </div>
        <hr style={ line_design }></hr>

        <p>What does CSS stand for?</p>
    </div>

  )

  export default Question;