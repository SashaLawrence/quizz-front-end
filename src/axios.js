// import the library version of axios
import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://ec2-3-10-54-163.eu-west-2.compute.amazonaws.com/api",
    // use your own key
    params: { "key": "bCYb3k8XuKIMOlhNrcPQ880FMg4S3XDvGEdcgcJV" },
    // make sure we get JSON back
    headers: {"Accept": "application/json"},
});