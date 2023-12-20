export default async function GetPokemon(id) {
    const GetPokemonById = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const response = await GetPokemonById.json()
    return response
}