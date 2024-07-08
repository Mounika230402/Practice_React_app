import React from "react";
function ButtonComponent(prop){
    const{text,onPress}=prop
    let buttonStyle={backgroundColor:"#0000FF",color:"white",border:"none",margin:"0px 20px",padding:"5px 20px"}
    return (
        <button text={text} onClick={onPress} style={buttonStyle} width={100} height={100}>{text}</button>
    )
}
export default ButtonComponent;