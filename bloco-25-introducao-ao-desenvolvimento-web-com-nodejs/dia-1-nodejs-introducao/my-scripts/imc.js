const readline = require('readline-sync');

//const meuPeso = 78;
//const minhaAltura = 180;

function imc () {
  //const peso = meuPeso;
  //const altura = minhaAltura;
const peso = readline.questionFloat('Informe seu peso');
const altura = readline.questionInt('Informe sua altura');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow (altura / 100, 2)).toFixed(2);

  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');

  console.log(`IMC: ${imc}`);
}

imc();

module.exports = imc;
