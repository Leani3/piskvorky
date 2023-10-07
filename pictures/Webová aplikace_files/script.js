const orderMadeConfirmation = () => {
  document.body.innerHTML = 'Objednávka odeslána ke zpracování';
};

document
  .querySelector('#odeslanaObjednavka')
  .addEventListener('click', orderMadeConfirmation);
