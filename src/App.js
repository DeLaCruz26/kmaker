import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Products } from "./components";
import { fetchCart } from "./redux/actions/cartActions";
import { fetchProducts } from "./redux/actions/productActions";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    fetchCart();
  }, [dispatch]);

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
      <Products products={products} />
    </>
  );
}

export default App;
