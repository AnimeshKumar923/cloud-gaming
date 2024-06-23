// Sample initial games (simulating a backend)
let games = [
  { id: 1, title: 'Game 1', genre: 'Action', gameLink: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
];

const gameForm = document.getElementById('gameForm');
const gameList = document.getElementById('gameList');

// Function to render games
function renderGames() {
  gameList.innerHTML = '';

  games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    gameCard.innerHTML = `
      <h2>${game.title}</h2>
      <p>${game.gameLink}</p>
      <p><strong>Genre:</strong> ${game.genre}</p>
    `;
    gameList.appendChild(gameCard);
  });
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const genre = document.getElementById('genre').value;
  const gameLink = document.getElementById('gameLink').value;

  if (title && genre && gameLink) {
    const newGame = {
      id: games.length + 1, // Mock ID generation (replace with backend logic)
      title: title,
      genre: genre,
      gameLink: description
    };

    games.push(newGame);
    renderGames();
    gameForm.reset(); // Reset form fields
  } else {
    alert('Please fill out all fields.');
  }
}

// Event listener for form submission
gameForm.addEventListener('submit', handleFormSubmit);

// Initial render of games
renderGames();
