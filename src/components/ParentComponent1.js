import React, { Component } from 'react'
import RegComponent from './RegComponent'

export class ParentComponent1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Lomas'
      }
    }

    componentDidMount(){
        console.log("component did mount called")
        // setInterval(()=>{
        //     this.setState({
        //         name:'Lomas'
        //     })
        // },2000)
    }
    
  render() {
      console.log("parent component render")
    return (
      <div>
          parent component
        <RegComponent name={this.state.name}></RegComponent>
      </div>
    )
  }
}

export default ParentComponent1


