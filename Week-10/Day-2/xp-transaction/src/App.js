
import './App.css';
import First  from './components/First.js'
import Second  from './components/Second.js'
import Third  from './components/Third.js'
import Fourth  from './components/Fourth.js'
import Button  from './components/Button.js'

function App() {
  return(
    <div className="App">
      <header className="App-header">
      <h1> Transaction exercise</h1>
      <First />
      <Second />
      <Third />
      <Fourth/>
      <Button />
      </header>
    </div>
  );
}

export default App;
