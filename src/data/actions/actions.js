// export const save = ( {id} ) => {
//     return {
//       quiz: id,
//     };
//  };

 export const start = values => {
    return {
        type: "start",
        values,
    }
 };

 export const incrementScore = () => {
     return {
         type: "incrementScore"
     }
 }

 export const selectAnswer = (id) => {
     return {
         type: "selectAnswer",
         selected: id
     }
 }