//multiplication table
const num = 3;

for (let i = 1; i <= 10; i++) {
  console.log(`${num} × ${i} = ${num * i}`);
}



// Filter only users who are age > 18 
const users = [
  { name: "Ram", age: 17 },
  { name: "Sita", age: 21 },
  { name: "Hari", age: 15 },
  { name: "Gita", age: 25 }
];


const adults = users.filter(function(user){
    return user.age > 18;
});

console.log(adults)



//Movie Filter (rating > 7)
const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "Avengers", rating: 7.5 },
  { title: "Twilight", rating: 5.2 },
  { title: "Interstellar", rating: 8.6 }
];

const goodMovies = movies.filter(movie => movie.rating > 7);

console.log(" Movies with rating > 7:");
goodMovies.forEach(movie => console.log(`${movie.title} (${movie.rating})`));
