const readline = require('readline-sync');

function resultado (num, resp) {
  if (num !== resp) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }
  return console.log('Parabéns, número correto!');
};

function jogoDeAdivinha(){
  const resp = readline.questionInt('Digite um numero de 0 a 10: ');
  const num = parseInt(Math.random()*10);

  resultado(num, resp);

  const jogarMais = readline.question(
    'Deseja jogar novamente? (Digite s para sim) '
  );
  
  if (jogarMais !== 's')  return console.log('OK, até a próxima!');

  jogoDeAdivinha();
};

jogoDeAdivinha();

module.exports = jogoDeAdivinha;
