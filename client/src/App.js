import { Route, Routes } from "react-router-dom";
import { React, useEffect } from "react";
import Home from "./Component/Header/Home";
import "./app.scss";
import Navbar from "../src/Navbar/Navbar";
import Cart from "./Component/Cart/Cart";
import Error from "./Component/Error";
import Footer from "./Component/Footer";
import ProductPage from "./Component/Product/ProductPage";
import Api from "./API/Api";

const Routing = () => {


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route path="/api" element={<Api />} />
        <Route path="ProductPage" element={<ProductPage />} />
        {/* <Route path="/Navbar" element = {<Navbar/>} /> */}
      </Routes>
    </>
  )
}


function App() {


  return (
    <div className="App">
      <Navbar />
      <Api/>
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
