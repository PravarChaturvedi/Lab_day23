function showPlayerDetails(player) {
  // Get player details based on player name
  let playerName = player.dataset.player;
  let playerScore = getPlayerScore(playerName);
  let playerImage = getPlayerImage(playerName);
  let playerDescription = getPlayerDescription(playerName);

  // Populate pop-up with player details
  document.getElementById('player-name').textContent = playerName;
  document.getElementById('player-image').src = playerImage;
  document.getElementById('player-description').textContent = playerDescription;

  // Display the pop-up
  document.getElementById('player-details-popup').style.display = 'block';
}

function closePopup() {
  // Hide the pop-up
  document.getElementById('player-details-popup').style.display = 'none';
}

// Dummy functions to get player score, image, and description
function getPlayerScore(playerName) {
  // Implement logic to get player score based on playerName
  return 100; // Dummy value for demonstration
}

function getPlayerImage(playerName) {
  // Implement logic to get player image URL based on playerName
  return 'cricpro-dhoni.png'; // Dummy value for demonstration
}

function getPlayerDescription(playerName) {
  // Implement logic to get player description based on playerName
  return 'Description of ' + playerName; // Dummy value for demonstration
}

// Attach click event listener to player names
let playerNames = document.querySelectorAll('.player-name');
playerNames.forEach((player) => {
  player.addEventListener('click', () => showPlayerDetails(player));
});
