import React from 'react';

const GameCard = ({ game }) => {
  const externalGameUrl = 'https://animeshkumar923.github.io/test-repo/cc-summer-training-projects/tic-tac-toe'; // Replace with actual external game URL

  const openExternalGame = () => {
    window.open(externalGameUrl, '_blank');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={openExternalGame}>
      <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
      <p className="text-gray-700 mb-2">{game.description}</p>
      <p className="text-gray-500">{game.genre}</p>
    </div>
  );
};

export default GameCard;
