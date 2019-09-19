import { connect } from "react-redux"; // this allows us to interact with the store
import Answer from "./Answers";
import { selectAnswer } from "../../data/actions/actions"

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = ( state ) => {
    return {
        answers: state.current.answers,
        selected: state.selected
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    handleClick: (id) => dispatch(selectAnswer(id))
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Answer);