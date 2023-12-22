export default async function CreateListPokemon (count) {
    const createListPokemon =   await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${count}.`)
    const response = await createListPokemon.json();
    return response.results
}