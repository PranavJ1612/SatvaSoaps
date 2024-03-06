import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";
import Home from "./pages/Home";
import WhySatva from "./pages/WhySatva";
import About from "./pages/About";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Appbar from "./components/Appbar";
import { FaCircleArrowUp } from "react-icons/fa6";

const App = () => {
  return (
    <Router>
      <div className="relative">
        <Appbar />
        <main>
          <div id="home">
            <Home />
          </div>
          <div id="">
            <WhySatva />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="products">
            <Products />
          </div>
        </main>
        <Footer />

        <Link to="home" smooth={true} spy={true} duration={200}>
          <FaCircleArrowUp
            size={25}
            className=" rounded-full text-black z-10 right-0 fixed bottom-0 m-3"
          />
        </Link>
      </div>
    </Router>
  );
};

export default App;
