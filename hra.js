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
  gameCheck();
};

const gameCheck = async () => {
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
  } else if (vitez === null && currentPlayer === 'cross') {
    buttons.forEach((button) => {
      button.disabled = true;
    });
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: herniPole,
          player: 'x',
        }),
      },
    );

    const data = await response.json();
    const { x, y } = data.position;
    const field = buttons[x + y * 10];
    field.disabled = false;
    field.click();
  } else {
    buttons.forEach((button) => {
      if (
        button.classList.contains('board__field--circle') ||
        button.classList.contains('board__field--cross')
      ) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    });
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
