import React from "react";

const selected = {
    backgroundColor: "#e78230"
}

const unselected = {
backgroundColor: "#cbdce6"
}

const marginB = {
    marginBottom: "1em"
}

let Answers = ( ) => (
    <div className="col-xs-6" style={ marginB }>
       <button style={ unselected }type="button" className="btn btn-rounded rounded-pill btn-block btn-lg">A</button>
       <button style={ selected } type="button" className="btn btn-rounded rounded-pill btn-block btn-lg">B</button>
       <button style={ unselected } type="button" className="btn btn-rounded rounded-pill btn-block btn-lg">C</button>
       <button style={ unselected } type="button" className="btn btn-rounded rounded-pill btn-block btn-lg">D</button>
    </div>
);

export default Answers; 