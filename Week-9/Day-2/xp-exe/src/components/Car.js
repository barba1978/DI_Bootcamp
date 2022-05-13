
import React from 'react'
import Garage from './garage.js'

class Car extends React.Component{
  constructor(){
    super()
    this.state={
      color:'red'
    }
  }

render(props){
const {name,model}=this.props
const {color} = this.state
return(
<div>
<h1>This {name},{model} ha the color {color}</h1>
<Garage size={'small'} />

</div>)
  }
}


export default Car
