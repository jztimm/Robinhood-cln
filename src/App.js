// import logo from './logo.svg';
import Header from './Components/Header.js'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="app_header">
        <Header />
      </div>

      {/* Body */}
      <div>

      </div>
    </div>
  );
}

export default App;
