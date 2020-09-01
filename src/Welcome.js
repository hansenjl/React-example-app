import React from 'react'

// export default function Welcome(props){
//     return(
//         <div>
//             <h1>Welcome {props.name} </h1>
//             <p>It's {props.weather} outside today! </p>
//         </div>
//     )
// }

export default class Welcome extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Welcome {this.props.name} </h1>
                <p>It's {this.props.weather} outside today! </p>
            </div>
        )
    }
}