import './App.css';

function App() {
  const displayStyle = {
    fontFamily: "open sans",
    align: "left",
  }
  return (
    <div className="App">
  <h1>Hello Dojo!</h1>
  <h3>Things I need to do:</h3>
  <div>
    <ul>
      <li>learn React</li>
      <li>climb Mt. Everest</li>
      <li>run a marathon</li>
      <li>feed the dog</li>
    </ul>
  </div>
    </div>
  );
}

export default App;
