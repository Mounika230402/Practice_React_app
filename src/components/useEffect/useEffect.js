import React, { useEffect, useState } from "react"
import CardsObjectsExample from "../Object_Cards/onject_cards";
import axios from "axios";
import styles from "../Object_Cards/cards.module.css"

const COLOURS=["purple","darkgreen","blue","yellow","green","red","orange","pink","brown","gray"]
const ExampleForUseEffect = () => {
    
    const[Color,setColor]=useState("white")
    const[data,setData]=useState([])

    useEffect(()=>{
        const timerId=setInterval(()=>{
            setColor(COLOURS[Math.floor(Math.random()*10)])
        },1000)
        return()=>{
            clearInterval(timerId)
        }
    },[Color])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async () => {
        try {
          const response1 = await axios.get("https://fakestoreapi.com/products");
          console.log(response1, "response1");
    
          if (response1.status === 200) {
            setData(response1.data);
          }
        } catch (err) {
          console.error(err);
        }
      };
  return (
    <div style={{background:Color}} className={styles.Cards}>
      {/* <h1 style={{background:Color}}>Hi I am Mounika</h1> */}
      {
      data.map(each=>{

        return(
        
            <CardsObjectsExample object={each}/>)
      })
    }
    </div>
  )
};

export default ExampleForUseEffect;
