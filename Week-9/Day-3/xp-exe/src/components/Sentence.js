import React from 'react'

class Change extends React.Component{
  constructor(){
    super()
    this.state={
      color:'red'
    }

  }


shouldComponentUpdate(){
  return true
}

componentDidMount() {


}
handleClick=()=>{
this.setState({color:'pink'})

}

getSnapshotBeforeUpdate(props,state){
return {newColor:this.state.color}

}

componentDidUpdate(x,y,z){
setTimeout(()=>{this.setState({color:'yellow'})}, 5000);
console.log(y.color);
}


  render(){
    return(
      <div>
      <h1> My favorite color is {this.state.color}</h1>
      <p> before you clicked the color was </p>
      <button onClick={this.handleClick} > Change </button>
      </div>
    )
  }
}

export default Change
