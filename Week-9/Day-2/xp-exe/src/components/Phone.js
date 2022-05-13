
import React from 'react'


class Phone extends React.Component{
  constructor(){
super()
this.state = {
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
};
  }

handleClick=()=>{
const {color}=this.state.color
this.setState({color:'red'})

}


  render(){
    const {brand,model,color,year}=this.state
  return(
<div>
<h1>My Phone is a {brand}</h1>
<p>It is {color} {model} from {year}</p>
<button onClick={this.handleClick}>change color</button>
</div>)}
}


export default Phone
