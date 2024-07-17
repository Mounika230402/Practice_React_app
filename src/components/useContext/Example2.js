import React, { useContext } from "react"
import { Profile } from "./Example1";
const Example2 = () => {
    const details=useContext(Profile);
    // console.log(details)
    const ChangeName1=()=>{
      console.log("Change Name")
        details.ChangeName()
    }
    const ChangeBatch1=()=>{
      console.log("Change Batch")
      details.ChangeBatch()
    }
  return (
    <div>
      <h1>
        Welcome {details.state.name}
        <button onClick={ChangeName1}>Change Name</button>
      </h1>
      <h1>
      Welcome {details.state.batch}
      <button onClick={ChangeBatch1}>Change Name</button>
    </h1>
    </div>
  )
    }

export default Example2;



