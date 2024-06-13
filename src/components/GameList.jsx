import React from 'react';
import GameCard from './GameCard';

const games = [
  { id: 1, title: 'Tic Tac Toe', genre: 'Casual', description: 'A classic tic tac toe game to play with your friends' }
];

const GameList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
