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
