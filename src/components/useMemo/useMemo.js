import React, { useMemo, useState } from "react"

const ExampleforUseMemo = () => {
    const res=1000;
    const[count,setCount]=useState(0)
    const[salary,setSalary]=useState(10000)
    const isEven = useMemo(()=> {
      console.log("isEven executing.....");
    },[])
    function CountIncrement(){
        setCount(count+1)
        console.log("count is executing")
    }
    function salaryIncrement(a){
        setSalary(salary+a)
        console.log("salary is executing")
    }
    
  
  return (
    <div>
      <h1>Count:{count}  </h1>
      <button onClick={()=>{CountIncrement()}}>Increase</button>
      <h1>Count:{salary}</h1>
      <button onClick={()=>{salaryIncrement(res)}}>Increase</button>
    
      <h3>{isEven}</h3>
      
    </div>
  )
};

export default ExampleforUseMemo;
