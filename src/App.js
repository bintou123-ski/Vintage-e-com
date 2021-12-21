import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import logo from "./assets/logo.svg";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Cart from "./pages/Cart"
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

//Components
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/"><Home/> </Route>
        <Route path="/about"><About/> </Route>
        <Route path="/cart"> <Cart/> </Route>
        <Route path="/Checkout"> <Checkout/></Route>
        <Route path="/login"><Login/> </Route>
        <Route exact path="/products"> <Products/> </Route>
        <Route path="/products/:id" children={<ProductDetails/>}></Route>
        <Route path="*"><Error/> </Route>
      </Switch>
    </Router>
  );
}
