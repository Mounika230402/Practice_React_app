import React,{Component} from "react";

class ClassButton extends Component{
    state={
        text:"subscribe",
        click:"false"
    }
    subscribeHandler=()=>{
            this.setState({
                click:!this.state.click
            })
            if(this.state.click){
                this.setState({
                    text:"unsubscribe",
                })
            }
            else{
                this.setState({
                    text:"subscribe",
                })

            }

    }
    render(){
        return(
            <button onClick={this.subscribeHandler}>{this.state.text}</button>
        )
    }
}
export default ClassButton;