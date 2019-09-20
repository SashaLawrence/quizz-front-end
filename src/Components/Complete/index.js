import { connect } from "react-redux";
import Complete from "./Complete";

let mapStateToProps = ( {score, qcounter} ) => {
    return {
        score,
        counter: qcounter,

    }
}

export default connect(mapStateToProps)(Complete)