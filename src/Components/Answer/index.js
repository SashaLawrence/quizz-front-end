import { connect } from "react-redux";
import Answer from './Answer';
import { incrementScore } from "../../data/actions/actions";

let mapStateToProps = ( state ) => {
    return {

    }
};

let mapDispatchToProps = ( dispatch ) => {
    return {
    incrementScore: () => dispatch(incrementScore())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer)