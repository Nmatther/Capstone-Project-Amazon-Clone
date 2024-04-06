import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/login" element = {<Login />} />
          <Route path="/checkout" element = {<Checkout />} />
          <Route path="/" element = {<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
