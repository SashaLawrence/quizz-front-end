const start = (state, { values }) => ({
    ...state,
    quiz: values,
});

const save = (state, { question, answers }) => ({
    ...state, 
    current: {
        ...state.current,
        question: question,
        answers: answers,
    },
    qcounter: state.qcounter + 1,
    selected: 0,
    correctAnswer: null,
    start: true,
    timeout: false,
});

// const next = state => ({
//     ...state,
//     qcounter: state.qcounter + 1,
// });


const selectedAnswer = (state, { id }) => ({
    ...state,
    selected: id,
});

const correctAnswer = state => ({
    ...state,
    correctAnswer: state.current.answers.find(answer =>
        answer.correct).id
});

const incrementScore = state => ({
    ...state,
    score: state.correctAnswer === state.selected ? state.score + 1 : state.score,
});

const timesUp = state => ({
    ...state,
    timeout: true,
    selected: true,
});

const reducer = (state, action) => {
    switch (action.type) {
        case "start": return start(state, action);
        // case "next": return next(state, action);
        case "save": return save(state, action);
        case "selectedAnswer": return incrementScore(correctAnswer(selectedAnswer(state, action)));
        case "timesUp": return timesUp(state);
        default: return state;
    }
};

export default reducer;