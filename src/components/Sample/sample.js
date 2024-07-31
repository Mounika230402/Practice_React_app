import React, { useState } from "react"
import Child from "./Child";
import ButtonFunction from "../button/button-function";

const Sample = (props) => {
   const[count,setCount]=useState(0)
   const Increment=()=>{
    setCount(count+1)
   }
   const Decrement=()=>{
    setCount(count-1)
   }
  return (
    <div>
        <Child ></Child>
      <h4>{count}</h4>
      <ButtonFunction onClick={Increment}>+</ButtonFunction>
      <ButtonFunction onClick={Decrement}>-</ButtonFunction>
    </div>
  )
};

export default Sample;
