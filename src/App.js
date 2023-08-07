import {Route, Routes} from "react-router-dom";
import {useEffect, useState, React} from "react";
import Home from "./Component/Header/Home";
import "./app.scss";
import Login from "./Component/Login/Login.js";
import Signup from "./Component/Login/Signup";
import Navbar from "../src/Navbar/Navbar";
import Cart from "./Component/Cart/Cart";
import Error from "./Component/Error";
import Footer from "./Component/Footer";
import ProductPage from "./Component/Product/ProductPage";

const Routing = () => {

  return(
    <>
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route path="/Login" element = {<Login/>} />
      <Route path="/Signup" element = {<Signup/>} />
      <Route path="/Cart" element = {<Cart/>} />
      <Route path="*" element={<Error />} />
      <Route path="ProductPage" element={<ProductPage />} />
      {/* <Route path="/Navbar" element = {<Navbar/>} /> */}
    </Routes>
    </>
  )
}


function App() {

  const [isLogged, setLogged] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLogged(true);
    })
  },[])


  return (
    <div className="App">
      <Navbar/>
      <Routing />
      <Footer/>
      {  isLogged ? <></>:<Login/> }
    </div>
  );
}

export default App;
