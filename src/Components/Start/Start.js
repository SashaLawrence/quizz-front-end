import React from 'react';
import code_background from "./code_background.svg"

const congrats_box = {
    backgroundColor: "#cbdce6",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
    textAlign: "center",
    margin: "auto"
  }

  const imageSize = {
    width: "100%",
    height: "100%",
    
}
const buttonColour = {
    backgroundColor:"#e78230",
    marginBottom: "10em",
}


const Start = ( { startQuiz } ) => (

    <div style={ congrats_box  } className="rounded-lg d-flex">
        <img src={ code_background } alt="code " style={ imageSize } />
        <button onClick={ startQuiz  } className="btn rounded-pill" style = { buttonColour } >Start Quiz</button>
    </div>
);


export default Start;