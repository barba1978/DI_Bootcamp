
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import {handleClick} from './actions.js'


class  App extends React.Component{




  render(){
    return (
      <div className="App">
        <header className="App-header">
      <h1> {this.props.counter}</h1>
      <button onClick={this.handleClick}>ADD</button>
        </header>
      </div>
    );
  }

}

const mapState=(state)=>{
return{counter:state.counter}

}

const mapDispatch=(dispatch)=>{
return{
myhandleClick:(e)=>dispatch(handleClick(e.target.value))

}

}

export default connect(mapState,mapDispatch)(App);
