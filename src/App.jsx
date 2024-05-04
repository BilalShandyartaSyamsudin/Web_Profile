import React from 'react';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skill from './components/pages/Skill';
import Contact from './components/pages/Contact';
import Footer from './components/layouts/Footer';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
