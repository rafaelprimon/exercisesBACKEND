const fs = require('fs/promises');

function recSimpson () {
  return fs.readFile('./simpsons.json', 'utf-8')
  .then(fileContent => JSON.parse(fileContent));
}

function setSimpson (newSimpson) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpson));
}

module.exports = {
  recSimpson,
  setSimpson,
}