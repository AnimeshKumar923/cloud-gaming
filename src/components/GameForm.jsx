import React, { useState } from 'react';

const GameForm = ({ addGame }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      id: Math.floor(Math.random() * 1000), // Mock ID generation (replace with backend logic)
      title: title,
      genre: genre,
      description: description,
      url: url
    };
    addGame(newGame); // Call parent component function to add the new game
    
    setTitle('');
    setGenre('');
    setDescription('');
    setUrl('');
  };

  return (
    <form className="flex justify-center flex-col bg-white shadow-md rounded-lg p-4 mt-4 mx-96 mb-8" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4 text-slate-500">Add New Game</h2>
      <input
        type="text"
        className="w-full px-3 py-2 mb-3 border rounded-md"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        className="w-full px-3 py-2 mb-3 border rounded-md"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
        type="text"
        className="w-full px-3 py-2 mb-3 border rounded-md"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <textarea
        className="w-full px-3 py-2 mb-3 border rounded-md"
        placeholder="Description"
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit" className="bg-fuchsia-500 text-white px-4 py-2 rounded-full hover:bg-fuchsia-700 mx-36">Submit</button>
    </form>
  );
};

export default GameForm;
