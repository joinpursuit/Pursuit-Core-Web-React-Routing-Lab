import React, { useState, useEffect } from 'react';
import axios from "axios";
import Dog from "./Dog"

const DogImageRandom =()=> {

    const [imgLink,setImgLink] = useState(null)

    const handleRandomDogBtn =async()=>{
        try {
            let res = await axios.get("https://dog.ceo/api/breeds/image/random")
            setImgLink(res.data.message)
            console.log(imgLink)
            // debugger
        } catch (error) {
            setImgLink([])
            console.log(error)
        }
    }

    useEffect(()=>{
        handleRandomDogBtn()
    },[])
        return (
            <div>
                <h1>Random Dog</h1>
                <br></br>
                <button onClick={handleRandomDogBtn}>new random dog</button>
                <br></br>
                <Dog imglink={imgLink}/>
            </div>
        )
    }

export default DogImageRandom


// import React, { useState, useEffect } from 'react'
// import axios from "axios"



// export class DogImageRandom extends Component {
//     state={
//         imgLink:null
//     }

//     async handleRandomDogBtn(){
//         // debugger
//         let res = await axios.get("https://dog.ceo/api/breeds/image/random")
//         try {
//             this.setState(
//                 {imgLink:res.data.message}
//                 )
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     componentDidMount(){
//         this.handleRandomDogBtn()
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Random Dog is here</h1>
//                 <br></br>
//                 <button onClick={this.handleRandomDogBtn.bind(this)}>new random dog</button>
//                 <br></br>
//                 <img src={this.state.imgLink} alt="dog"></img>
//             </div>
//         )
//     }
// }

// export default DogImageRandom
