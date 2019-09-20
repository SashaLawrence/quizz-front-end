import { connect } from "react-redux"; // this allows us to interact with the store
import Start from "./Start";
import { startQuiz } from "../../data/actions/api";

// let mapStateToProps = (state) => {
//     return {
   
//     }
// };

let mapDispatchToProps = (dispatch) => {
    return {
        startQuiz: () => dispatch(startQuiz())
    }
};
 
export default connect(null, mapDispatchToProps)(Start);