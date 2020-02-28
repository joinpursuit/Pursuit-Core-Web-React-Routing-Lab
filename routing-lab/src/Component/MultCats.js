import React from 'react'
import axios from 'axios'
import Image from './Image'


class MultCats extends React.Component{
    state ={ catPics: [], numberOfCats:10 }
    
//   componentDidMount(){
//       const numberOfCats = this.state.numberOfCats
//       if(numberOfCats){
//           this.getMultPics(numberOfCats)
//       }
//   }
    getMultPics = async (numberOfCats)=>{
        try{
            const picsURL = `https://api.thecatapi.com/v1/images/search/${numberOfCats}`
            
            let response = await axios.get(picsURL)
           
            this.setState({catPics:response.data[0].url})
        }catch(error){
            this.setState({catPics: []})
        }
    }
    render(){
        let cats = this.state.catPics.map(cat=>{
            return <Image img={cat} key={cat}/>      
          })
        
        return (
            <div>
                {cats}
            </div>
        )
    }
}

export default MultCats;