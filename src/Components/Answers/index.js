import { connect } from "react-redux"; // this allows us to interact with the store
import Answers from "./Answers";
import { selectedAnswer } from "../../data/actions/actions"

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = (state) => {
    return {
        answers: state.current.answers,
        selected: state.selected,
        correctAnswer: state.correctAnswer,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => dispatch(selectedAnswer(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);