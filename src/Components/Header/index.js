import { connect } from "react-redux"; // this allows us to interact with the store
import Header from "./Header";

let mapStateToProps = (state) => {
    return {
    category: state.category,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);