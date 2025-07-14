let arrayNumber= [1,2,3,4,5];

arrayNumber.forEach(function(num){
    console.log(num /2)
})

let tripleNumber = arrayNumber.map(function(item){
     return item*3
});
// let tripleNumber = arrayNumber.map((item)=> item *2)

console.log(tripleNumber);



///filter

let ages = [17,19,20,22,24,25];

// const aboveEighteen = ages.filter(function(age){
//     return (age >= 18)

// })

const aboveEighteen = ages.filter(age => age >=18)

console.log(aboveEighteen)

//  Example 1: Filter even numbers

// Filter out failed students from:
const students = [{ name: "Ram", mark: 80 }, { name: "Hari", mark: 35 }];

const passStudent = students.filter((student)=>student.mark > 50 );

console.log(passStudent)

// find method

const numbers = [1, 3, 4, 6, 8];

const firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // 4
