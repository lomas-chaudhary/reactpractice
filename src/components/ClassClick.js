import React, { Component } from 'react'

//event handling in class component
class ClassClick extends Component {

    clickHandler(){
        console.log("button clicked in classClick component")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click this</button>
      </div>
    )
  }
}

export default ClassClick
