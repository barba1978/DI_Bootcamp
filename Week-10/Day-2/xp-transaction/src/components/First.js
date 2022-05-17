import React from 'react'
import {connect} from 'react-redux'
import {first} from '../redux/action'


class First extends React.Component{
render(){
return(
      <div>
      Account Number : <input type='text' onChange={this.props.first_input} />
      </div>
    )}
}

const mapDispatch=(dispatch)=>{
first_input:((e)=>dispatch(first(e.target.value)))
}


export default connect(null,mapDispatch)(First)
