const start = (state, { values }) => ({
    ...state,
    start: true,
    quiz: values
});

const save = (state, { question, answers }) => ({
    ...state, 
    current: {
        ...state.current,
        question: question,
        answers: answers,
    },
});

const next = state => ({
    ...state,
    qcounter: state.qcounter + 1,
});

const incrementScore = state => ({
    ...state,
    score: state.score + 1,
});

// const selectAnswer = ()

const reducer = (state, action) => {
    switch (action.type) {
        case "start": return start(state, action);
        case "next": return next(state, action);
        case "incrementScore": return incrementScore(state, action);
        case "save": return save(state, action); 
        default: return state;
    } 
};

export default reducer;