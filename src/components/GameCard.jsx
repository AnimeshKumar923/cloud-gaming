import React from 'react';

const GameCard = ({ game }) => {
  // const externalGameUrl = 'https://animeshkumar923.github.io/test-repo/cc-summer-training-projects/tic-tac-toe'; // Replace with actual external game URL

  const openExternalGame = () => {
    window.open(game.url, '_blank');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer bg-gradient-to-r from-purple-500 via-sky-500 to-fuchsia-500" onClick={openExternalGame}>
      <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
      <p className="text-gray-100 mb-2">{game.description}</p>
      <p className="text-gray-100">{game.genre}</p>
    </div>
  );
};

export default GameCard;
