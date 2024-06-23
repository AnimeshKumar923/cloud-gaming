// Sample initial games (simulating a backend)
let games = [
  { id: 1, title: 'Tic Tac Toe', genre: 'Casual', description: 'https://animeshkumar923.github.io/test-repo/cc-summer-training-projects/tic-tac-toe/' }
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
      <a href=${game.description} target = _blank> Click here to play</a>
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
  const description = document.getElementById('description').value;

  if (title && genre && description) {
    const newGame = {
      id: games.length + 1, // Mock ID generation (replace with backend logic)
      title: title,
      genre: genre,
      description: description
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
