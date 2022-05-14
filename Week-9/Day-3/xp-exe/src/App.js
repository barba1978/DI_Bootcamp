
import './App.css';
import Counter from './components/Counter'
import Error from './ErrorBoundary.js'
import Change from './components/Sentence.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
<Error>
<Counter />
</Error>
<Error>
<Counter />
</Error>
<Counter />
<Change />

      </header>
    </div>
  );
}

export default App;
