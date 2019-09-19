import React, { Component } from "react";
import Answer from'../Answer/Answer';



class Answers extends Component {

    constructor(props){
        super(props)
        this.state = {
            selected: [],
            answers: this.props.answers,
          
        }
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(index) {
    let { answers } = this.state;
    console.log(answers)
    answers.map(answer => answer. ? 
        
            
    }

    render() {
    let { answers } = this.props;
    const marginB = {
    marginBottom: "1em"    
    }
        return (
            <div className="col-xs-6" style={ marginB }>
                { answers.map((answer, index) =>
                     <Answer 
                     key={ index }
                     value={ answer.answer }
                     correct= { answer.correct }
                     handleClick ={(e) => this.handleClick(e, index) }
                     selected = { this.state.selected }
                     />
                )}
            </div>
        )
    }
}

export default Answers; 