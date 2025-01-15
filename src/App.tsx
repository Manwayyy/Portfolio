import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechWatch from './pages/TechWatch';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veille-technologique" element={<TechWatch />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/projets" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;