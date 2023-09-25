import React from 'react'

//event handling in functional component
function FunctionClick() {

    function clickHandler(){
        console.log("button clicked ")
    }

  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick