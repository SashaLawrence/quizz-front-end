import React from "react";
import trophy from "./trophy.svg"


const imageSize = {
    width: "40%",
    height: "20%",
    marginBottom: "1em"
}

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

const score_color = {
    color: "#30bd6e",
    fontWeight: "bold"
}


let Complete = () => (
    <>
        <div style={ congrats_box  } className="rounded-lg d-flex mt-5">
            <img src={ trophy } alt="Trophy" style={ imageSize } />
            <h4>Congratulations!</h4>
            <h1 style={ score_color }>90% Score</h1>
            <h5>Quiz completed successfully</h5>
            <br></br>

            <p>You attempted <b>20 questions</b> and answered <span style={ score_color }>18 correctly!</span></p>

        </div>
      
    </>
)

export default Complete;