
import { start } from './actions'
// in the api actions 
// every time we load a new question, we make an axios get request to the API 

export const startQuiz = () => {
    return (dispatch) => {
        // axios.get('/questions').then(({ data }) => {
        //     console.log(data)
        dispatch(start());
        // });

    }
}



export const getQuestion = () => {
    return (dispatch, getState)  => {
        const counter = getState().counter;
        const quiz = getState().quiz;
        
        dispatch(increment()); // save the response with question and answers to local state
           
};

