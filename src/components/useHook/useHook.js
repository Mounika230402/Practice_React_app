import { useState } from "react"

const useHook=(initialvalue,inc)=>{
    const[data,setData]=useState(initialvalue)
    function Increment(){
        setData(data+inc)
    }
    function decrement(){
        setData(data-inc)
    }
    return [data,Increment,decrement]
}
export default useHook;
