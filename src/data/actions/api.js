
import { start } from './actions';
import axios from "../../axios.js";
// in the api actions 
// every time we load a new question, we make an axios get request to the API 

export const startQuiz = () => {
    return (dispatch) => {
        axios.get('/questions').then(({ data }) => {
            console.log(data.data);
            dispatch(start(data.data));
        });

    }
}

// export const getQuestion = () => {
//     return (dispatch, getState) => {
//         const counter = getState().counter;
//         const quiz = getState().quiz;
//         axios.get(`/questions/${quiz[counter].id}`).then(({ data }) => {
//             // dispatch(save(data.data)); // save the response with question and answers to local state
//             // currentQuestion += 1; // NOT HOW YOU'D TO IT, but you'll need some way to increment the value of counter in state, so the next page can request the question id at index[counter] in the Quiz array 
//         });
//     };
// };

// export const getQuestion = () => {
//     return (dispatch, getState)  => {
//         const counter = getState().counter;
//         const quiz = getState().quiz;
//         axios.get(`/questions/${quiz[counter].id}`).then(({ data }) => {
//             dispatch(save(data.data)); // save the response with question and answers to local state
//             currentQuestion += 1; // NOT HOW YOU'D TO IT, but you'll need some way to increment the value of counter in state, so the next page can request the question id at index[counter] in the Quiz array 
//         });
//     };
// };