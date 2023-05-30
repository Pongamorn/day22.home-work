import './App.css';

function App() {
  return (
    <div className=" bg-lime-950 text-black ">
      <header className="App-header">
        <img src={require('./TOAlogo.png')} className="App-logo" alt="logo" />
        <p className="overline text-6xl text-lime-500">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
