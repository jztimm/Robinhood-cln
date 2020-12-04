// import logo from './logo.svg';
import Header from './Components/Header.js'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
          <Switch>
            
          </Switch>
        </Router>
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
