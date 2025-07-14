// if case
let age = 18;

if(age >= 18){
    console.log("you are eligible to vote")
}else{
    console.log("you are a minorrr")
}

// switch

let day = "sun";
switch(day){
    case "monday":
        console.log("its monday");
        break;
    case "tuesday":
        console.log("its tuesday");
        break;
    case "wed":
        console.log("its wed");
        break;
    case "thurs":
        console.log("its thursday");
        break;
    case "fri":
        console.log("its friday");
        break;
        default:
            console.log("its sat or sun")
            break;
}


//for loop

for (let i = 0 ; i<5 ; i++){
    console.log(i)
}

//multiplication table

let number = 8;

for (let i = 1 ; i<= 10 ; i++){
    console.log("8 * ",i," = ", number * i)
}