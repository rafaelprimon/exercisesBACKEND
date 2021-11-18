//Exercicio 1
function retornaPromise (a, b, c) {
  return new Promise((res, rej) => {

    if( typeof a !== 'number' || 
    typeof b !== 'number' ||
    typeof c !== 'number'
    )
    rej('Informe apenas numeros');

  const calculo = (a + b) * c;
  
  if (calculo > 50) {
  rej('Valor muito baixo');
  }
  res(calculo);
  });
}

retornaPromise(2, 5, 10)
  .then(res => console.log(res))
  .catch(err => console.log(err))

  // Exercicio 2
//Solução braçal
 const aleat1 = Math.floor(Math.random() * 100 + 1) ;
  const aleat2 = Math.floor(Math.random() * 100 + 1) ;
  const aleat3 = Math.floor(Math.random() * 100 + 1) ;

  retornaPromise(aleat1, aleat2, aleat3)
  .then(res => console.log(res))
  .catch(err => console.log(err)) 

  //Estudando mais e vendo o course

 function numAleatorio(){
    return Math.floor(Math.random() * 100 + 1) ;
  };

  function chamandoRetornaPromise() {
    const numAleat = Array.from({ length: 3}).map(numAleatorio);

    retornaPromise(...numAleat)
      .then(res => console.log(res.calculo))
      .catch(err => console.error(err.message))
  }; 

  //Exercicio 3 

  async function chamandoRetornaPromise() {
    const numAleat = Array.from({ length: 3}).map(numAleatorio);
    try {
      const res = await retornaPromise(...numAleat)
      console.log(res);
    } catch (err) {
     console.error(err)
   };
  }