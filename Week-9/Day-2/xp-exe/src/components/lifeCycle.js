import React from 'react'


class Life extends React.Component{
  constructor(){
super()
this.state = {
    color:'black'
};
}

componentDidMount(){
  setTimeout(myChange, 5000);

  function myChange(){
this.setState({color:'red'})
    }
}



render(){

return(
<div>
<h1>My favorite colore is {this.state.color}</h1>
</div>
)

}
}

export default Life
