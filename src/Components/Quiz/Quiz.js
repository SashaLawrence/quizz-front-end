import React from "react";

import Question from "../Question";
import Answers from "../Answers";
import Footer from "../Footer";
import Complete from "../Complete";
//import Complete from "../Complete/Complete";


let Quiz = ( {counter} ) => console.log(counter) || (

    <>
        { counter > 2 ? <Complete /> : 
        <> 
            <Question />
            <Answers />
            <Footer /> 
        </>
        } 
    </>
)

export default Quiz;