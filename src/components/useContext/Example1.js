import React, { createContext, useState } from "react"

export const Profile=createContext();
const Example1 = (prop) => {
    const[state,setState]=useState({
        name:"mounika",
        batch:"5R"
    })
    function ChangeName(){
    
        setState({...state,name:"Mounika Kankanamapti"})
    }
    function ChangeBatch(){
      
      setState({...state,batch:"1R"})
  }

  return (
    <div>
        <Profile.Provider value={{
            state,
            ChangeName,
            ChangeBatch
        }}>
            {prop.children}
            <h1>Welcome {state.name}</h1>
      <h2>{state.batch}</h2>
      {/* <button onClick={ChangeName}>Change Name</button> */}
      
        </Profile.Provider>
      
    </div>
  )
};

export default Example1;
