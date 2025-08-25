import "./App.css";
import Greeting from './Greeting'

function App() {
  // TODO4 : Render ออกมาใน App.tsx

  return(
    <div className="App">
      <header className="App-header">
        <Greeting name="xcnn" age={28}/>
      </header>
    </div>
  );
}

export default App;
