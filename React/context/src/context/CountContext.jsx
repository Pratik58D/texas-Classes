import { createContext, useState } from "react";

// 1. Create the context
export const  CountContext = createContext();

//2.create a provider Component

export const CountProvider = ({children})=>{
    const [count, setCount] = useState(0);

    return(
        <CountContext.Provider value={{count,setCount}} >
            {children}
        </CountContext.Provider>
    )
}

