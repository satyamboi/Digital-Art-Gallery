import React from 'react';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      <h1>🎨 Digital Art Gallery</h1>
      <a href="/upload">Upload Artwork</a>
      <Gallery />
    </div>
  );
};

export default Home;

