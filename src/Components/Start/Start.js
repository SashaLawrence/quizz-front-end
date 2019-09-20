import React from 'react';

const congrats_box = {
    backgroundColor: "#cbdce6",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    textAlign: "center",
    margin: "auto"
  }


const Start = ( { startQuiz } ) => (

    <div style={ congrats_box  } className="rounded-lg d-flex mt-5">
        <button onClick={ startQuiz } className="btn btn-danger rounded-pill">Start Quiz</button>
    </div>
);


export default Start;