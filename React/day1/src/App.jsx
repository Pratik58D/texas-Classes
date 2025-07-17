import './App.css';
import About from "./components/About";
import Location from "./components/Location"
function App() {

  const fullName = <h1> i am prtozoa </h1>
 
  const person = {
    firstName : "Mingmar",
    age: "21"
  }

  return (
  <>
  <div className='container'>
    <h1>my Protfolio</h1>
    <p> i am pratik devkota . i am 16 yrs old. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda rerum sint iusto repellat dolores consequuntur corrupti. Magnam autem eligendi praesentium natus modi voluptate doloremque asperiores cum! Voluptatibus dolor aliquam totam.</p>
  </div> 



  <div>{fullName}</div>




  <div className='container1'>
    lagjiokdhgjkahjk
  </div>

  <div>
    <About person = {person} />
  
    <Location />
  </div>
  </>
  
  )
}

export default App
