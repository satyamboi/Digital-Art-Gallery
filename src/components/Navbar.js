// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">🎨 ArtGallery</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/gallery" className="hover:underline">Gallery</Link>
        <Link to="/upload" className="hover:underline">Upload</Link>
      </div>
      <DarkModeToggle />
    </nav>
  );
}

export default Navbar;
