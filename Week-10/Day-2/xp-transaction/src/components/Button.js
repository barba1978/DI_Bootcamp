import React from 'react'
import {connect} from 'react-redux'



class Button extends React.Component{


render(){
  return(
    <div>
<button onClick={this.} > Submit</button>
    </div>)}}

const mapState = (state) => {
  console.log(state.result);
  return {


  }}

export default connect(mapState,null)(Button)
