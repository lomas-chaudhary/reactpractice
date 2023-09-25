import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state=
            {
                count:0
            }
        
    }

    changeCount()
    {
        // count=this.state.count+1 //this will give error as count is not defined
             
        // this.state.count=this.state.count+1 this won't render the value of count
        // to render it we must use setState


        // this.setState(
        //     {
        //         count:this.state.count+1
        //     },()=>{console.log('Callback value',this.state.count)}
        // )

        this.setState((prevState)=>(   //prevState parameter can be named as anything
            {
                count: prevState.count+1    
            }
        ))

        console.log(this.state.count)
    }

    incrementFive(){
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()    
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
          <button onClick={()=>this.changeCount()}>Increment</button>
          <button onClick={()=>this.incrementFive()}>count++</button>
      </div>
    )
  }
}

export default Counter
