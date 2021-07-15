import React, { useState, useEffect } from "react";
import { Navbar, Products } from "./components";
import { commerce } from "./lib/commerce";
import "./App.css";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);

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
};

export default App;
