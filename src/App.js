import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact to="/" />
        <Route to="/cart" />
        <Route to="/products" />
        <Route to="/account" />
      </Switch>
    </Router>
  );
}

export default App;
