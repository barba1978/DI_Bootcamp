import React from 'react'

class Project extends React.Component{
constructor(props){
    super(props)
   this.state={
       apiResponse:''
   } }

callApi(){
fetch('http://localhost:5000')
.then(res=>res.json())
.then(data=> this.setState({apiResponse:data}))

}

componentDidMount(){
this.callApi()
}

render(){
return(
<div>
{this.state.apiResponse}
<h1> Test to Integrate React in Node.js</h1>
</div>
)}
}

export default Project


