import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechWatch from './pages/TechWatch';
import Skills from './pages/Skills';
import BTSSIO from './pages/BTSSIO';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-secondary via-secondary-light to-secondary">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veille-technologique" element={<TechWatch />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/bts-sio" element={<BTSSIO />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;