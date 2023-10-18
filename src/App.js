import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from './components/Profile';
import Contact from './components/Contact';
import DisplayComponent from './components/Display'; // Corrected import
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/display/:inputValue/:inputValue2" element={<DisplayComponent />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;