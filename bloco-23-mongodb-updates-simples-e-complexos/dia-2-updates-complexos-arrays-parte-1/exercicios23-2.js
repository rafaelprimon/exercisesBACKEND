// Exercício 1: Adicione a categoria "superhero" ao filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: { category: "superhero" },
  },
);

/*  Exercício 2: Utilizando o modificador $each , adicione as categorias "villain" e "comic-based" ao filme Batman .*/
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: { 
      category: {
        $each: [
      "villain",
      "comic-based",
    ] , }, },
  },
);

// Exercício 3: Remova a categoria "action" do filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
    $pull: { category: "action" },
  },
);

// Exercício 4: Remova o primeiro elemento do array category do filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: { category: -1 },
  },
);

//Exercício 5: Remova o último elemento do array category do filme Batman .
db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: { category: 1 },
  },
);

/* Exercício 6: Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique. */
db.movies.updateOne(
  { title: "Batman" },
  {
    $addToSet: { category: "action" },
  },
);

// Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone .
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"], } },
  {
    $addToSet: { category: "90's" },
  },
);

//Exercício 8: Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:
db.movies.update(
  { title: "Home Alone" },
  {
    $addToSet: { 
      cast: [
        {
          "actor": "Macaulay Culkin",
          "character": "Kevin"
        },
        {
          "actor": "Joe Pesci",
          "character": "Harry"
        },
        {
          "actor": "Daniel Stern"
        }
      ]
    },
  },
);

/* Exercício 9: Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone . */
db.movies.updateOne(
  { 
    title: "Home Alone", 
      "cast.actor": 'Daniel Stern',
  },
  {
    $push: { "cast.$.character": "Marv" },
  },
);
