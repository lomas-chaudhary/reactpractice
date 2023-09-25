import React, {Component} from 'react';
class Message extends Component{

    constructor(){
        super()
        this.state={
            message: 'Welcome visitor',
            massage: 'massage is availabe at anya spa'
        }
    }

    changeMessage(){
        this.setState(
            {
                message:'Thank you for subscribing'
            }
        )
    }

    availMassage(){
        this.setState(
           {
            massage: 'Thank you for availing massage'
           }
        )
    }

    render(){
        return (
            <div>
                
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.changeMessage()}>subscribe</button>
            <h1>{this.state.massage}</h1>
            <button onClick={()=>this.availMassage()}>Avail Massage</button>
            </div>
        )
    }
}
export default Message;