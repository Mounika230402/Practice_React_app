import React from "react";
// import "./image.css"
const ImageComponent = (props) => {
    const {src,alt,w=100,h=100}=props
  return (
    <div>
      <img src={src} alt={alt} width={w} heigh={h}/>
    </div>
  )
};

export default ImageComponent;
