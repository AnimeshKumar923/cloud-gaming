import React, { useEffect, useState } from 'react';
import GameCard from './GameCard';

// Assuming GameList receives games as a prop
const GameList = ({ games }) => {
  // Local state to store games
  const [localGames, setLocalGames] = useState(games);

  // Effect to update localGames when games prop changes
  useEffect(() => {
    setLocalGames(games);
  }, [games]);

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {localGames.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
