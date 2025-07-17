// console.log("i am superman");

// // var

// var num1 = 10;
// var num1 = 12;
// // console.log(num1)
// // console.log(typeof(num1))


// // let method

// let num2 = 15;
// num2 = 18;

// console.log(num2)

// const pi = 3.14;





// let Fname = true;

// console.log(typeof(Fname))


// const firstName = "virat"


// let lastName 
// console.log(lastName);
// let num3 = null;
// console.log(num3);



let person = {
    name : "virat kholi",
    age: 16
 
}

console.log(person.name)


let arry1 = ["aashish" ,"bigyan","khusi","binam"];

console.log(arry1[3])

let arrayOfObject = [
    {name : "manoj" , rollNo : 21},
    {name : "hari" , rollNo : 22},
    {name : "sarita" , rollNo : 23},
    {name : "rashmika" , rollNo : 24},
]



console.log(arrayOfObject[0].name)

// type conservertion
const a = "24"
let b = Number(a);
console.log(b + 5)

const bb = null // 0 //empty string ""
let cc = Boolean(bb)
console.log(cc)

// logical operator

let player1 = "cristiano renaldo"
let player2 = "lionel messy"

if(player1 == "cristiano renaldo" || player2 == "lionel " ){
    console.log("both are amazing")
}else{
    console.log("neymar better")
}

const bestOne = player1 === "cristiano renaldo" ? "most goal scoring player " :"have not scored more goals"

console.log(bestOne);

let num5 = 5;
let isOdd = (num5 % 2 == 0) ?"it is even number" : " it is odd Number";
console.log(isOdd)