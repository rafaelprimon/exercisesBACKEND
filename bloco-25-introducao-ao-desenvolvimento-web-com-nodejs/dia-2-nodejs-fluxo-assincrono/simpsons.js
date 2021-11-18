//Exercicio 4.1
const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((conteudoArquivo) => {
    return JSON.parse(conteudoArquivo);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((personagens) => {
    personagens.forEach((personagem) => console.log(personagem));
  });
  
  //Exercicio 4.2
  
  const fs = require('fs').promises;

  async function personagemId(id) {
    const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((conteudoArquivo) => JSON.parse(conteudoArquivo));

    const simpsonPorID = simpsons.find((simpson) => simpson.id === id);

    if(!simpsonPorID){
      throw new Error('id não encontrado');
    }
    return simpsonPorID;
  }

   //Exercicio 4.3

   const fs = require('fs').promises;

   async function filtraPersonagemPorId() {
     const simpsons = await fs 
     .readFile('./simpsons.json', 'utf-8')
     .then((conteudoArquivo) => JSON.parse(conteudoArquivo));

     const personagemFiltrado = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

     await fs.writeFile('/.simpsons.json', JSON.stringify(personagemFiltrado));
   }