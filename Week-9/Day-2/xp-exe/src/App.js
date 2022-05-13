import './App.css';
import Car from './components/Car.js'
import Event from './components/Event.js'
import Phone from './components/Phone.js'
import Life from './components/lifeCycle.js'

const obj={
  name:'ford',model:'mustan'
}

const {name,model}=obj

function App() {
  return (
    <div className="App">
    <Life />
    </div>
  );

}

export default App;
