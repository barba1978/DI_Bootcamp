import React from 'react'

class Event extends React.Component{
constructor(){
  super()
  this.state={
    sent:''
  }
  this.state={
    isToggleOn:'OFF'
  }
}

handleClick=()=>{
this.setState({sent:'i was clicked'})

}

handlePress=()=>{
this.setState({word:'the key was pressed '})

}

handleToogle=()=>{
this.setState({isToggleOn:'ON'})

}


render(){
  return(
<div>
<h1>{this.state.sent}</h1>
<h1>{this.state.word}</h1>
<input onKeyPress={this.handlePress}  />
<button onClick={this.handleClick}>shoot the sentence!</button>
<button onClick={this.handleToogle}> Press here:{this.state.isToggleOn}</button>
</div>
  )
}}

export default Event
