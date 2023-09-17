document.body.innerHTML += 'Měsíční příjem ' + 7 * 320 * 21;
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Daň ' + Math.floor(7 * 320 * 21 * (1 - 0.6) * 0.15);
document.body.innerHTML += '<br>';
document.body.innerHTML +=
  'Pán prstenů: Dvě věže trva ' +
  Math.floor(223 / 60) +
  ' hodiny a ' +
  %223/60 +
  ' minut';
