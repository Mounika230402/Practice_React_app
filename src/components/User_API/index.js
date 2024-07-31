import axios from "axios";
import React, { useEffect, useState } from "react"
import CardComponent from "./card";

const UserAPI = (props) => {
  let arr=["https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs=","https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=2048x2048&w=is&k=20&c=3k2v5eg_ZitUPK3hCiLLKTclk2AbTlyV5VwSfBpynQs="]
  const[User,setUsers]=useState([])
  const[Bar,setSearch]=useState([])
  const[Name,setName]=useState("")
  useEffect(()=>{
    FetchData()
  },[])
  const FetchData=async()=>{
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    for(let i in response.data){
      response.data[i]["image"]=arr[i]
    }
    setUsers(response.data)
  }
  const Searching=(event)=>{
    setName(event.target.value)
    const filtered=User.filter(each=>each.name.toLowerCase().includes(Name))
    setSearch(filtered)
  }
  return (
    <>
    <input value={Name} onChange={Searching} style={{width:"40vw",margin:"2vh 30vw",padding:"1vw",borderRadius:"3vw",fontSize:"1.5vw"}} placeholder="Search here..."/>
    <div style={{display:"grid",gridTemplateColumns:"auto auto auto",justifyContent:"space-around",gap:"3vh",margin:"2vh"}}>
    {
        Bar.length >0 ?
        Bar.map((each,index)=>{
          return(
            <CardComponent data={each}/>
           
          )
        }):
        User.map((each,index)=>{
          return(
            <CardComponent data={each}/>
           
          )
        })
      }
    </div>
    </>
  )
};

export default UserAPI;
