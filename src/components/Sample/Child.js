import React from "react"

const Child = () => {
    // const{value}=prop
  return (
    <div>
        {
            console.log("Child is re-rendering")
        }
      <h1>Welcome to Counter</h1>
    </div>
  )
};

export default React.memo(Child);
