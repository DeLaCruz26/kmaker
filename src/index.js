import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./redux/reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchProducts } from "./redux/actions/productActions";

const reducer = combineReducers({
  cartReducer: cartReducer,
  fetchProducts: fetchProducts,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
