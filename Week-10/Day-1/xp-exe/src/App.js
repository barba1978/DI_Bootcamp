
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement,reset,add_5} from './actions.js'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(add_5())}>add_5</button>
      </div>
    );
  }




export default connect()(App);
