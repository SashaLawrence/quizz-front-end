import React, { Component } from "react";

class Answer extends Component {

    render() {
        let { handleClick, value, correct, selected, id, timeout } = this.props;
        const answerSelected = selected === id;
        const style = {
            maxWidth: "500px",
            margin: "20px auto",
            fontSize: "16px",
            border: "3px solid #7ca7d6",
            whiteSpace: "normal",
            wordWrap: "break-word",
        }

        if (selected === null) {
            style.backgroundColor = "#cbdce6";
        } else if (answerSelected && correct) {
            style.backgroundColor = "rgb(205, 241, 191)";
            style.border = "4px solid #44a744";
        } else if (answerSelected && !correct) {
            style.border = "4px solid #f13434";
            style.backgroundColor = "#f5c7c6";
        } else if (selected > 0 && correct) {
            style.backgroundColor = "rgb(205, 241, 191)";
            style.border = "4px solid #44a744";
        } else if (timeout && correct) {
            style.backgroundColor = "rgb(205, 241, 191)";
            style.border = "4px solid #44a744";
        } else if (timeout && !correct) {
            style.border = "4px solid #f13434";
            style.backgroundColor = "#f5c7c6";
        } else {
            style.backgroundColor = "#cbdce6";
        };

        if(selected > 0) { 
            style.pointerEvents = "none";
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