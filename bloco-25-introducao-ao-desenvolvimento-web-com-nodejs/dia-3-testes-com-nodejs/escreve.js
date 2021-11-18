//Exercicio 5
const fs = require('fs');

const functionEscreve = (nome, conteudo) => {
  try{
    fs.writeFileSync(`${nomeDoArquivo}.txt`, conteudoDoArquivo);
    return 'ok'
  } catch(err) {
    return console.log(err);
  }
}

module.exports = functionEscreve;
