import React, { Component } from "react";



class Answers extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected1 : false,
    //         selected2 : false,
    //         selected3 : false,
    //         selected4 : false,
        
    //     }
    //     this.handleClick1 = this.handleClick1.bind(this);
    //     this.handleClick2 = this.handleClick2.bind(this);
    //     this.handleClick3 = this.handleClick3.bind(this);
    //     this.handleClick4 = this.handleClick4.bind(this);
    // }

    // handleClick1() { this.setState( { selected1: true, }); }
    // handleClick2() { this.setState( { selected2: true, }); }
    // handleClick3() { this.setState( { selected3: true, }); }
    // handleClick4() { this.setState( { selected4: true, }); }

    render() {
    
        const clicked = {
            backgroundColor: "#e78230"
        }
        
        const unselected = {
        backgroundColor: "#cbdce6"
        }

        const marginB = {
            marginBottom: "1em"
        }
        return (
            <div className="col-xs-6" style={ marginB }>
                <button onClick={ handleClick } style={ this.state.selected1 ? clicked : unselected }type="button" className="btn btn-rounded rounded-pill btn-block btn-lg">{ answer }</button>
                
            </div>
        )
    }
}

export default Answers; 