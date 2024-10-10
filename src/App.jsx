import { useState } from "react";
import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { About, Services, Home, Contact } from "./components/page";
import { Product } from "./components/page/page2/product";
import { Playment } from "./components/page/payment";
import { Section } from "./components/page/section";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/payment" element={<Playment />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/section" element={<Section />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about/product" element={<Product />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
