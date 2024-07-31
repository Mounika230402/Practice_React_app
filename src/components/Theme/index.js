import React, { createContext, useState } from "react"
import Home from "./home";

export const ContextVariable=createContext();
const Stack = () => {
    const[theme,setTheme]=useState("white")
    const[color,setColor]=useState("black")
    function ChangeColor(){
           if(theme==="white") {setTheme("black");setColor("white")}
           else{ setTheme("white");setColor("black")}
        }
        
  return (
    <div>
      <ContextVariable.Provider value={{theme,color,ChangeColor}}>
        <Home/>
      </ContextVariable.Provider>
    </div>
  )
};

export default Stack;
