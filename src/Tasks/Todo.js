
import ButtonComponent from "../components/button/button-function";
import React from "react"
import "./Todo.css";
const TodoExample = () => {
    const data=["Waking up at 6:30 am","Fresh up","Exercises","Taking Bath","Eating Break Fast","Reaching Institute","Attend react at 2:30pm"]
  return (
    <div className="Todo">
        <h1 style={{textAlign:"center",fontFamily:"cursive",fontWeight:"bold"}}>My Todos</h1>
      <ul type="none">
        {
        data.map(eachItem=>{
        return(
            <>
            <li className="List">{eachItem}
            <ButtonComponent text={"Update"} className="Button"></ButtonComponent>
            <ButtonComponent text={"Delete"} className="Button"></ButtonComponent>
            </li>
           
            <br/>
            </>
        )

        })
    }
      </ul>
    </div>
  )
};

export default TodoExample;
