import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Equipment from './pages/Equipment';
import Artists from './pages/Artists';
import Blog from './pages/Blog';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

