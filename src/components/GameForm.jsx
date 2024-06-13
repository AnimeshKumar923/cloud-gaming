import React, { useState } from 'react';

const GameForm = ({ addGame }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = {
      id: Math.floor(Math.random() * 1000), // Mock ID generation (replace with backend logic)
      title: title,
      genre: genre,
      description: description
    };
    addGame(newGame); // Call parent component function to add the new game
    setTitle('');
    setGenre('');
    setDescription('');
  };

  return (
    <form className="bg-white shadow-md rounded-lg p-4 mt-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Add New Game</h2>
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
      <textarea
        className="w-full px-3 py-2 mb-3 border rounded-md"
        placeholder="Description"
        rows="3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit" className="bg-fuchsia-500 text-white px-4 py-2 rounded-md hover:bg-fuchsia-700">Submit</button>
    </form>
  );
};

export default GameForm;
