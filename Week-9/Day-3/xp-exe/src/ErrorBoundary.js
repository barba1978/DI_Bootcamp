import React from 'react'

class Error extends React.Component{
constructor(props){
  super(props)
  this.state={
  hasError:false
  }
}
static getDerivedStateFromError(error) {
   // Update state so the next render will show the fallback UI.
   return { hasError: true };
 }

componentDidCatch(error,errorInfo){
    console.log(error,errorInfo);
}
render(){
if (this.state.hasError){
  return <h1>somethig went wrong  </h1>
}
return this.props.children
}


}

export default Error
