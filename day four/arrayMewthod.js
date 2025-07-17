// filter method

const ages = [12,18,20,24,45,18]
const adults = ages.filter(age => age >= 17);
console.log(adults)













const users = [
  {name : "ram", age: 22},
    {name : "sita", age: 18},
    {name : "hari", age: 18},
]
const result = users.find(function(user){
    return user.age === 18
});

console.log(result);