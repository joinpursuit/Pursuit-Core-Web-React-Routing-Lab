import React from 'react'
import axios from 'axios'
import Image from './Image'


class MultCats extends React.Component{
    constructor(props){
        super(props)
        state ={ apiKey:"1e37d765-8afa-40d5-b975-78fdd644a659", catPics: [], numberOfCats:1}
    }
handleNumberChange(event){
        this.setState({numberOfCats:event.target.value})
         }
  componentDidMount(){
        this.getMultPics(numberOfCats)
      
  }

    getMultPics = async (number)=>{
        try{
            const picsURL = `https://api.thecatapi.com/v1/images/search?api_key=${this.state.apiKey}&limit=${this.state.numberOfCats}`
            let response = await axios.get(picsURL)
           
            this.setState({catPics:response.data})
            console.log(response)
        }catch(error){
            this.setState({catPics: []})
        }
    }
    render(){
        let cats = this.state.catPics.map(cat=>{
            return <Image img={cat.url} key={cat}/>      
          })
        
        return (
            <div>
                <input onChange={this.handleNumberChange}type="number" value={this.numberOfCats}></input>
                <button onClick={this.getMultPics}></button>
                {cats}
            </div>
        )
    }
}

export default MultCats;