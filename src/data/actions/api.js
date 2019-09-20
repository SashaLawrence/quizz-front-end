import axios from "../../axios.js";
import { start } from './actions';
import { save } from './actions';

export const startQuiz = () => {
    return (dispatch) => {
        axios.get('/questions').then(({ data }) => {
            // console.log(data.data[0].id);
            
            dispatch(getQuestion(data.data[0].id));
            dispatch(start(data.data));
        });
    };
};

export const getQuestion = id => {
    return (dispatch, getState) => {
        const qcounter = getState().qcounter;
        const quiz = getState().quiz;
        axios.get(`/questions/${id ? id : quiz[qcounter].id}`).then(({ data }) => {
            // console.log(data.question, data.answers);
            dispatch(save(data.question, data.answers)); // save the response with question and answers to local state
            // currentQuestion += 1; // NOT HOW YOU'D TO IT, but you'll need some way to increment the value of counter in state, so the next page can request the question id at index[counter] in the Quiz array 
        });
    };
};
