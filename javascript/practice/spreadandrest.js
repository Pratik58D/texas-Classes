// // expand an array or object into individual element
// const arr1 = [1,2,3];
// console.log(...arr1)

// //copy and combine
// const arr2 = [1,2,3,4,5];
// const newArray2 = [...arr2,5,6,7];
// console.log(newArray2)

// //copy
// const orgArray = [10,20];
// const copy = [...orgArray]
// console.log(copy); 

// //combine arryas and objects
// const a = [1,2];
// const b = [3,4];
// const c = [...a , ...b]

// console.log(c)


// //rest 
// const [first, ...rest] = [1, 2, 3, 4];

// console.log(first); // 1
// console.log(rest);  // [2, 3, 4]


const arr = [1,2,3,4,5]
const [...reest] = arr;
console.log(reest)

// summing three number using reduce


const multiply=(...numbers)=>{
    return numbers.reduce((sum,num)=>sum * num ,1)
}
console.log(multiply(4,5,6))