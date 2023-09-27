import React,{useState} from "react"
import CricketerContext from "./CricketerContext"


const CricketerProvider = (props) =>{
   const [cricketer,setCricketer] = useState({
    name:"sachin",
    age:50,
    country:"India",
    retire: true,
    wickets:200

   })
    return(
        <CricketerContext.Provider value={{
            cricketer:cricketer,
            setCricketer:setCricketer

        }}>
            {props.children}

        </CricketerContext.Provider>

    )
}

export default CricketerProvider