import React, { Component } from "react";
import Answer from'../Answer/Answer';



class Answers extends Component {

    constructor(props){
        super(props)
        this.state = {
            selected: null,
            answers: this.props.answers,
          
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState (
            { selected: id,}
        )
    }

    render() {
        let { answers } = this.state;
        const marginB = {
        marginBottom: "1em"    
        }


        return (
            <div className="col-xs-6" style={ marginB }>
                {/* {
                    answers.map((answer) =>
                        <Answer 
                            key={ answer.id }
                            id={ answer.id }
                            value={ answer.answer }
                            correct= { answer.correct }
                            handleClick ={() => this.props.handleClick(answer.id) }
                            selected = { this.state.selected }
                        />
                    )
                } */}
            </div>
    
        )
    }
}

export default Answers; 