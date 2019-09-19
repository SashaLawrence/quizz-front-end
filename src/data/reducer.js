const start = (state, { values }) => ({
    ...state,
    start: true,
    quiz: values
});

const reducer = (state, action) => {
    switch (action.type) {
        case "start": return start(state, action);
        default: return state;
    } 
 };
 
 export default reducer;