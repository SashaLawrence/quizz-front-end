import React from "react";
import trophy from "./trophy.svg"


const imageSize = {
    width: "50%",
    height: "30%",
    marginBottom: "1em",
    marginTop: "3em"
}

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

const score_color = {
    color: "#30bd6e",
    fontWeight: "bold"
}


let Complete = ( {score, counter} ) => (
    <>
        <div style={ congrats_box  } className="rounded-lg d-flex">
            <img src={ trophy } alt="Trophy" style={ imageSize } />
            <h4>Congratulations!</h4>
            <h1 style={ score_color }>{ score }/{ counter }</h1>
            <h5>Quiz completed successfully</h5>
            <br></br>
            <p>You attempted <b>{ counter } questions</b> and answered <span style={ score_color }>{ score } correctly!</span></p>

        </div>
      
    </>
)

export default Complete;