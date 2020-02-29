import React from 'react'
import axios from 'axios'
import Image from './Image'


class MultCats extends React.Component{
    state ={ catPics: [], numberOfCats:10}
// handleNumberChange(event){
//         this.setState({numberOfCats:event.target.value})
//          }
  componentDidMount(){
      const numberOfCats = this.state.numberOfCats
      if(numberOfCats){
          this.getMultPics(numberOfCats)
      }
  }

    getMultPics = async (numberOfCats)=>{
        try{
            const picsURL = `https://api.thecatapi.com/v1/images?api_key=1e37d765-8afa-40d5-b975-78fdd644a659${numberOfCats}`
            let response = await axios.get(picsURL)
            debugger
            this.setState({catPics:response.data.message})
            console.log(response)
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
                {/* <input onChange={this.handleNumberChange}type="number" value={this.numberOfCats}></input>
                <button onClick={this.getMultPics}></button> */}
                {cats}
            </div>
        )
    }
}

export default MultCats;