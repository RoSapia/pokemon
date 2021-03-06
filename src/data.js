const pokemon = {
  pesquisaPokemon(data, nomePokemon) {
    const listaPokemon = data.pokemon
    let busca = listaPokemon.filter(p => p.name === nomePokemon)
    if (busca.length) {      
      return (busca)
    } else {
      alert("Pokémon não encontrado!");
      throw new Error('Pokemon não encontrado')
     }
  },
  filtrarLendarios(data) {
    const listaPokemon = data.pokemon
    const lendarios = listaPokemon.filter(p => p['pokemon-rarity'] === 'legendary')
    return (lendarios)
  },
  calculoAgregado(data, pesquisado) {
    const quantPesquisado = pesquisado.length
    const listaPokemon = data.pokemon
    const quantPokemons = listaPokemon.length
    const porcPesquisado = (quantPesquisado * 100) / quantPokemons
    return (porcPesquisado.toFixed(1))
  },
  ordenarPokemon(pokemons, valorOpcao) {
    if (valorOpcao === 'az') {
      pokemons = pokemons.sort(function (a, b) {
        return a.name.localeCompare(b.name)
      })
    } else if(valorOpcao === 'za'){
      pokemons = pokemons.sort(function (a, b) {
        return b.name.localeCompare(a.name)
      })
    }
    return pokemons
  }
}

export default pokemon



