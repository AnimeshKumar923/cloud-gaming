import React, { useState } from 'react';
import GameList from './components/GameList';
import GameForm from './components/GameForm';

function App() {
  const [games, setGames] = useState([
    { id: 1, title: 'Game 1', genre: 'Action', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Game 2', genre: 'Adventure', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more games as needed
  ]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Cloud Gaming Platform</h1>
      <GameForm addGame={addGame} />
      <h2 className="text-2xl font-semibold mt-8 mb-4">Available Games</h2>
      <GameList games={games} />
    </div>
  );
}

export default App;
