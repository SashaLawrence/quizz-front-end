

const start =  state => ({
    ...state,
    start: true,
})

const next = state => ({
    ...state,
    qcounter: state.qcounter + 1,
})

const incrementScore = state => ({
    ...state,
    score: state.score + 1,
})

const selectAnswer = ()

const reducer = (state, action) => {
    switch (action.type) {
    case "start": return start(state, action)
    case "next": return next(state, action)
    case "incrementScore": return incrementScore(state, action)
     default: return state;
     } 
 };
 
 export default reducer;