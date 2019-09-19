import React, { Component } from "react";



class Answer extends Component {



    render() {
        const clicked = {
            backgroundColor: "#e78230"
        }
       
        const unselected = {
            backgroundColor: "#cbdce6"
        }
        let { handleClick, value, correct, selected } = this.props;
        

        return (
            <button 
                onClick={ handleClick } 
                style={ (selected && correct) ? clicked  : unselected }
                type="button" 
                className="btn btn-rounded rounded-pill btn-block btn-lg">{ value }
            </button>
        )
    }
}

export default Answer;