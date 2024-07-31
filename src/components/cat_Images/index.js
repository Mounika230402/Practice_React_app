import axios from "axios";
import React, { useEffect, useState } from "react"
// import CardComponent from "./card";
import Button from 'react-bootstrap/Button';
import TableComponent from "./table";
// import Card from 'react-bootstrap/Card';
const RandomCatImages = () => {
    const[catDetails,setCatDetails]=useState([])
    // const[current,setCurrent]=useState({})
    const[loader,setLoader]=useState(1)
    useEffect(()=>{
       fetchData()
       
    },[loader])

  //   useEffect(()=>{
  //     if(loader>1){
  //       fetchData()

  //     }
       
  
  //  },[])
    const changeLoader=()=>{
        setLoader(loader+1)
    }
    
    const fetchData=async()=>{
      
        const response=await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=abys")
        console.log(response.data[0])
        const filteredData=catDetails.filter(each=>each.id!==response.data[0].id)
        if(catDetails.length>0){
          setCatDetails([...filteredData,response.data[0]])
          
        }
        else{
      setCatDetails([...catDetails,response.data[0]])
        }
        console.log(filteredData)
        
    }
    
  return (
    <div>

        
          {
              catDetails.length >0 ? <TableComponent data={catDetails}/> : <h2>Please Wait..</h2>
          } 
        <Button variant="primary" onClick={changeLoader} style={{width:"200px",marginRight:"20px"}}>Cat Details</Button>
        
    </div>
  )
};

export default RandomCatImages;









