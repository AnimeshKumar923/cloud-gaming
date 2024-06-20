import React, { useState } from 'react';
import GameList from './components/GameList';
import GameForm from './components/GameForm';

function App() {
  const [games, setGames] = useState([
    { id: 1, title: 'Tic Tac Toe', genre: 'Casual', description: 'A classic tic tac toe game to play with your friends', url: 'https://animeshkumar923.github.io/test-repo/cc-summer-training-projects/tic-tac-toe' },
    // Add more games as needed
  ]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <div className="flex justify-between flex-col container mx-auto p-4">
      <h1 className="self-center text-3xl font-semibold mb-4 ">Cloud Gaming Platform</h1>
      <GameForm addGame={addGame} />
      <hr />
      <h2 className="self-center text-2xl font-semibold mt-8 mb-4">Available Games</h2>
      <GameList games={games} />
    </div>
  );
}

export default App;
