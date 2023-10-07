// const boardButtonElement = document.querySelector('.button__game');

let currentPlayer = 'circle';

const playerMove = (event) => {
  // console.log("something's working");
  let playerIcon = document.querySelector('.icon__player');

  console.log(playerIcon);

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
};

const restartConfirmation = (event) => {
  if (confirm('Opravdu chceš začít znovu?') === false) {
    event.preventDefault();
  }
  console.log('neco se volalo');
};

document
  .querySelector('.button__game:nth-child(1)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(2)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(3)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(4)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(5)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(6)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(7)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(8)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(9)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__game:nth-child(10)')
  .addEventListener('click', playerMove);

document
  .querySelector('.button__start')
  .addEventListener('click', restartConfirmation);
