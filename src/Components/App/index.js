import { connect } from "react-redux"; // this allows us to interact with the store
import App from "./App";


let mapStateToProps = ( {start} ) => ( {start} )
// destructuring state object start property and saving it to a variable of the same name (start)

export default connect(mapStateToProps)(App);