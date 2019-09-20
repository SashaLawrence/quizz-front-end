import { connect } from "react-redux"; // this allows us to interact with the store
import Question from "./Question";
import { timesUp } from "../../data/actions/actions";


// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = ({ current, qcounter, selected }) => {
    return {
        question: current.question.question, 
        counter: qcounter,
        selected: selected,
    }
};

let mapDispatchToProps = dispatch => {
    return {
        timesUp: () => dispatch(timesUp()),
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Question);