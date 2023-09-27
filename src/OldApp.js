import React from "react"
import Hello from "./Components/Hello";
import AboutIphone from "./Components/AboutIphone";


const App = () =>{
  return(
    <div>
      <Hello >
        <AboutIphone/>
        <h2>$1200</h2>
        </Hello>
        <Hello 
               name = "Macbook Pro"
            > 
               
               <h1>Hello</h1>
               <p>Hii</p>
               <AboutIphone />
               <p> $1200 </p>


            </Hello>

      <Hello /> 
    <Hello />


    </div>



  )



}

export default App;
