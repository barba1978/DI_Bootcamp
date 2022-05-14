import React from 'react'

class Counter extends React.Component{
  constructor(){
    super()
    this.state={
      number:0
    }
  }

  handleClick=()=>{
this.setState({number:this.state.number +1})

  }
  shouldComponentUpdate(){
    return false
  }

  render(){
    if (this.state.number>= 5){
     throw Error('Something went wrong !!')
    }
    return(
<div>
<h1> {this.state.number} </h1>
<button onClick={this.handleClick}> ADD </button>
</div>
    )
  }
}

export default Counter
