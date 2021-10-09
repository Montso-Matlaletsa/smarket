import logo from './logo.svg';
import './App.css';
import Nav from "./components/HomeComponents/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/index'
import Register from "./components/Pages/Register";

function App() {
  return (

  <Router>
    <Nav />
    <Switch>
      <Route path="/smarket" exact component={Home} />
      <Route path="/Register" exact component={Register} />
    </Switch>
  </Router>
  );
}

export default App;
