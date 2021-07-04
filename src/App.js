import "./App.css";
import { Navbar, Products } from "./components";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Switch>
    //     <Route exact to="/" />
    //     <Route to="/cart" />
    //     <Route to="/products" component={Products} />
    //     <Route to="/account" />
    //   </Switch>
    // </Router>
    <>
      <Navbar />
      <Products />
    </>
  );
}

export default App;
