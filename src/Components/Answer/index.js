import React, { Component } from "react";

class Answer extends Component {

    render() {
        let { handleClick, value, correct, selected, id, timeout } = this.props;
        const answerSelected = selected === id;
        const style = {}

        if (selected === null) {
            style.backgroundColor = "#cbdce6";
        } else if (answerSelected && correct) {
            style.backgroundColor = "#e78230";
            style.border = "4px solid green";
        } else if (answerSelected && !correct) {
            style.border = "4px solid red";
            style.backgroundColor = "#cbdce6";
        } else if (selected > 0 && correct) {
            style.backgroundColor = "#e78230";
            style.border = "4px solid green";
        } else if (timeout && correct && !selected) {
            style.backgroundColor = "#e78230";
            style.border = "4px solid green";
        } else if (timeout && !correct && !selected) {
            style.border = "4px solid red";
            style.backgroundColor = "#cbdce6";
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