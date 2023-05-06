const search = document.getElementById('search')
const search_btn = document.getElementById('search-btn')


// api https://pokeapi.co/docs/v2#pokemon
const getPokemonData = async query => {
    document.getElementById('error').classList.remove('show')
    document.getElementById('error').classList.add('hidden')
        
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`
    const response = await fetch(url)

    if(response.status == 404 || response.statusText == 'Not Found'){
        document.getElementById('error').classList.add('show')
        document.getElementById('error').classList.remove('hidden')
        return
    }

    const pokemon = await response.json()
    console.log(pokemon)
    let berat = pokemon.weight/10;

    // update ui with data 
    document.getElementById('img').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    document.getElementById('namaPokemon').innerHTML = pokemon.name
    document.getElementById('darahPokemon').innerHTML = `HP ${pokemon.stats[0].base_stat}`
    document.getElementById('xpPokemon').innerHTML = `XP ${pokemon.base_experience}`
    document.getElementById('tipePokemon').innerHTML = `${pokemon.types[0].type.name}`
    document.getElementById('beratPokemon').innerHTML = `${berat} m`
    document.getElementById('tinggiPokemon').innerHTML = `0.${pokemon.height}m`
    document.getElementById('abilitySatuPokemon').innerHTML = `${pokemon.abilities[0].ability.name}`
    document.getElementById('abilityDuaPokemon').innerHTML = `${pokemon.abilities[1].ability.name}`

}

search_btn.addEventListener('click', () => getPokemonData(search.value))
