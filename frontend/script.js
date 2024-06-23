const gameForm = document.getElementById('gameForm');
const gameList = document.getElementById('gameList');

// Function to fetch and render games
async function renderGames() {
  try {
    const response = await fetch('http://localhost:3000/games');
    const games = await response.json();

    gameList.innerHTML = '';
    games.forEach(game => {
      const gameCard = document.createElement('div');
      gameCard.classList.add('game-card');
      gameCard.innerHTML = `
        <h2>${game.title}</h2>
        <a href="${game.gameLink}" target="_blank">Click here to play</a>
        <p><strong>Genre:</strong> ${game.genre}</p>
      `;
      gameList.appendChild(gameCard);
    });
  } catch (error) {
    console.error('Error fetching games:', error);
  }
}

// Function to handle form submission
async function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const genre = document.getElementById('genre').value;
  const gameLink = document.getElementById('gameLink').value;

  if (title && genre && gameLink) {
    const newGame = {
      title: title,
      genre: genre,
      gameLink: gameLink
    };

    try {
      const response = await fetch('http://localhost:3000/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGame)
      });

      if (response.ok) {
        renderGames();
        gameForm.reset();
      } else {
        console.error('Error adding game:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding game:', error);
    }
  } else {
    alert('Please fill out all fields.');
  }
}

gameForm.addEventListener('submit', handleFormSubmit);

// Initial render of games
renderGames();
