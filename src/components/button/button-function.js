import React from "react";
function ButtonComponent(prop){
    const{text,onPress}=prop
    let buttonStyle={backgroundColor:"green"}
    return (
        <button text={text} onClick={onPress} style={buttonStyle} width={100} height={100}>{text}</button>
    )
}
export default ButtonComponent;