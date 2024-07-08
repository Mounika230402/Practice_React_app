import React from "react"
import data from "./data";
import ImageComponent from "../image/ImageComponent";
import ButtonComponent from "../button/button-function";
const ListusingMap = () => {
  return (
    <div>
      {
        data.map(eachItem=>{
            return(
                <div key={eachItem.id}>
                <h1>{eachItem.title}</h1>
                <p>{eachItem.description}</p>
                <ImageComponent src={eachItem.image} alt={eachItem.title}/>
                <h5>{`Price:₹${eachItem.price}`}</h5>
                <ButtonComponent text={"Click Me"}/>
                </div>
            )
        })
      }
    </div>
  )
};

export default ListusingMap;
