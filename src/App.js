import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";


import North from "./components/pages/North";
import Culture from "./components/pages/Culture";
import Shop from "./components/pages/Shop";

import Architecture from "./components/pages/Architecture";
import Race from "./components/pages/Race";
import Nature from "./components/pages/Nature";
import Art from "./components/pages/Art";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Checkout from "./components/pages/Checkout";
import { ShopContextProvider } from "./components/context/ShopContext";
import axios from "axios";
import Gallery from "./components/pages/Gallery";

function App() {

  return (
    <>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<North />}></Route>
          <Route path="/culture" element={<Culture />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/architecture" element={<Architecture />}></Route>
          <Route path="/race" element={<Race />}></Route>
          <Route path="/nature" element={<Nature />}></Route>
          <Route path="/art" element={<Art />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </ShopContextProvider>
    </>
  );
}

export default App;
