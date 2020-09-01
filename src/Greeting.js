import React from 'react';
import Welcome from './Welcome'

function Greeting(){
    const names = ["Emery", "Kamrin", "Scott"]
    const welcomeElements = names.map((name)=> <Welcome name={name} weather="Sunny"/>)

    return(
        <div>
            <h2>Hi! Let's learn about components</h2>
            {welcomeElements}
        </div>
    )
}

// class Greeting extend React.Component {
//     render(){
//         return(
//             <div>
//             <h2>Hi! Let's learn about components</h2>
//             {welcomeElements}
//         </div>
//         )
//     }
// }



// export function Goodbye(){
//     return(
//         <h3>Goodbye</h3>
//     )
// }

export default Greeting