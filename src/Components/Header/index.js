import { connect } from "react-redux"; // this allows us to interact with the store
import Header from "./Header";

let mapStateToProps = ( {current} ) => {
    return {
    category: current.question.category,
  
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);