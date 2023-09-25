import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }   

  render() {

    // if(this.state.isLoggedIn)
    // {
    //     return (
    //         <div>Welcome Lomas</div>
    //     )
    // }
    // else
    // {
    //     return(
    //         <div>
    //             <div>Welcome Guest</div>
    //         </div>    
    //     )
    // }

    // let message
    // if(this.state.isLoggedIn){
    //     message=<div>Welcome Lomas</div>
    // }
    // else
    // {
    //     message=<div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // return(
    //     this.state.isLoggedIn?
    //     <div>Welcome Lomas</div>:
    //     <div>Welcome Guest</div>
    // )


   return this.state.isLoggedIn && <div>Welcome Lomas</div>

  }
}

export default UserGreeting
