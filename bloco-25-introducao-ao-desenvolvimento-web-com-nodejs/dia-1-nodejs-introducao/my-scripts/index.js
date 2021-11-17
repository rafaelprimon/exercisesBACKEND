const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

let relacaoScripts = scripts.map((script, i) => `${i + 1} - ${script.name}`);

relacaoScripts.unshift('Escolha o script pelo número ');
relacaoScripts = relacaoScripts.join('\n');

const scriptNum = readline.questionInt(relacaoScripts) - 1;

const scri = scripts[scriptNum];
if (!scri) return console.log("número invalido");

require(scri.scri);