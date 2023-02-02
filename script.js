//imports
const pokemonData = require("./mock-pokemon");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/api/pokemon/:id", (req, res) => {
  // passer un param dans l url
  //Il faut faire un parseInt car express transmet les donnees en string
  const id = parseInt(req.params.id);
  //find renvoi le premier element du tableau
  const pokemon = pokemonData.find((pokemon) => pokemon.id === id);
  //Nous n utilisons pas cette methodwe mais une methode JSON
  // res.send(`Voici le pokemon ${pokemon.name}`);

  //Methode JSON
  res.json(pokemon);
});

//Afficher les 12 pokemons
app.get("/api/pokemons", (req, res) => {
  res.send(`Il y a ${pokemonData.length} pokemons dans le pokedex`);
});

app.listen(port, () =>
  console.log(`Notre application est demarree sur le port ${port}`)
);
