import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const buttons = document.querySelectorAll('.game-board button');

const playerMove = (event) => {
  let playerIcon = document.querySelector('.icon__player');

  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
    playerIcon.src = 'pictures/cross.svg';
    event.target.classList.add('board__field--circle');
  } else {
    currentPlayer = 'circle';
    playerIcon.src = 'pictures/circle.svg';
    event.target.classList.add('board__field--cross');
  }

  event.target.disabled = true;

  let herniPole = [];

  buttons.forEach((button) => {
    if (button.classList.contains('board__field--circle')) {
      herniPole.push('o');
    } else if (button.classList.contains('board__field--cross')) {
      herniPole.push('x');
    } else {
      herniPole.push('_');
    }
  });

  const vitez = findWinner(herniPole);

  if (vitez === 'o' || vitez === 'x') {
    const winnerIs = () => {
      alert(`Vyhrál hráč se symbolem ${vitez.toUpperCase()}.`);
      window.location.reload();
    };
    setTimeout(winnerIs, 300);
  } else if (vitez != null) {
    const tieIs = () => {
      alert(`No tak nic. Musíte začít znovu`);
      window.location.reload();
    };
    setTimeout(tieIs, 300);
  }
};

buttons.forEach((button) => {
  button.addEventListener('click', playerMove);
});

const restartConfirmation = (event) => {
  if (confirm('Opravdu chceš ukončit tuto hru?') === false) {
    event.preventDefault();
  }
};

document
  .querySelector('.button__start')
  .addEventListener('click', restartConfirmation);

document
  .querySelector('.button__icon')
  .addEventListener('click', restartConfirmation);
