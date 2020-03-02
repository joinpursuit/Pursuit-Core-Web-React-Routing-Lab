import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const DogsRandom = async (props) => {
    const {number} = useParams();
    // debugger
    let res = await axios.get(`https://dog.ceo/api/breeds/image/random/${number}`)
    debugger
    return(
        <div>Helooo</div>
    )
}
//  export class DogsRandom extends Component {
     
//      async RandomNumberDogs () {
//         const {number} = useParams();
//         console.log(number)
//         //  debugger
//         // let res = await axios.get("")
//     }
//      componentDidMount() {
//         this.RandomNumberDogs()
//      }
//     render() {
//         return (
//             <div>Helooo</div>
//         )
//     }
    
// }

export default DogsRandom;