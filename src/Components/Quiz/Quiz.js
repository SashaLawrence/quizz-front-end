import React from "react";

import Question from "../Question";
import Answers from "../Answers";
import Footer from "../Footer";
//import Complete from "../Complete/Complete";


let Quiz = () => (


    // GET quiz 
    // recieve an array of question ids
    // save to store.js
    
    <>
        <Question />
        <Answers />
        <Footer /> 
       {/* <Complete />  */}
    </>
)

export default Quiz;