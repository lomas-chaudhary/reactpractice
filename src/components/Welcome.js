import React, {Component} from 'react';

//how to use props in class component

// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} aka {this.props.heroName}</h1>
//     }
// }



//destructuring props in class component
class Welcome extends Component{
    render(){
        //in class component we destruture props generally in render method
        const {name, heroName}=this.props
        return (
            <h1>
                {/* now we can use {name} and {heroName} to access props */}
                Welcome {name} aka {heroName}
            </h1>
        )
    }
}


export default Welcome