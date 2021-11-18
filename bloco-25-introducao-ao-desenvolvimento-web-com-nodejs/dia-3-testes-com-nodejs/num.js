//Exercicio 2
function num(n) {
  //exercicio 3 (só o typeof)
  if (n > 0) {
    return 'positivo'
  } else if (n < 0) {
    return 'negativo'
  } else if (n = 0){
    return 'neutro'
  }else if (typeof n !== 'number') {
    return 'informe um número'
}
}

module.exports = num;
