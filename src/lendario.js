import pokemon from './data.js';

import data from './data/pokemon/pokemon.js';


const lendarios = pokemon.filtrarLendarios(data)

function geraCards(arrayPokemons) {
  let card = ""
  for (let pokemon of arrayPokemons) {
    card += `
        <article class="divcard">

        <p class="num">${pokemon.num}</p>
        <p class="name">${pokemon.name}</p>
        <img src="${pokemon.img}">
        <p class="texto-card">Height:     ${pokemon.size.height}</p>
        <p class="texto-card">Weight:     ${pokemon.size.weight}</p>
        <p class="texto-card">Type:       ${pokemon.type}</p>
        <p class="texto-card">Weaknesses: ${pokemon.weaknesses}</p>
        <br>
        </article>`
  }
  return card
}

function exibeCards(arrayPokemon) {
  const cardsPokemon = document.getElementById("tabela-resultado")
  cardsPokemon.innerHTML = ""
  cardsPokemon.innerHTML = geraCards(arrayPokemon)
}
exibeCards(lendarios)

