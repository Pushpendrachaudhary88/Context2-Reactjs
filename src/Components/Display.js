import React,{useContext} from "react"
import CricketerContext from "../context/CricketerContext"

const Display = () =>{
    const {cricketer,setCricketer} = useContext(CricketerContext);
    console.log(useContext(CricketerContext));


    return(
        <div>
            <h1> Accessing Global Values</h1>
            <p>Crickter is: {cricketer.name}</p>
            <p>Age is: {cricketer.age}</p>
            <p>Country is: {cricketer.country}</p>
            <p>Retire is: {cricketer.retire.toString()}</p>
            <p>Wickets is: {cricketer.wickets}</p>
            <button onClick={()=>setCricketer({...cricketer, age: cricketer.age+1})}>Update Saching age</button> <h1>Accessing Global Value</h1>
            {/* <h1> Value of A :{a}</h1>
            <h1>value of B :{b}</h1> */}

        </div>


    )
}
export default Display




/* <CricketerContext.Consumer>
              {
                (info)=>( // info means value
                     <h1>Line 13: {info} </h1>
                )
              }
            </CricketerContext.Consumer> */