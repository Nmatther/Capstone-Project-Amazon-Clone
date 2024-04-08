import './App.css';
import React from 'react';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import { AuthProvider } from './authContext';
import Register from './Components/Register/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Routes>
          <Route path="/register" element = {<Register />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/checkout" element = {<Checkout />} />
          <Route path="/" element = {<Home />}/>
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
