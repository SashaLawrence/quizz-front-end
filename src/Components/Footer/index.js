import { connect } from "react-redux"; // this allows us to interact with the store
import Footer from "./Footer";
import { getQuestion } from "../../data/actions/api";

// mapStateToProps: maps the current state (from the store)
// to the props that get passed into the wrapped component
// needs to return an object literal which gets merged in
// to any other props being passed in
let mapStateToProps = ({ selected, correctAnswer }) => {
    return {
        selected,
        correctAnswer,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(getQuestion()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);