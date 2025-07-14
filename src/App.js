// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/Navbar';
import Home from './pages/home';
import Gallery from './pages/Gallery'; // ✅ This file must exist in /pages
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <NavbarComponent />
        <main className="px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
