/* eslint-disable linebreak-style */
import getRandomInt from './GetRandomNumber';

const button = document.getElementById('button');
const imgs = Array.from(document.getElementsByTagName('img'));
const miss = document.getElementById('miss');
const count = document.getElementById('count');
const fieldappearance = getRandomInt(imgs.length);
const gameOver = document.getElementById('gameOver');

function resetGame() {
  gameOver.style.display = 'none';
  miss.textContent = 0;
  count.textContent = 0;
  imgs[fieldappearance].classList.remove('appearance');
}

function newGame() {
  const startGame = setInterval(() => {
    for (const img of imgs) {
      if (img.classList.contains('appearance')) {
        miss.textContent = Number(miss.textContent) + 1;
        if (Number(miss.textContent) === 5) {
          clearInterval(startGame);
          gameOver.style.display = 'block';
        }
        img.classList.remove('appearance');
      }
    }
    imgs[fieldappearance].classList.add('appearance');
  }, 1000);
}

button.addEventListener('click', newGame);
button.addEventListener('click', resetGame);
