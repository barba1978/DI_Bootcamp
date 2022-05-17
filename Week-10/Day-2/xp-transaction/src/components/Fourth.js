import React from 'react'
import {connect} from 'react-redux'
import {fourth} from '../redux/action'


class Fourth extends React.Component{
render(){
return(
      <div>
      Amount : <input type='text' onChange={this.props.fourth_input} />
      </div>
    )}
}

const mapDispatch=(dispatch)=>{
fourth_input:((e)=>dispatch(fourth(e.target.value)))
}


export default connect(null,mapDispatch)(Fourth)
