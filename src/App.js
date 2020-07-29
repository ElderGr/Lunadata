import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

//style
import './App.css';

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

import Routes from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  )
}

export default App;
