fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Error:" , error))

// fetch("https://dummyjson.com/products")
//   .then(res => res.json())
//   .then(data => console.log(data.products));

// async function getProducts(){
//     try {
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();
//         console.log(data.products)
//     } catch (error) {
//         console.error("Error fetching products:", error);
        
//     }
// }
// getProducts();