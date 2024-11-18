// script.js
const character = document.getElementById('character');
const gameArea = document.getElementById('gameArea');

// Lista de 10 cores distintas
const colors = [
  'red', 'green', 'blue', 'yellow', 'purple', 
  'orange', 'pink', 'cyan', 'brown', 'lime'
];

// Função para gerar um índice aleatório e escolher uma cor
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Atribui uma cor aleatória ao personagem ao iniciar o jogo
const characterColor = getRandomColor();
character.style.backgroundColor = characterColor;

// Função para mover o personagem
let x = 275; // Posição inicial X
let y = 175; // Posição inicial Y
const speed = 10; // Velocidade de movimento

function moveCharacter(e) {
  const gameWidth = gameArea.offsetWidth;
  const gameHeight = gameArea.offsetHeight;

  // Atualiza as coordenadas com base na tecla pressionada
  if (e.key === 'ArrowUp') {
    if (y - speed >= 0) y -= speed;
  }
  if (e.key === 'ArrowDown') {
    if (y + speed + character.offsetHeight <= gameHeight) y += speed;
  }
  if (e.key === 'ArrowLeft') {
    if (x - speed >= 0) x -= speed;
  }
  if (e.key === 'ArrowRight') {
    if (x + speed + character.offsetWidth <= gameWidth) x += speed;
  }

  // Atualiza a posição do personagem
  character.style.left = `${x}px`;
  character.style.top = `${y}px`;

  // Atualiza as informações no HUD
  document.getElementById('posX').textContent = x;
  document.getElementById('posY').textContent = y;
  document.getElementById('color').textContent = characterColor;
}

// Adiciona um ouvinte de evento para detectar as teclas pressionadas
document.addEventListener('keydown', moveCharacter);
