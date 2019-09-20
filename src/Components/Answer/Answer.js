import React, { Component } from "react";



class Answer extends Component {

    render() {

        let { handleClick, value, correct, selected, id } = this.props;
        
        const answerSelected = selected === id; 

        console.log(answerSelected, id, selected )

        const style = {}
        if (selected === null) {
            style.backgroundColor = "#cbdce6"; 
        } else if ( answerSelected && correct ) {
            style.backgroundColor = "#e78230";
        } else if ( answerSelected && !correct ) {
            style.border = "2px solid red";
            style.backgroundColor = "#cbdce6";
        } else if ( !answerSelected && correct ) {
            style.backgroundColor = "#e78230";
        } else {
            style.backgroundColor = "#cbdce6"; 
        }

        

        return (
            <button 
                onClick={ handleClick } 
                style={ style }
                type="button" 
                className="btn btn-rounded rounded-pill btn-block btn-lg">{ value }
            </button>
        )
    }
}

export default Answer;