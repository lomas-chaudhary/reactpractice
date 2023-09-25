import React from 'react'

// function Greet() {
//     return <h1>Hello Lomas</h1>
// }

//// how to use props in functional component
// const Greet=(props)=> {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} aka {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

//props destructuring in the parameter

// const Greet=({name, heroName})=>{
//     return(
//         <div>
//             <h1>Hello {name} aka {heroName}</h1>
//         </div>
//     )
// }


//props destructuring in the function body

const Greet=(props)=>{
    const {name, heroName} = props
    return(
        <div>
            <h1>Hello {name} aka {heroName}</h1>
        </div>
    )
}

export default Greet;