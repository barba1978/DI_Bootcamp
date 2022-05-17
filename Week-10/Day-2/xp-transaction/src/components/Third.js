import React from 'react'
import {connect} from 'react-redux'
import {third} from '../redux/action'


class Third extends React.Component{
render(){
return(
      <div>
      Holder Name: <input type='text' onChange={this.props.third_input} />
      </div>
    )}
}

const mapDispatch=(dispatch)=>{
third_input:((e)=>dispatch(third(e.target.value)))
}


export default connect(null,mapDispatch)(Third)
