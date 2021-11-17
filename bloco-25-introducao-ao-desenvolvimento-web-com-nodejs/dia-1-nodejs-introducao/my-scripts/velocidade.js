const readline = require('readline-sync');

function velocidade () {
  const distancia = readline.questionInt('Qual a sua velocidade? ');
  const tempo = readline.question('Qual o tempo? ');

  const calcvelocidade = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${calcvelocidade}`);
};

velocidade();

module.exports =  velocidade;