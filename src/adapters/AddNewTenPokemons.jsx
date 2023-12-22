export default async function AddNewTenPokemons (count) {
    const newTenPokemons =      await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${count}.`)
    const response = await newTenPokemons.json();
    return response.results
}