import React from 'react'
import {connect} from 'react-redux'
import {second} from '../redux/action'


class Second extends React.Component{
render(){
return(
      <div>
      FSC : <input type='text' onChange={this.props.second_input} />
      </div>
    )}
}

const mapDispatch=(dispatch)=>{
second_input:((e)=>dispatch(second(e.target.value)))
}


export default connect(null,mapDispatch)(Second)
