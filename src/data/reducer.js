

const start =  state => ({
    ...state,
    start: true,
})




const reducer = (state, action) => {
    switch (action.type) {
    case "start": return start(state, action)
     default: return state;
     } 
 };
 
 export default reducer;