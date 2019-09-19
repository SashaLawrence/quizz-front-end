import React from 'react';
import code_background from "./code_background.svg"

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

  const imageSize = {
    width: "100%",
    height: "100%",
    marginBottom: "1em"
}
const buttonColour = {
    backgroundColor:"#e78230",
}


const Start = ( { startQuiz } ) => (

    <div style={ congrats_box  } className="rounded-lg d-flex mt-5">
        <img src={ code_background } alt="code logo" style={ imageSize } />
        <button onClick={ startQuiz  } className="btn rounded-pill" style = { buttonColour } >START</button>
    </div>
);


export default Start;