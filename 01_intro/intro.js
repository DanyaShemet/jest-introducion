// function expect(value){
//     return {
//         toBe: exp => {
//             if (value === exp){
//                 console.log('Success')
//             }else{
//                 console.error(`Value is ${value}, but expectation ${exp}`)
//             }
//         }
//     }
// }

const sum = (a, b) => a + b
const nativeNull = () => null

//console.log(sum(41,2))

module.exports = {sum , nativeNull}
//expect(sum(41,2)).toBe(43)

