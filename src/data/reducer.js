const start = (state, { values }) => ({
    ...state,
    start: true,
    quiz: values
});

const next = state => ({
    ...state,
    qcounter: state.qcounter + 1,
});


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


const reducer = (state, action) => {
    switch (action.type) {
        case "start": return start(state, action);
        case "next": return next(state, action);
        case "selectedAnswer": return incrementScore(correctAnswer(selectedAnswer(state, action)));
        default: return state;
    }
};


export default reducer;