

const start =  state => ({
    ...state,
    start: true,
})

const increment = state => ({
    ...state,
    qcounter: state.qcounter + 1,
})



const reducer = (state, action) => {
    switch (action.type) {
    case "start": return start(state, action)
    case "next": return increment(save(state, action))
     default: return state;
     } 
 };
 
 export default reducer;