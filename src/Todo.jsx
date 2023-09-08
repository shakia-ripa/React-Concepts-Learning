// export default function Todo({task}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// // Conditional rendering option 1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return(
//             <li>Finished: {task}</li>
//         )
//     }
//     else{
//         return(
//             <li>Work on: {task}</li>
//         )
//     }
// }

// // Conditional rendering option 2
// export default function Todo({ task, isDone }) {
//     if(isDone) {
//         return (
//             <li>Finished: {task}</li>
//         )
//     }
//     return (
//         <li>Work on: {task}</li>
//     )
// }

// // Conditional rendering option 3
// export default function Todo({ task, isDone }) {
//     let listItem;
//     if (isDone) {
//         listItem = <li>Finished: {task}</li>
//     }
//     else{
//         listItem = <li>Work on: {task}</li>
//     }
//     return listItem;
// }

// // Conditional rendering option 4: Ternary operator
// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone ? 'Finished' : 'Work on'}: {task}</li>
//     )
// }

// // Conditional rendering option 5: &&
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ':Done'}</li>
//     )
// }

// // Conditional rendering option 6: ||
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ':Not Done'}</li>
//     )
// }

