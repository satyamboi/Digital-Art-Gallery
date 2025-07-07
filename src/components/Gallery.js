import React from 'react';

const artworks = [
  { id: 1, title: "Cyber Dream", artist: "Ravi", image: "https://picsum.photos/200?random=1" },
  { id: 2, title: "Space Flower", artist: "Neha", image: "https://picsum.photos/200?random=2" },
];

const Gallery = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      {artworks.map(art => (
        <div key={art.id}>
          <img src={art.image} alt={art.title} width={200} />
          <h3>{art.title}</h3>
          <p>👩‍🎨 {art.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
