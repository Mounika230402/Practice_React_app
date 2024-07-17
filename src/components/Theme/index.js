import React, { createContext, useState } from "react"
import Home from "./home";

export const ContextVariable=createContext();
const Stack = () => {
   const colors=["white","black","blue","yellow","brown","red","green","gray","navyblue","lightgreen"]
    const[theme,setTheme]=useState("white")
    const[color,setColor]=useState("black")
    function ChangeColor(){
        //    if(theme==="white") {setTheme("black");setColor("white")}
        //    else{ setTheme("white");setColor("black")}
        let r1=Math.floor(Math.random()*10)
        let r2=Math.floor(Math.random()*10)
        if(r1!==r2){
            setTheme(colors[r1])
        setColor(colors[r2])
        }
        
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
