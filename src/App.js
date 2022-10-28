import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import HomePage from "./Pages/HomePage";

import { StateProvider } from "./Context/StateProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AddToCart from "./Components/Cart/AddToCart";
import Signup from "./Components/SigInUp/Signup";

function App() {
  return (
    <React.Fragment>
      
      <Router>
        <StateProvider>
         
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Header" element={<Header />} />

            <Route path="Home" element={<Home />} />
            <Route
              path="Signup"
              element={
                <>
                  <Header />
                  <Login />
                </>
              }
            />
            <Route
              path="AddToCart"
              element={
                <>
                  <Header />
                  <AddToCart />
                </>
              }
            />
            <Route
              path="Login"
              element={
                <>
                  <Header />
                  <Signup />
                  
                </>
              }
            />
          </Routes>
        </StateProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
