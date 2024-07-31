import axios from "axios";
import React, { useEffect, useRef, useState } from "react"
import "./index.css"
import image from './989c5177-6bd5-4b35-b8dd-412a7665ab13.jpg'
const Weather = () => {
    const[details,setDetails]=useState({})
    const[city,setCity]=useState("")
    const[error,setError]=useState(true)
    const YOUR_API_KEY="80910612dcf7b8881a64531ad282247c"
    const cityRef=useRef()
    useEffect(()=>{
        fetchData()
    },[city])
    const fetchData=async()=>{
            try{
                const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_KEY}&units=metric`)
            if(response.status===200){
                setDetails(response.data)
                console.log(response.data)
            }
            else{
                setError(false)
            }
            }
            catch{
                if(city!=="")
                    alert("Enter valid City")
            }
           
        
        
    }
    const CityHandler=(event)=>{
        event.preventDefault()
        console.log(cityRef.current.value)
        if(cityRef.current.value!=="")
        setCity(cityRef.current.value)
    }
   
    return (
        <div className="Div" >
            {/* <iframe src="https://assets.pinterest.com/ext/embed.html?id=211174970662057" height="790" width="345" frameborder="0" scrolling="no" ></iframe> */}
            <h1>Weather App</h1>
            <form onSubmit={CityHandler}>
                <input
                    type="text"
                    placeholder="Enter city"
                    ref={cityRef}
                />
                <input type="submit" />
            </form>
            {
        Object.keys(details).length>0 && error ?
        <div>
        <h2>{details.name}</h2>
        <p className="Temp">{Math.floor(details.main.temp)}°C</p>
        <p>Weather: {details.weather[0].description}</p>
    </div>:null
     }
      
        </div>
    );
//   return (
//     <div >
//       <form onSubmit={CityHandler}>
//       <input type="text" ref={cityRef} className="Input" placeholder="City..."/>
//       <input type="submit" className="btn btn-primary" />
//       </form>
      
//       {
//         Object.keys(details).length>0 && error ?
//         <><h1>{details.main.temp}</h1></>:null
//       }
      
//     </div>
//   )
};

export default Weather;
