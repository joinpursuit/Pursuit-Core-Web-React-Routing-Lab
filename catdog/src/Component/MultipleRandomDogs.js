import React from 'react'
import axios from 'axios'
import Dog from './Dog'



class MultipleDogs extends React.Component{
   state = {
       dogArr: [],
       num: ''

   }

    


    async componentDidMount () {
        try{
            let dogAmount = `https://dog.ceo/api/breeds/image/random/${this.props.match.params.num}`
            let res = await axios.get(dogAmount);
            // debugger
            this.setState({
                dogArr: res.data.message
            })
            
        }catch(error){
            this.setState({
                dogArr: []
            })
            
        }

    }
    render(){
        let dogs = this.state.dogArr.map(dog =>{
        return <Dog key={dog} url={dog}/>
        })
        return(
            <div>
                {dogs}
            </div>
        )

    }
}

export default MultipleDogs