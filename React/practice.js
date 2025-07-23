// // example using fetch
// fetch(`https://emoji-api.com/emojis?search=smile&access_key=00cecd7de68eeafb16a6c8c6833f7f281ba270dc
// `)
//   .then(res => res.json())
//   .then(data => console.log(data))

// const url = 'https://movies-ratings2.p.rapidapi.com/ratings?id=tt0111161';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'fa3ceaea66msh6a158a9a609ecdep1fc577jsn566cef952e3d',
// 		'x-rapidapi-host': 'movies-ratings2.p.rapidapi.com'
// 	}
// };

// const getdata = async() =>{

//   try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// }

// getdata();

// cricbuzz
// const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
// 	}
// };
// const getdata = async() =>{
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// }

// shoeapi

// const shoedata = async () => {
//  const url = 'https://shoes-collections.p.rapidapi.com/shoes';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'fa3ceaea66msh6a158a9a609ecdep1fc577jsn566cef952e3d',
// 		'x-rapidapi-host': 'shoes-collections.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	const getNames = result.map((shoe)=> shoe.name)
//   console.log(getNames)
// } catch (error) {
// 	console.error(error);
// }
// };

// shoedata()


// get pizza

// const getPizza = async () => {
//   const url = "https://pizza-and-desserts.p.rapidapi.com/pizzas/1";
//   const options = {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "fa3ceaea66msh6a158a9a609ecdep1fc577jsn566cef952e3d",
//       "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// getPizza();


// const getnews = async() =>{
//   const url = 'https://google-news13.p.rapidapi.com/business?lr=en-US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'fa3ceaea66msh6a158a9a609ecdep1fc577jsn566cef952e3d',
// 		'x-rapidapi-host': 'google-news13.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// getnews();