import React, { useState } from 'react';

const UploadForm = () => {
  const [artwork, setArtwork] = useState({
    title: '',
    artist: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setArtwork(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Artwork "${artwork.title}" uploaded (not yet connected to backend)`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} /><br />
      <input name="artist" placeholder="Artist" onChange={handleChange} /><br />
      <input type="file" name="image" onChange={handleChange} /><br />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
