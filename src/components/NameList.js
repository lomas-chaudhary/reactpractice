import React from 'react'

function NameList() {
    const names=['Bruce','Clark','Diana']
    const nameList=names.map(name=><h2>{name}</h2>)
//   return (
//     <div>
//         <h2>{names[0]}</h2>
//         <h2>{names[1]}</h2>
//         <h2>{names[2]}</h2>

//     </div>
//   )

//   return (
//     <div>
//         {
//             names.map(name=><h6>{name}</h6>)
//         }

//     </div>
//   )

    return (<div>{nameList}</div>)
}

export default NameList