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

 export const selectedAnswer = (id) => {
     return {
         type: "selectedAnswer",
         id,
     }
 }

